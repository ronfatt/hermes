import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  AppMode,
  Currency,
  MemberProfile,
  FlagshipPackage,
  MerchantPartner,
  BookingRecord,
  VIPEvent
} from '../types';
import {
  INITIAL_MEMBERS,
  MERCHANT_PARTNERS,
  INITIAL_BOOKINGS,
  VIP_EVENTS
} from '../data/ecosystemData';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface ToastState {
  title: string;
  desc: string;
  type: 'success' | 'info' | 'gold';
}

interface AppContextType {
  currentMode: AppMode;
  setCurrentMode: (mode: AppMode) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatCurrency: (amountUSD: number) => string;
  
  // Member state
  currentMember: MemberProfile;
  setCurrentMember: (m: MemberProfile) => void;
  membersList: MemberProfile[];
  
  // Bookings state
  bookingsList: BookingRecord[];
  addBooking: (booking: Omit<BookingRecord, 'id' | 'createdAt' | 'bookingRef'>) => void;
  updateBookingStatus: (id: string, status: BookingRecord['status']) => void;
  
  // Merchants state
  merchantsList: MerchantPartner[];
  redeemedPerks: string[];
  redeemPerk: (merchantId: string) => void;
  
  // Events state
  eventsList: VIPEvent[];
  rsvpEvent: (eventId: string) => void;
  
  // Packages modal & merchant modal
  selectedPackageForModal: FlagshipPackage | null;
  setSelectedPackageForModal: (pkg: FlagshipPackage | null) => void;
  selectedMerchantForModal: MerchantPartner | null;
  setSelectedMerchantForModal: (m: MerchantPartner | null) => void;

  // Sound & Notifications
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  toast: ToastState | null;
  showToast: (title: string, desc: string, type?: ToastState['type']) => void;
  triggerConfetti: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const CURRENCY_RATES: Record<Currency, { rate: number; symbol: string }> = {
  USD: { rate: 1, symbol: '$' },
  CNY: { rate: 7.24, symbol: '¥' },
  MYR: { rate: 4.65, symbol: 'RM ' },
  SGD: { rate: 1.34, symbol: 'S$' },
  HKD: { rate: 7.82, symbol: 'HK$' }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentMode, setCurrentModeState] = useState<AppMode>('presentation');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [currency, setCurrencyState] = useState<Currency>('USD');
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(true);
  
  const [membersList, setMembersList] = useState<MemberProfile[]>(INITIAL_MEMBERS);
  const [currentMember, setCurrentMemberState] = useState<MemberProfile>(INITIAL_MEMBERS[0]);
  const [bookingsList, setBookingsList] = useState<BookingRecord[]>(INITIAL_BOOKINGS);
  const [merchantsList] = useState<MerchantPartner[]>(MERCHANT_PARTNERS);
  const [redeemedPerks, setRedeemedPerks] = useState<string[]>([]);
  const [eventsList, setEventsList] = useState<VIPEvent[]>(VIP_EVENTS);
  
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<FlagshipPackage | null>(null);
  const [selectedMerchantForModal, setSelectedMerchantForModal] = useState<MerchantPartner | null>(null);
  const [toast, setToast] = useState<ToastState | null>(null);

  useEffect(() => {
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  const setCurrentMode = (mode: AppMode) => {
    sound.playClick();
    setCurrentModeState(mode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setCurrency = (c: Currency) => {
    sound.playClick();
    setCurrencyState(c);
  };

  const setSoundEnabled = (val: boolean) => {
    setSoundEnabledState(val);
    sound.enabled = val;
    if (val) sound.playChime();
  };

  const setCurrentMember = (m: MemberProfile) => {
    sound.playClick();
    setCurrentMemberState(m);
    showToast(`已切换演示会员画像`, `当前会籍：${m.name}（${m.tier}）`, 'gold');
  };

  const formatCurrency = (amountUSD: number): string => {
    const { rate, symbol } = CURRENCY_RATES[currency];
    const converted = Math.round(amountUSD * rate);
    return `${symbol}${converted.toLocaleString()}`;
  };

  const showToast = (title: string, desc: string, type: ToastState['type'] = 'info') => {
    setToast({ title, desc, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F59E0B', '#10B981', '#FFFFFF', '#06B6D4']
      });
    } catch {
      // Ignore
    }
  };

  const addBooking = (bookingData: Omit<BookingRecord, 'id' | 'createdAt' | 'bookingRef'>) => {
    sound.playSuccess();
    triggerConfetti();
    const newRef = `HSB-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRecord: BookingRecord = {
      ...bookingData,
      id: `bk-${Date.now()}`,
      bookingRef: newRef,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setBookingsList(prev => [newRecord, ...prev]);
    
    // update current member points and trips
    setMembersList(prev => prev.map(m => {
      if (m.id === currentMember.id) {
        const updated: MemberProfile = {
          ...m,
          totalTrips: m.totalTrips + 1,
          totalSpentUSD: m.totalSpentUSD + bookingData.amountUSD,
          points: m.points + Math.round(bookingData.amountUSD * 2.5),
          nextTrip: {
            packageName: bookingData.packageName,
            date: bookingData.travelDate,
            status: '已锁定义务接驾与总统海景别墅',
            bookingRef: newRef
          }
        };
        setCurrentMemberState(updated);
        return updated;
      }
      return m;
    }));

    showToast('沙巴奢华文旅套餐已成功锁定！', `预订编号 [${newRef}] 已生成，沙巴专属管家正在对接。`, 'gold');
  };

  const updateBookingStatus = (id: string, status: BookingRecord['status']) => {
    sound.playClick();
    setBookingsList(prev => prev.map(b => b.id === id ? { ...b, status } : b));
    showToast('履约调度状态已更新', `订单状态已切换为【${status}】`, 'info');
  };

  const redeemPerk = (merchantId: string) => {
    sound.playSuccess();
    triggerConfetti();
    setRedeemedPerks(prev => [...prev, merchantId]);
    
    // reward member with points
    setMembersList(prev => prev.map(m => {
      if (m.id === currentMember.id) {
        const updated: MemberProfile = {
          ...m,
          points: m.points + 250
        };
        setCurrentMemberState(updated);
        return updated;
      }
      return m;
    }));

    const merchant = merchantsList.find(m => m.id === merchantId);
    showToast('商户特权激活成功！', `已生成【${merchant?.name || '签约商户'}】现场核销二维码（+250 积分奖励）`, 'gold');
  };

  const rsvpEvent = (eventId: string) => {
    sound.playSuccess();
    triggerConfetti();
    setEventsList(prev => prev.map(ev => {
      if (ev.id === eventId) {
        return {
          ...ev,
          rsvpCount: Math.min(ev.capacity, ev.rsvpCount + 1),
          status: ev.rsvpCount + 1 >= ev.capacity ? '席位即将告罄' : ev.status
        };
      }
      return ev;
    }));

    const event = eventsList.find(e => e.id === eventId);
    showToast('VIP峰会席位已确认！', `已为您生成【${event?.title}】电子入场贵宾票凭证`, 'gold');
  };

  return (
    <AppContext.Provider
      value={{
        currentMode,
        setCurrentMode,
        activeSection,
        setActiveSection,
        currency,
        setCurrency,
        formatCurrency,
        currentMember,
        setCurrentMember,
        membersList,
        bookingsList,
        addBooking,
        updateBookingStatus,
        merchantsList,
        redeemedPerks,
        redeemPerk,
        eventsList,
        rsvpEvent,
        selectedPackageForModal,
        setSelectedPackageForModal,
        selectedMerchantForModal,
        setSelectedMerchantForModal,
        soundEnabled,
        setSoundEnabled,
        toast,
        showToast,
        triggerConfetti
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
