import React from 'react';
import { PlayCircle, Star, TrendingUp } from 'lucide-react';

export default function LiveFeed() {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '24px' }}>
        <h1 className="gradient-text" style={{ fontSize: '2rem' }}>Live Feed</h1>
        <p style={{ color: 'var(--text-muted)' }}>Curated for you based on your favorites.</p>
      </header>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
        <button className="badge" style={{ background: 'var(--glass-bg)', color: '#fff', border: '1px solid var(--primary)' }}>#Eagles</button>
        <button className="badge" style={{ background: 'var(--glass-bg)', color: '#fff' }}>#Highlights</button>
        <button className="badge" style={{ background: 'var(--glass-bg)', color: '#fff' }}>#Stats</button>
      </div>

      {/* Featured Video Card */}
      <div className="glass-card card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ position: 'relative', height: '200px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))' }}></div>
          <PlayCircle size={48} color="rgba(255,255,255,0.8)" style={{ zIndex: 10 }} />
          <div style={{ position: 'absolute', bottom: '16px', left: '16px', zIndex: 10 }}>
            <span className="badge" style={{ backgroundColor: 'var(--accent)', color: '#fff', marginBottom: '8px', display: 'inline-block' }}>REPLAY</span>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Jackson's 40yd Dash</h3>
          </div>
        </div>
        <div style={{ padding: '16px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>You follow Jackson. Watch his blazing run from the 1st quarter.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}><Star size={14} /> 2.4k</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}><TrendingUp size={14} /> Trending</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <h2 className="section-title" style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '24px' }}>Real-Time Stats</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="glass card" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Possession</p>
          <p className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>62%</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--success)' }}>+5% this half</p>
        </div>
        <div className="glass card" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Shots on Goal</p>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>8</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Target: 10</p>
        </div>
      </div>
    </div>
  );
}
