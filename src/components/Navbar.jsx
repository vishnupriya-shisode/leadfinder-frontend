export default function Navbar() {
  return (
    <nav style={{
      background: '#fff',
      border: '0.5px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '28px', height: '28px',
          background: 'var(--violet)',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ color: '#fff', fontSize: '14px' }}>L</span>
        </div>
        <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--ink)' }}>
          Lead<span style={{ color: 'var(--violet)' }}>Finder</span>
        </span>
      </div>
      <div style={{
        fontSize: '11px',
        background: 'var(--violet-light)',
        color: 'var(--violet)',
        padding: '4px 12px',
        borderRadius: '20px',
        fontWeight: '500'
      }}>
        Local Business Intelligence
      </div>
    </nav>
  )
}