import React, { useState } from 'react';
import { Home, ShoppingBag, Map, PlaySquare, User, BellRing, Info } from 'lucide-react';
import './App.css';
import HomeDashboard from './components/HomeDashboard';
import OrderMenu from './components/OrderMenu';
import SmartMap from './components/SmartMap';
import LiveFeed from './components/LiveFeed';
import RewardsProfile from './components/RewardsProfile';
import { useMatch } from './MatchContext';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const { notifications, clearNotification } = useMatch();

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeDashboard />;
      case 'order': return <OrderMenu />;
      case 'map': return <SmartMap />;
      case 'watch': return <LiveFeed />;
      case 'profile': return <RewardsProfile />;
      default: return <HomeDashboard />;
    }
  };

  return (
    <div className="app-container">
      {/* Smart Alerts & Notifications Layer */}
      {notifications.length > 0 && notifications.map((notif, index) => (
        <div key={notif.id} className="smart-alert-header glass animate-fade-in" style={{ top: `${16 + index * 90}px`, borderLeftColor: notif.type === 'warning' ? 'var(--warning)' : 'var(--primary)' }} onClick={() => clearNotification(notif.id)}>
          {notif.type === 'warning' ? <BellRing className="smart-alert-icon" size={24} /> : <Info className="smart-alert-icon" color="var(--primary)" size={24} />}
          <div className="smart-alert-text">
            <h4>{notif.title}</h4>
            <p>{notif.message}</p>
          </div>
        </div>
      ))}

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <Home size={24} />
          <span>Home</span>
        </button>
        <button className={`nav-item ${activeTab === 'order' ? 'active' : ''}`} onClick={() => setActiveTab('order')}>
          <ShoppingBag size={24} />
          <span>Order</span>
        </button>
        <button className={`nav-item ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>
          <Map size={24} />
          <span>Navigate</span>
        </button>
        <button className={`nav-item ${activeTab === 'watch' ? 'active' : ''}`} onClick={() => setActiveTab('watch')}>
          <PlaySquare size={24} />
          <span>Watch</span>
        </button>
        <button className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
          <User size={24} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
