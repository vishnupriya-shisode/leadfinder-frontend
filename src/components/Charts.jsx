import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

export default function Charts({ businesses }) {
  const categoryCount = businesses.reduce((acc, b) => {
    acc[b.category] = (acc[b.category] || 0) + 1
    return acc
  }, {})

  const chartData = Object.entries(categoryCount).map(([name, count]) => ({ name, count }))

  const weakCount = businesses.filter(b => b.rating < 3 && !b.has_website).length
  const noWebsite = businesses.filter(b => !b.has_website).length
  const avgRating = businesses.length
    ? (businesses.reduce((sum, b) => sum + (b.rating || 0), 0) / businesses.length).toFixed(1)
    : 0

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
      <div style={{
        background: '#fff',
        border: '0.5px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '16px 20px'
      }}>
        <div style={{
          fontSize: '11px', fontWeight: '600', color: 'var(--ink-muted)',
          textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px'
        }}>
          Businesses by category
        </div>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={chartData} barSize={20}>
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ border: '0.5px solid var(--border)', borderRadius: '8px', fontSize: '12px' }} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {chartData.map((_, i) => (
                  <Cell key={i} fill={i % 2 === 0 ? '#6D28D9' : '#BE185D'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div style={{ height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-muted)', fontSize: '13px' }}>
            Search to see chart
          </div>
        )}
      </div>

      <div style={{
        background: '#fff',
        border: '0.5px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '16px 20px'
      }}>
        <div style={{
          fontSize: '11px', fontWeight: '600', color: 'var(--ink-muted)',
          textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px'
        }}>
          Lead summary
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {[
            { label: 'Total', value: businesses.length, rose: false },
            { label: 'Weak leads', value: weakCount, rose: true },
            { label: 'No website', value: noWebsite, rose: true },
            { label: 'Avg rating', value: avgRating, rose: false }
          ].map(({ label, value, rose }) => (
            <div key={label} style={{
              background: rose ? 'var(--rose-light)' : 'var(--violet-light)',
              borderRadius: '8px', padding: '12px'
            }}>
              <div style={{ fontSize: '20px', fontWeight: '700', color: rose ? 'var(--rose)' : 'var(--violet)' }}>
                {value}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--ink-muted)', marginTop: '2px' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}