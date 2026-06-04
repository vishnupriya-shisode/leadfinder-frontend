import axios from 'axios'

const API_BASE = 'https://your-actual-railway-url.up.railway.app'

export const getBusinesses = async (city, category) => {
  const params = { city }
  if (category) params.category = category
  const res = await axios.get(`${API_BASE}/api/businesses`, { params })
  return res.data
}

export const getWeakLeads = async (city, category) => {
  const params = { city }
  if (category) params.category = category
  const res = await axios.get(`${API_BASE}/api/businesses/leads`, { params })
  return res.data
}