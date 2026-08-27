import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Toast } from './components/common/Toast';
import { PackageDetailModal } from './components/common/PackageDetailModal';
import { MerchantDetailModal } from './components/common/MerchantDetailModal';

// Presentation Sections
import { HeroSection } from './components/presentation/HeroSection';
import { WhySabahSection } from './components/presentation/WhySabahSection';
import { EcosystemModelSection } from './components/presentation/EcosystemModelSection';
import { BusinessModelSection } from './components/presentation/BusinessModelSection';
import { PackagesSection } from './components/presentation/PackagesSection';
import { MerchantsSection } from './components/presentation/MerchantsSection';
import { MemberFlowSection } from './components/presentation/MemberFlowSection';
import { RoadmapSection } from './components/presentation/RoadmapSection';
import { ExecutiveSummaryCTA } from './components/presentation/ExecutiveSummaryCTA';

// Member Demo Components
import { MemberNav } from './components/member/MemberNav';
import { MemberDashboard } from './components/member/MemberDashboard';
import { MemberExploreSabah } from './components/member/MemberExploreSabah';
import { MemberPackages } from './components/member/MemberPackages';
import { MemberMerchants } from './components/member/MemberMerchants';
import { MemberBookings } from './components/member/MemberBookings';
import { MemberRewards } from './components/member/MemberRewards';
import { MemberEvents } from './components/member/MemberEvents';

// Admin Demo Components
import { AdminNav } from './components/admin/AdminNav';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminMembers } from './components/admin/AdminMembers';
import { AdminBookings } from './components/admin/AdminBookings';
import { AdminMerchants } from './components/admin/AdminMerchants';
import { AdminEvents } from './components/admin/AdminEvents';
import { AdminAnalytics } from './components/admin/AdminAnalytics';

export const AppContent: React.FC = () => {
  const { currentMode } = useApp();
  
  // Member demo internal tab state
  const [memberActiveTab, setMemberActiveTab] = useState<string>('dashboard');
  
  // Admin demo internal tab state
  const [adminActiveTab, setAdminActiveTab] = useState<string>('dashboard');

  return (
    <div className="min-h-screen bg-slateDark-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Global Luxury Header */}
      <Header />

      {/* Global Toasts & Modals */}
      <Toast />
      <PackageDetailModal />
      <MerchantDetailModal />

      {/* Main Content Area Based on Active Mode */}
      <main className="flex-1">
        {/* MODE 1: Presentation Showcase */}
        {currentMode === 'presentation' && (
          <div className="space-y-0">
            <HeroSection />
            <WhySabahSection />
            <EcosystemModelSection />
            <BusinessModelSection />
            <PackagesSection />
            <MerchantsSection />
            <MemberFlowSection />
            <RoadmapSection />
            <ExecutiveSummaryCTA />
          </div>
        )}

        {/* MODE 2: H Pass Sabah (Member Demo) */}
        {currentMode === 'member' && (
          <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
            <MemberNav activeTab={memberActiveTab} setActiveTab={setMemberActiveTab} />

            {memberActiveTab === 'dashboard' && <MemberDashboard setActiveTab={setMemberActiveTab} />}
            {memberActiveTab === 'explore' && <MemberExploreSabah />}
            {memberActiveTab === 'packages' && <MemberPackages />}
            {memberActiveTab === 'merchants' && <MemberMerchants />}
            {memberActiveTab === 'bookings' && <MemberBookings />}
            {memberActiveTab === 'rewards' && <MemberRewards />}
            {memberActiveTab === 'events' && <MemberEvents />}
          </div>
        )}

        {/* MODE 3: Sabah Operator Console (Admin Demo) */}
        {currentMode === 'admin' && (
          <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
            <AdminNav activeTab={adminActiveTab} setActiveTab={setAdminActiveTab} />

            {adminActiveTab === 'dashboard' && <AdminDashboard />}
            {adminActiveTab === 'members' && <AdminMembers />}
            {adminActiveTab === 'bookings' && <AdminBookings />}
            {adminActiveTab === 'merchants' && <AdminMerchants />}
            {adminActiveTab === 'events' && <AdminEvents />}
            {adminActiveTab === 'analytics' && <AdminAnalytics />}
          </div>
        )}
      </main>
    </div>
  );
};
