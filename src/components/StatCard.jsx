export default function StatCard({ label, value, accent }) {
  return (
    <div style={{
      background: accent ? 'var(--rose-light)' : 'var(--violet-light)',
      borderRadius: 'var(--radius)',
      padding: '16px 20px',
      flex: 1
    }}>
      <div style={{
        fontSize: '11px',
        color: accent ? 'var(--rose)' : 'var(--violet)',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        marginBottom: '6px'
      }}>
        {label}
      </div>
      <div style={{
        fontSize: '28px',
        fontWeight: '700',
        color: accent ? 'var(--rose)' : 'var(--violet)'
      }}>
        {value}
      </div>
    </div>
  )
}