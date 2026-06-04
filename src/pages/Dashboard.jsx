import { useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import BusinessCard from '../components/BusinessCard'
import Charts from '../components/Charts'
import { getBusinesses, getWeakLeads } from '../services/api'

export default function Dashboard() {
  const [city, setCity] = useState('')
  const [category, setCategory] = useState('')
  const [businesses, setBusinesses] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mode, setMode] = useState('')

  const handleSearch = async () => {
    if (!city) return setError('Please enter a city')
    setError('')
    setLoading(true)
    try {
      const res = await getBusinesses(city, category)
      setBusinesses(res.data)
      setMode('all')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    }
    setLoading(false)
  }

  const handleLeads = async () => {
    if (!city) return setError('Please enter a city')
    setError('')
    setLoading(true)
    try {
      const res = await getWeakLeads(city, category)
      setBusinesses(res.data)
      setMode('leads')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    }
    setLoading(false)
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 20px' }}>
      <Navbar />

      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '600', color: 'var(--ink)', marginBottom: '4px' }}>
          Local Business Opportunity Dashboard
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--ink-muted)' }}>
          Find businesses with weak digital presence. Generate AI outreach. Win clients.
        </p>
      </div>

      <SearchBar
        city={city} setCity={setCity}
        category={category} setCategory={setCategory}
        onSearch={handleSearch}
        onLeads={handleLeads}
        loading={loading}
      />

      {error && (
        <div style={{
          background: 'var(--rose-light)', color: 'var(--rose)',
          padding: '10px 16px', borderRadius: 'var(--radius-sm)',
          fontSize: '13px', marginBottom: '16px'
        }}>
          {error}
        </div>
      )}

      {loading && (
        <div style={{
          textAlign: 'center', padding: '60px',
          color: 'var(--ink-muted)', fontSize: '14px'
        }}>
          {mode === 'leads'
            ? 'Fetching weak leads and generating AI outreach — this takes a few seconds...'
            : 'Searching businesses...'}
        </div>
      )}

      {!loading && businesses.length > 0 && (
        <>
          <Charts businesses={businesses} />
          <div style={{ fontSize: '13px', color: 'var(--ink-muted)', marginBottom: '16px', fontWeight: '500' }}>
            {businesses.length} result{businesses.length !== 1 ? 's' : ''} for {city}
            {mode === 'leads' ? ' — weak leads with AI outreach' : ''}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '14px' }}>
            {businesses.map(b => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        </>
      )}

      {!loading && businesses.length === 0 && mode && (
        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--ink-muted)', fontSize: '14px' }}>
          No results found for {city}
        </div>
      )}

      {!mode && !loading && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--ink-muted)' }}>
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔍</div>
          <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px', color: 'var(--ink)' }}>
            Find your first lead
          </div>
          <div style={{ fontSize: '13px' }}>
            Enter a city name above and hit Search or Weak leads
          </div>
        </div>
      )}
    </div>
  )
}