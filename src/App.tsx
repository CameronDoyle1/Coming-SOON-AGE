
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const targetDate = new Date('2025-12-31T23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        color: 'white',
        background: 'rgba(0, 0, 0, 0.6)',
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: 'Montserrat, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <BackgroundVideo />

      <header
        style={{
          backdropFilter: 'blur(8px)',
          padding: '20px',
          borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h1
          style={{
            fontSize: '40px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          Coming Soon
        </h1>
        <p>I Have No Idea What It Will Be</p>
      </header>
      <hr style={{ width: '60%', border: '1px solid white' }} />
      <main>
        <p style={{ maxWidth: '600px', marginBottom: '20px' }}>
          TBD
        </p>
        <section
          style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)',
          }}
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '18px', textTransform: 'uppercase' }}>
                {unit}
              </p>
              <span
                style={{ fontSize: '35px', fontWeight: 900, color: '#FFD700' }}
              >
                {value}
              </span>
            </div>
          ))}
        </section>
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            placeholder="Enter something..."
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
            }}
          />
          <button
            style={{
              padding: '10px 15px',
              borderRadius: '5px',
              border: 'none',
              background: '#FFD700',
              color: 'black',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          >
            Submit
          </button>
        </div>
      </main>
      <footer style={{ marginTop: '20px' }}>
        <div
          style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {['facebook', 'instagram', 'twitter'].map((icon) => (
            <a
              key={icon}
              href="#"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <i
                className={`bi bi-${icon}`}
                style={{ fontSize: '40px', transition: '0.3s' }}
              ></i>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
