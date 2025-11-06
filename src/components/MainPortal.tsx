import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import Courses from './Courses';
import Benefits from './Benefits';
import Profile from './Profile';
import Notifications from './Notifications';
import Settings from './Settings';
import LevelsModal from './LevelsModal';
import PurinaAgentModal from './PurinaAgentModal';
import LogoutModal from './LogoutModal';

interface MainPortalProps {
  onLogout: () => void;
}

export default function MainPortal({ onLogout }: MainPortalProps) {
  const [currentView, setCurrentView] = useState<'dashboard' | 'courses' | 'benefits'>('dashboard');
  const [activeSection, setActiveSection] = useState<'home' | 'profile' | 'notifications' | 'settings'>('home');
  const [showLevelsModal, setShowLevelsModal] = useState(false);
  const [showAgentModal, setShowAgentModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleSidebarClick = (section: 'home' | 'profile' | 'notifications' | 'settings' | 'logout') => {
    if (section === 'logout') {
      setShowLogoutModal(true);
    } else {
      setActiveSection(section);
      if (section === 'home') {
        setCurrentView('dashboard');
      }
    }
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    onLogout();
  };

  // Determine if we should show tabs (only for home section)
  const showTabs = activeSection === 'home';

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F4F4F4' }}>
      <Sidebar activeSection={activeSection} onSectionClick={handleSidebarClick} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onLevelClick={() => setShowLevelsModal(true)} />
        
        <main className="flex-1 overflow-y-auto p-8">
          {/* Tab Navigation - Only show when on home section */}
          {showTabs && (
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setCurrentView('dashboard')}
                className="px-8 py-3 rounded-full transition-all hover:scale-105"
                style={
                  currentView === 'dashboard'
                    ? { backgroundColor: '#B29962', color: '#FFFFFF' }
                    : { backgroundColor: '#FFFFFF', border: '2px solid #B29962', color: '#000000' }
                }
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('courses')}
                className="px-8 py-3 rounded-full transition-all hover:scale-105"
                style={
                  currentView === 'courses'
                    ? { backgroundColor: '#B29962', color: '#FFFFFF' }
                    : { backgroundColor: '#FFFFFF', border: '2px solid #B29962', color: '#0f0c00' }
                }
              >
                Cursos
              </button>
              <button
                onClick={() => setCurrentView('benefits')}
                className="px-8 py-3 rounded-full transition-all hover:scale-105"
                style={
                  currentView === 'benefits'
                    ? { backgroundColor: '#B29962', color: '#FFFFFF' }
                    : { backgroundColor: '#FFFFFF', border: '2px solid #B29962', color: '#000000' }
                }
              >
                Benefícios
              </button>
            </div>
          )}

          {/* Content based on active section */}
          {activeSection === 'home' && (
            <>
              {currentView === 'dashboard' && <Dashboard onShowAgent={() => setShowAgentModal(true)} />}
              {currentView === 'courses' && <Courses />}
              {currentView === 'benefits' && <Benefits onShowAgent={() => setShowAgentModal(true)} />}
            </>
          )}
          {activeSection === 'profile' && <Profile />}
          {activeSection === 'notifications' && <Notifications />}
          {activeSection === 'settings' && <Settings />}
        </main>
      </div>

      {/* Modals */}
      {showLevelsModal && <LevelsModal onClose={() => setShowLevelsModal(false)} />}
      {showAgentModal && <PurinaAgentModal onClose={() => setShowAgentModal(false)} />}
      {showLogoutModal && (
        <LogoutModal
          onConfirm={confirmLogout}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </div>
  );
}
