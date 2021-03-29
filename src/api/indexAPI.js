// Axios used for API calls
import axios from 'axios';

// axios instance and base URL:
const API = axios.create({baseURL: 'http://localhost:5000'});

// interceptor is axios's equivalent to middleware in Express, function will be called before all request below:
// token sent back to backend so that backend middleware can verify that user is signed in.
API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`; // Bearer auth = auth type with token
  }
  return req;
})

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost); // send where(?) and what(?)=payload
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


