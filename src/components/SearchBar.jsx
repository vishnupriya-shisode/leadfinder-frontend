export default function SearchBar({ city, setCity, category, setCategory, onSearch, onLeads, loading }) {
  const categories = ['', 'cafe', 'restaurant', 'hotel', 'bakery', 'gym', 'salon', 'pharmacy']

  return (
    <div style={{
      background: '#fff',
      border: '0.5px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '16px 20px',
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      marginBottom: '24px',
      flexWrap: 'wrap'
    }}>
      <input
        value={city}
        onChange={e => setCity(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onSearch()}
        placeholder="Enter city — e.g. Aurangabad"
        style={{
          border: '0.5px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          padding: '9px 14px',
          fontSize: '13px',
          flex: 1,
          minWidth: '180px',
          outline: 'none',
          color: 'var(--ink)'
        }}
      />
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        style={{
          border: '0.5px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          padding: '9px 14px',
          fontSize: '13px',
          color: 'var(--ink)',
          outline: 'none',
          background: '#fff'
        }}
      >
        {categories.map(c => (
          <option key={c} value={c}>{c || 'All categories'}</option>
        ))}
      </select>
      <button
        onClick={onSearch}
        disabled={loading}
        style={{
          background: 'var(--violet)',
          color: '#fff',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          padding: '9px 20px',
          fontSize: '13px',
          fontWeight: '500',
          opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? 'Searching...' : 'Search all'}
      </button>
      <button
        onClick={onLeads}
        disabled={loading}
        style={{
          background: 'var(--rose-light)',
          color: 'var(--rose)',
          border: '0.5px solid var(--rose)',
          borderRadius: 'var(--radius-sm)',
          padding: '9px 20px',
          fontSize: '13px',
          fontWeight: '500',
          opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? '...' : 'Weak leads + AI'}
      </button>
    </div>
  )
}