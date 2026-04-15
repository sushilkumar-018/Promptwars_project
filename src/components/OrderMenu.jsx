import React, { useState } from 'react';
import { ShoppingCart, CheckCircle, Flame, Plus, Minus, CreditCard } from 'lucide-react';

const MENU_ITEMS = [
  { id: 1, name: 'Stadium Dog', price: 8, img: '🌭' },
  { id: 2, name: 'Craft Beer', price: 12, img: '🍺' },
  { id: 3, name: 'Loaded Nachos', price: 10, img: '🧀' },
  { id: 4, name: 'Eagles Official Scarf', price: 25, img: '🧣' }
];

export default function OrderMenu() {
  const [cart, setCart] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQ = i.quantity + delta;
        return newQ > 0 ? { ...i, quantity: newQ } : i;
      }
      return i;
    }).filter(i => i.quantity > 0)); // Actually remove the item if quantity drops to 0
  };

  const handleCheckout = () => {
    setIsCheckingOut(false);
    setOrderStatus('preparing');
    setTimeout(() => setOrderStatus('delivering'), 2000);
    setTimeout(() => setOrderStatus('delivered'), 4000);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (orderStatus) {
    return (
      <div className="animate-fade-in" style={{ textAlign: 'center', marginTop: '40px' }}>
        <CheckCircle size={64} color={orderStatus === 'delivered' ? 'var(--success)' : 'var(--warning)'} style={{ margin: '0 auto', marginBottom: '20px' }} />
        <h2 className="gradient-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>
          {orderStatus === 'preparing' && 'Preparing your order...'}
          {orderStatus === 'delivering' && 'On its way to Seat 14!'}
          {orderStatus === 'delivered' && 'Delivered! Enjoy.'}
        </h2>
        <div style={{ marginTop: '30px' }}>
          <div className="glass card" style={{ display: 'inline-block', textAlign: 'left', minWidth: '250px' }}>
            <div className="stat-row"><span>Status:</span> <span style={{ textTransform: 'capitalize', color: 'var(--primary)' }}>{orderStatus}</span></div>
            <div className="stat-row"><span>Est. Arrival:</span> <span>{orderStatus === 'delivered' ? 'Now' : '3 mins'}</span></div>
          </div>
        </div>
        {orderStatus === 'delivered' && (
          <button className="btn-primary" style={{ marginTop: '20px' }} onClick={() => { setOrderStatus(null); setCart([]); }}>New Order</button>
        )}
      </div>
    );
  }

  if (isCheckingOut) {
    return (
      <div className="animate-fade-in" style={{ paddingBottom: '90px' }}>
        <header style={{ marginBottom: '24px' }}>
          <h1 className="gradient-text" style={{ fontSize: '2rem' }}>Checkout</h1>
          <p style={{ color: 'var(--text-muted)' }}>Review your items before ordering.</p>
        </header>

        <div className="glass-card card">
          <h2 className="section-title">Your Cart</h2>
          {cart.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px 0' }}>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.8rem' }}>{item.img}</span>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.95rem' }}>{item.name}</h4>
                    <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 'bold' }}>${item.price}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'var(--glass-bg)', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Minus size={14} /></button>
                  <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'var(--glass-bg)', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Plus size={14} /></button>
                </div>
              </div>
            ))
          )}
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
            <span>Total:</span>
            <span className="gradient-text">${totalPrice}</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
          <button onClick={() => setIsCheckingOut(false)} style={{ flex: 1, background: 'var(--glass-bg)', color: '#fff', padding: '12px', borderRadius: '12px', fontWeight: 'bold' }}>Back</button>
          <button onClick={handleCheckout} className="btn-primary" disabled={cart.length === 0} style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', opacity: cart.length === 0 ? 0.5 : 1 }}>
            <CreditCard size={20} /> Pay Now
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in" style={{ paddingBottom: totalItems > 0 ? '140px' : '20px' }}>
      <header style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '2rem' }}>In-Seat Delivery</h1>
        <div style={{ position: 'relative' }} onClick={() => cart.length > 0 && setIsCheckingOut(true)}>
          <ShoppingCart size={24} style={{ cursor: cart.length > 0 ? 'pointer' : 'default', color: cart.length > 0 ? '#fff' : 'var(--text-muted)' }} />
          {totalItems > 0 && (
            <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--accent)', color: '#fff', fontSize: '0.6rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' }}>
              {totalItems}
            </span>
          )}
        </div>
      </header>

      <div className="glass-card card" style={{ marginBottom: '24px' }}>
        <h2 className="section-title"><span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Flame color="var(--warning)" size={20} /> Recommended Food</span></h2>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
          {MENU_ITEMS.slice(0, 3).map(item => (
            <div key={item.id} className="glass card" style={{ minWidth: '120px', textAlign: 'center', padding: '16px 8px', flexShrink: 0 }}>
              <div style={{ fontSize: '3rem', marginBottom: '8px' }}>{item.img}</div>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{item.name}</h4>
              <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '12px' }}>${item.price}</p>
              <button onClick={() => addToCart(item)} style={{ background: 'var(--glass-bg)', border: '1px solid var(--primary)', color: 'var(--primary)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', width: '100%' }}>Add</button>
            </div>
          ))}
        </div>
      </div>

      <h2 className="section-title" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Merchandise Express</h2>
      <div className="glass card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '2rem' }}>{MENU_ITEMS[3].img}</span>
          <div>
            <h3 style={{ fontSize: '1rem', margin: 0 }}>{MENU_ITEMS[3].name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>Delivered to your seat</p>
          </div>
        </div>
        <button onClick={() => addToCart(MENU_ITEMS[3])} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>${MENU_ITEMS[3].price} - Add</button>
      </div>

      {totalItems > 0 && (
        <div className="animate-fade-in" style={{ position: 'fixed', bottom: '90px', left: '16px', right: '16px', zIndex: 60 }}>
          <button onClick={() => setIsCheckingOut(true)} className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderRadius: '16px', boxShadow: '0 8px 32px 0 rgba(0, 240, 255, 0.4)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ShoppingCart size={20} /> View Cart ({totalItems} items)</span>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>${totalPrice}</span>
          </button>
        </div>
      )}
    </div>
  );
}
