import React, { createContext, useState, useEffect, useContext } from 'react';

const MatchContext = createContext();

export function MatchProvider({ children }) {
  // Start at 44:50 (in seconds, so 44 * 60 + 50 = 2690)
  // We'll speed up time a bit or just let it tick normally. 
  // Let's use seconds but we can increment by 1 every second.
  const [timeInSeconds, setTimeInSeconds] = useState(2690); 
  const [phase, setPhase] = useState("1st Half");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeInSeconds(prev => {
        const nextTime = prev + 1;
        
        // Halftime logic (45:00 = 2700 seconds)
        if (nextTime === 2695) {
          // Send approaching alert at 44:55
          addNotification({
            id: 'half-approaching',
            title: 'Halftime Approaching',
            message: 'Order food now to skip the 15-min queue!',
            type: 'warning'
          });
        }
        
        if (nextTime === 2700) {
          setPhase("Halftime");
          addNotification({
            id: 'half-time',
            title: 'It is Halftime!',
            message: 'Players are heading to the locker room.',
            type: 'info'
          });
        }

        if (nextTime > 2700 && phase === "1st Half") {
            setPhase("Halftime"); // Safety catch
        }

        return nextTime;
      });
    }, 1000); // Ticks every 1 real second

    return () => clearInterval(timer);
  }, [phase]);

  const addNotification = (notif) => {
    setNotifications(prev => {
      // Prevent duplicate notifications
      if (prev.some(n => n.id === notif.id)) return prev;
      return [...prev, notif];
    });
  };

  const clearNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Format time (MM:SS)
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const value = {
    timeInSeconds,
    formattedTime,
    phase,
    notifications,
    clearNotification
  };

  return (
    <MatchContext.Provider value={value}>
      {children}
    </MatchContext.Provider>
  );
}

export function useMatch() {
  return useContext(MatchContext);
}
