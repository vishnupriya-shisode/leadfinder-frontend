export default function BusinessCard({ business }) {
  const isWeak = business.rating < 3 && !business.has_website

  return (
    <div style={{
      background: '#fff',
      border: '0.5px solid var(--border)',
      borderLeft: isWeak ? '3px solid var(--rose)' : '3px solid var(--mint-text)',
      borderRadius: 'var(--radius)',
      padding: '16px 18px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '10px'
      }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ink)', marginBottom: '3px' }}>
            {business.name}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--ink-muted)' }}>
            {business.category} · {business.city} · {business.review_count} reviews
          </div>
        </div>
        <div style={{
          fontSize: '13px',
          fontWeight: '700',
          padding: '4px 10px',
          borderRadius: '20px',
          background: isWeak ? 'var(--rose-light)' : 'var(--mint)',
          color: isWeak ? 'var(--rose)' : 'var(--mint-text)',
          whiteSpace: 'nowrap'
        }}>
          {business.rating ? `${business.rating} ★` : 'N/A'}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
        {!business.has_website && (
          <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '20px', background: 'var(--rose-light)', color: 'var(--rose)', fontWeight: '500' }}>
            No website
          </span>
        )}
        {!business.instagram && (
          <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '20px', background: 'var(--rose-light)', color: 'var(--rose)', fontWeight: '500' }}>
            No Instagram
          </span>
        )}
        {business.has_website && (
          <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '20px', background: 'var(--mint)', color: 'var(--mint-text)', fontWeight: '500' }}>
            Has website
          </span>
        )}
        {business.instagram && (
          <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '20px', background: 'var(--mint)', color: 'var(--mint-text)', fontWeight: '500' }}>
            {business.instagram}
          </span>
        )}
        {business.phone && (
          <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '20px', background: 'var(--violet-light)', color: 'var(--violet)', fontWeight: '500' }}>
            {business.phone}
          </span>
        )}
      </div>

      {business.outreach && (
        <div style={{
          background: 'var(--violet-light)',
          borderLeft: '2px solid var(--violet)',
          borderRadius: '0 8px 8px 0',
          padding: '10px 12px',
          fontSize: '12px',
          color: 'var(--violet)',
          lineHeight: '1.6'
        }}>
          <div style={{
            fontSize: '10px',
            fontWeight: '700',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            AI outreach
          </div>
          {business.outreach}
        </div>
      )}
    </div>
  )
}