import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CalendarCheck,
  QrCode,
  Clock,
  MapPin,
  Car,
  Building,
  CheckCircle2,
  Download,
  Share2,
  Users
} from 'lucide-react';
import { BookingRecord } from '../../types';

export const MemberBookings: React.FC = () => {
  const { bookingsList, currentMember, formatCurrency, showToast } = useApp();
  const [selectedBookingForPass, setSelectedBookingForPass] = useState<BookingRecord | null>(null);

  // Filter bookings for current member
  const memberBookings = bookingsList.filter(b => b.memberId === currentMember.id);

  const handleDownloadPass = (ref: string) => {
    showToast('Itinerary E-Pass Saved', `Downloaded offline VIP credential for ${ref}`, 'success');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-serif font-bold text-white">My Trips & Digital E-Vouchers</h2>
        <p className="text-xs text-slate-400 mt-1">
          Confirmed package reservations, hotel check-in vouchers, and assigned VIP chauffeur contacts.
        </p>
      </div>

      {memberBookings.length > 0 ? (
        <div className="space-y-4">
          {memberBookings.map(bk => (
            <div
              key={bk.id}
              className="glass-card rounded-2xl border-slate-800 p-6 space-y-4 hover:border-cyan-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      REF: {bk.bookingRef}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {bk.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mt-1">
                    {bk.packageName}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Total Investment</span>
                  <span className="text-xl font-serif font-bold text-amber-400">
                    {formatCurrency(bk.amountUSD)}
                  </span>
                </div>
              </div>

              {/* Booking Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>Travel Dates</span>
                  </span>
                  <p className="font-semibold text-slate-200">{bk.travelDate}</p>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold flex items-center space-x-1">
                    <Users className="w-3 h-3 text-amber-400" />
                    <span>Party Size</span>
                  </span>
                  <p className="font-semibold text-slate-200">{bk.guests} Guests</p>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold flex items-center space-x-1">
                    <Building className="w-3 h-3 text-emerald-400" />
                    <span>Resort / Suite</span>
                  </span>
                  <p className="font-semibold text-slate-200 truncate">{bk.hotelBooked || 'Sutera Harbour Club'}</p>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase font-semibold flex items-center space-x-1">
                    <Car className="w-3 h-3 text-purple-400" />
                    <span>Assigned Chauffeur</span>
                  </span>
                  <p className="font-semibold text-slate-200 truncate">{bk.assignedDriver || 'VIP Fleet Dispatch'}</p>
                </div>
              </div>

              {/* Special Requests */}
              {bk.specialRequests && (
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                    Concierge Notes & VIP Requests:
                  </span>
                  <p className="text-slate-300 italic">{bk.specialRequests}</p>
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-2 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Wholesale reservation locked with Sabah Regional Hub</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDownloadPass(bk.bookingRef)}
                    className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs text-slate-200 flex items-center space-x-1.5 border border-slate-700"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download E-Ticket</span>
                  </button>

                  <button
                    onClick={() => setSelectedBookingForPass(bk)}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-cyan-lg/20"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>View QR Pass</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center glass-card rounded-2xl border-slate-800 space-y-3">
          <CalendarCheck className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No active trip bookings</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            You haven't reserved a Sabah package yet. Explore our 3 flagship packages to lock in your next luxury escape.
          </p>
        </div>
      )}

      {/* QR Pass Modal */}
      {selectedBookingForPass && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl space-y-6 text-center animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">Digital Boarding Voucher</span>
              <h3 className="text-lg font-serif font-bold text-white">{selectedBookingForPass.packageName}</h3>
              <p className="text-xs text-slate-400 font-mono">REF: {selectedBookingForPass.bookingRef}</p>
            </div>

            <div className="w-48 h-48 bg-white p-3 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
              <QrCode className="w-40 h-40 text-slate-950" />
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p>Guest: <strong className="text-white">{selectedBookingForPass.memberName}</strong> ({selectedBookingForPass.memberTier})</p>
              <p>Dates: <strong className="text-white">{selectedBookingForPass.travelDate}</strong></p>
              <p className="text-[11px] text-emerald-400">Present at KK Airport tarmac greeting & resort front desk</p>
            </div>

            <button
              onClick={() => setSelectedBookingForPass(null)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white uppercase tracking-wider"
            >
              Close Pass
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
