import axios from 'axios'

const API = axios.create({ baseURL: process.env })

API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('profile')
  if (profile) {
    req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`
  }

  return req
})

export const fetchPosts = () => API.get('/posts')
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${
      searchQuery.tags
    }`
  )
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) =>
  API.put(`posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`posts/${id}`)
export const likePost = (id) => API.put(`posts/${id}/likePost`)

export const signin = (formData) => API.post('/users/signin', formData)
export const signup = (formData) => API.post('/users/signup', formData)
