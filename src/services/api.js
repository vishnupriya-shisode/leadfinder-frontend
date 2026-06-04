import axios from 'axios'

const API_BASE = 'http://localhost:8000'

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