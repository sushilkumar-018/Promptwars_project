import React, { useState, useRef } from 'react';
import { Trophy, Gift, Target, Camera } from 'lucide-react';

export default function RewardsProfile() {
  const [photo, setPhoto] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Sportsfan_1");
  const [handle, setHandle] = useState("@sportsfan_1");
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setPhoto(e.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '20px' }}>
      <header style={{ marginBottom: '24px', textAlign: 'center', position: 'relative' }}>
        {/* Profile Meta Actions */}
        <button 
          onClick={toggleEdit} 
          className="btn-primary" 
          style={{ position: 'absolute', top: 0, right: 0, padding: '6px 12px', fontSize: '0.75rem', borderRadius: '20px', background: isEditing ? 'var(--accent)' : 'var(--glass-bg)', display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          {isEditing ? 'Save Profile' : 'Edit Profile'}
        </button>

        {/* Profile Photo */}
        <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 16px' }}>
            {photo ? (
              <img src={photo} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', border: '3px solid var(--primary)', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: '3px solid var(--primary)', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                👤
              </div>
            )}
            
            <button onClick={() => fileInputRef.current.click()} style={{ position: 'absolute', bottom: '0px', left: '0px', background: '#0A0B10', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--primary)', cursor: 'pointer', zIndex: 10 }}>
              <Camera size={18} color="var(--primary)" />
            </button>
            <input type="file" ref={fileInputRef} onChange={handlePhotoUpload} accept="image/*" style={{ display: 'none' }} />

            <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid var(--bg-color)', zIndex: 10 }}>
              <Trophy size={20} color="#fff" />
            </div>
        </div>

        {/* User Details */}
        {isEditing ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '250px', margin: '0 auto 16px' }}>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="glass" 
              style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--primary)', color: '#fff', textAlign: 'center', fontSize: '1.2rem' }}
              placeholder="Name"
            />
            <input 
              type="text" 
              value={handle} 
              onChange={(e) => setHandle(e.target.value)} 
              className="glass" 
              style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--primary)', textAlign: 'center', fontSize: '0.9rem' }}
              placeholder="Handle"
            />
          </div>
        ) : (
          <>
            <h1 style={{ fontSize: '1.8rem', margin: 0, color: '#fff' }}>{name}</h1>
            <p style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1rem', marginBottom: '16px' }}>{handle}</p>
          </>
        )}
        
        <h2 className="gradient-text" style={{ fontSize: '1.4rem', margin: 0 }}>Super Fan Level 4</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2,450 points to Level 5</p>
        
        {/* Progress bar */}
        <div style={{ width: '80%', height: '8px', background: 'var(--glass-bg)', borderRadius: '4px', margin: '16px auto', overflow: 'hidden' }}>
          <div style={{ width: '65%', height: '100%', background: 'linear-gradient(to right, var(--primary), var(--secondary))' }}></div>
        </div>
      </header>

      <section className="glass-card card">
        <h2 className="section-title">Earn Points (Gamification)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="glass card" style={{ padding: '12px', margin: 0, display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '4px solid var(--success)' }}>
            <Target size={24} color="var(--success)" />
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '0.9rem', margin: 0 }}>Follow Route B Out</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Help clear congestion.</p>
            </div>
            <span style={{ fontWeight: 'bold', color: 'var(--success)' }}>+50 pts</span>
          </div>

          <div className="glass card" style={{ padding: '12px', margin: 0, display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '4px solid var(--primary)' }}>
            <Gift size={24} color="var(--primary)" />
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '0.9rem', margin: 0 }}>Buy 1 Team Scarf</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>In-seat delivery.</p>
            </div>
            <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>+100 pts</span>
          </div>
        </div>
      </section>

      <section className="glass-card card" style={{ marginTop: '16px' }}>
        <h2 className="section-title">Available Rewards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div className="glass card" style={{ textAlign: 'center', padding: '12px', margin: 0 }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎟️</div>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>VIP Upgrade Raffle</p>
            <p style={{ fontSize: '0.7rem', color: 'var(--primary)' }}>500 pts</p>
          </div>
          <div className="glass card" style={{ textAlign: 'center', padding: '12px', margin: 0, opacity: 0.5 }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px', filter: 'grayscale(1)' }}>🌭</div>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Free Hotdog</p>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>1,000 pts</p>
          </div>
        </div>
      </section>
    </div>
  );
}
