import api from './api';

const AuthService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => {
    localStorage.removeItem('authToken');
    return Promise.resolve();
  },
  getCurrentUser: () => api.get('/auth/getCurrentUser'),
};

export default AuthService;
