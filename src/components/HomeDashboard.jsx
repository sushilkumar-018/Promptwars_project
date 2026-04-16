import React from 'react';
import { Compass, Clock, MapPin, Zap } from 'lucide-react';
import { useMatch } from '../MatchContext';

export default function HomeDashboard() {
  const { formattedTime, phase, timeInSeconds } = useMatch();
  const isHalftime = phase === 'Halftime';

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '20px' }}>
      <header style={{ marginBottom: '32px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1, marginBottom: '0px', letterSpacing: '-2px' }}>InsightArena</h1>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 500 }}>Hello, Sports Fan!</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>Section 112 • Row G • Seat 14</p>
        </div>
      </header>

      <section className="glass-card card" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1 }}>
          <Zap size={100} color="var(--primary)" />
        </div>
        <h2 className="section-title">
          Match Status 
          <span className="badge" style={{ backgroundColor: isHalftime ? 'rgba(0,255,136,0.1)' : 'rgba(255,0,85,0.1)', color: isHalftime ? 'var(--success)' : 'var(--accent)' }}>
            {isHalftime ? 'PAUSED' : 'LIVE'}
          </span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Eagles</h3>
            <p className="gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold' }}>2</p>
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
            <p style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '4px' }}>{formattedTime}</p>
            <p>{phase}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Wolves</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>1</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title" style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '24px' }}>Predictive Suggestions</h2>
        
        {timeInSeconds >= 2690 && !isHalftime && (
          <div className="glass-card card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Clock color="var(--primary)" size={24} />
              <div>
                <h3 style={{ fontSize: '1rem' }}>Restroom Break?</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '12px' }}>
                  Wait times at Section 112 are currently <strong>under 2 minutes</strong>. Halftime is quickly approaching—better go now!
                </p>
                <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Navigate Now</button>
              </div>
            </div>
          </div>
        )}

        {isHalftime && (
           <div className="glass-card card" style={{ borderLeft: '4px solid var(--success)', backgroundColor: 'rgba(0, 255, 136, 0.05)' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Compass color="var(--success)" size={24} />
              <div>
                <h3 style={{ fontSize: '1rem' }}>Halftime Perks</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '12px' }}>
                  The game is paused. This is the optimal time to grab that Eagles scarf from the Merch Express!
                </p>
                <button className="btn-primary" style={{ background: 'var(--success)', padding: '8px 16px', fontSize: '0.8rem' }}>Order Now</button>
              </div>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}
