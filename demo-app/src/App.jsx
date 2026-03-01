import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  LayoutDashboard, 
  Terminal, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Activity, 
  Lock, 
  Zap,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// --- Mock Components ---

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid telemetry credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center" style={{ minHeight: '100vh' }}>
      <div className="glass p-8 animate-fade-in text-center" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-8">
          <Shield size={48} color="var(--accent-color)" className="mx-auto" />
          <h1 className="mt-4">The Dazbo<br />Omni-Dash</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Secure Terminal Access</p>
        </div>
        
        <form onSubmit={handleSubmit} id="login-form">
          <div className="input-group">
            <label className="input-label" htmlFor="username">Operator Identification</label>
            <input 
              id="username"
              type="text" 
              className="input-field" 
              placeholder="admin" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="password">Security Protocol (Password)</label>
            <input 
              id="password"
              type="password" 
              className="input-field" 
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {error && (
            <div className="flex items-center gap-4 mb-4" style={{ color: 'var(--danger-color)', fontSize: '0.875rem' }}>
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} id="login-button">
            Initialize Connection
          </button>
        </form>
        
        <div className="mt-8 text-center" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          Hint: Use <strong>admin</strong> / <strong>password</strong>
        </div>
      </div>
    </div>
  );
};

const DashboardView = () => (
  <div className="animate-fade-in">
    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
      <div className="glass p-6">
        <h3 className="mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Active Threats</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 700 }}>0</p>
        <div className="flex mt-4 items-center gap-4" style={{ color: 'var(--success-color)', fontSize: '0.875rem' }}>
          <CheckCircle2 size={16} /> Perimeter Secure
        </div>
      </div>
      <div className="glass p-6">
        <h3 className="mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>System Uptime</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 700 }}>99.9<span style={{ fontSize: '1rem' }}>%</span></p>
        <div className="flex mt-4 items-center gap-4" style={{ color: 'var(--accent-color)', fontSize: '0.875rem' }}>
          <Zap size={16} /> Peak Efficiency
        </div>
      </div>
      <div className="glass p-6">
        <h3 className="mb-2" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Network Throughput</h3>
        <p style={{ fontSize: '2.5rem', fontWeight: 700 }}>1.2<span style={{ fontSize: '1rem' }}>Gbps</span></p>
        <div className="mt-4" style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: 'var(--accent-color)', width: '65%' }}></div>
        </div>
      </div>
    </div>
  </div>
);

const SecurityLogsView = () => (
  <div className="animate-fade-in">
    <div className="glass" style={{ overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }} id="logs-table">
        <thead style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--glass-border)' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Timestamp</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Event</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Source</th>
            <th style={{ textAlign: 'left', padding: '1rem' }}>Severity</th>
          </tr>
        </thead>
        <tbody>
          {[
            { time: '2026-02-25 14:20:01', event: 'Unauthorized Access Attempt', source: 'IP 192.168.1.45', level: 'HIGH' },
            { time: '2026-02-25 14:18:12', event: 'Firewall Policy Update', source: 'Operator: admin', level: 'INFO' },
            { time: '2026-02-25 14:15:45', event: 'Anomaly Detected', source: 'Edge Node-B4', level: 'LOW' },
            { time: '2026-02-25 14:10:00', event: 'System Boot Sequential', source: 'Kernel', level: 'INFO' },
          ].map((log, i) => (
            <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }} className="log-row">
              <td style={{ padding: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{log.time}</td>
              <td style={{ padding: '1rem' }}>{log.event}</td>
              <td style={{ padding: '1rem', fontFamily: 'monospace' }}>{log.source}</td>
              <td style={{ padding: '1rem' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '4px',
                  background: log.level === 'HIGH' ? 'rgba(255, 77, 77, 0.1)' : 'rgba(255,255,255,0.05)',
                  color: log.level === 'HIGH' ? 'var(--danger-color)' : 'var(--text-secondary)'
                }}>{log.level}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProfileView = () => {
  const [operator, setOperator] = useState('Dazbo');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (saved) {
      const timerId = setTimeout(() => {
        setSaved(false);
      }, 2000);
      return () => clearTimeout(timerId);
    }
  }, [saved]);

  const handleSave = () => {
    setSaved(true);
  };

  return (
    <div className="animate-fade-in">
      <div className="glass p-8" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="input-group">
          <label className="input-label" htmlFor="operator-name">Display Name</label>
          <input 
            id="operator-name"
            type="text" 
            className="input-field" 
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          />
        </div>
        
        <div className="flex items-center justify-between mt-8">
          <button className="btn btn-primary" onClick={handleSave} id="save-profile">
            {saved ? <><CheckCircle2 size={16} /> Saved</> : 'Update Profile'}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('dashboard');

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside className="glass" style={{ width: '260px', borderRadius: 0, borderTop: 'none', borderBottom: 'none', borderLeft: 'none', display: 'flex', flexDirection: 'column' }}>
        <div className="p-8 text-center flex items-center gap-4 mb-4">
          <Shield size={32} color="var(--accent-color)" />
          <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>OMNI-DASH</span>
        </div>
        
        <nav style={{ flex: 1 }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'logs', label: 'Security Logs', icon: Terminal },
            { id: 'profile', label: 'Profile', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className="flex items-center gap-4 px-8 py-4"
              style={{ 
                width: '100%', 
                background: view === item.id ? 'var(--glass-bg)' : 'transparent',
                border: 'none',
                color: view === item.id ? 'var(--accent-color)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'left',
                borderRight: view === item.id ? '2px solid var(--accent-color)' : 'none'
              }}
              id={`nav-${item.id}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setIsLoggedIn(false)}
          className="flex items-center gap-4 px-8 py-8" 
          style={{ width: '100%', border: 'none', background: 'transparent', color: 'var(--text-secondary)', cursor: 'pointer' }}
          id="logout-button"
        >
          <LogOut size={20} />
          <span>Exit Gateway</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-8" style={{ minHeight: '100vh' }}>
        <header className="flex justify-between items-center mb-12">
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            System Gateway / <span style={{ color: 'var(--text-primary)', textTransform: 'capitalize' }}>{view}</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 glass" style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success-color)' }}></div>
                Operator: admin
             </div>
          </div>
        </header>

        {/* View Headings (moved up) */}
        <div className="flex justify-between items-center mb-12">
          {view === 'dashboard' && (
            <>
              <h2>System Overview</h2>
              <div className="flex gap-4">
                <span className="glass px-4 py-2 flex items-center gap-4" style={{ fontSize: '0.875rem' }}>
                  <Activity size={16} color="var(--success-color)" /> Status: OPTIMAL
                </span>
              </div>
            </>
          )}
          {view === 'logs' && <h2>Security Audit Logs</h2>}
          {view === 'profile' && <h2>Operator Profile</h2>}
        </div>

        <div className="flex-1 flex flex-col justify-center min-h-0">
          {view === 'dashboard' && <DashboardView />}
          {view === 'logs' && <SecurityLogsView />}
          {view === 'profile' && <ProfileView />}
        </div>
      </main>
    </div>
  );
}
