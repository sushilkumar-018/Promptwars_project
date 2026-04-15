import React from 'react';
import { Route, Navigation, Users } from 'lucide-react';

export default function SmartMap() {
  return (
    <div className="animate-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <header style={{ marginBottom: '16px' }}>
        <h1 className="gradient-text" style={{ fontSize: '2rem' }}>Smart Nav</h1>
        <p style={{ color: 'var(--text-muted)' }}>Avoid the crowds, find the fastest way.</p>
      </header>

      {/* Simulated Map Area */}
      <div className="glass-card" style={{ flex: 1, minHeight: '300px', marginBottom: '16px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.1) 0%, transparent 70%)' }}>
        {/* Mock Map Elements */}
        <div style={{ position: 'absolute', width: '200px', height: '150px', border: '2px solid var(--glass-border)', borderRadius: '20px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
        
        {/* Ping Animation */}
        <div style={{ position: 'absolute', top: '40%', left: '40%', width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}>
           <div style={{ width: '100%', height: '100%', background: 'inherit', borderRadius: 'inherit', animation: 'pulse 1.5s infinite' }}></div>
        </div>

        {/* Route Line */}
        <div style={{ position: 'absolute', top: '40%', left: '40%', width: '80px', height: '2px', background: 'var(--success)', transform: 'rotate(35deg)', transformOrigin: '0 0' }}></div>
        
        {/* Destination Ping */}
        <div style={{ position: 'absolute', top: 'calc(40% + 46px)', left: 'calc(40% + 65px)', width: '12px', height: '12px', background: 'var(--success)', borderRadius: '50%' }}></div>

        {/* Heatmap overlay */}
        <div style={{ position: 'absolute', top: '60%', right: '20%', width: '60px', height: '60px', background: 'radial-gradient(circle, rgba(255,0,85,0.4) 0%, transparent 70%)' }}></div>

        <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
          <div className="glass card" style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
               <Navigation size={20} color="var(--success)" />
               <div>
                 <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fastest Route Header</p>
                 <p style={{ fontWeight: 'bold' }}>To Restroom (Sec 114)</p>
               </div>
             </div>
             <p style={{ color: 'var(--success)', fontWeight: 'bold' }}>2 min</p>
          </div>
        </div>
      </div>

      <div className="glass-card card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 className="section-title" style={{ fontSize: '1rem', margin: 0 }}>Crowd Density Alerts</h3>
        <div className="stat-row">
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={16} /> North Concourse</span>
          <span className="badge" style={{ backgroundColor: 'rgba(255,0,85,0.1)', color: 'var(--accent)' }}>HEAVY</span>
        </div>
        <div className="stat-row">
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Users size={16} /> South Concourse</span>
          <span className="badge" style={{ backgroundColor: 'rgba(0,255,136,0.1)', color: 'var(--success)' }}>CLEAR</span>
        </div>
      </div>
    </div>
  );
}
