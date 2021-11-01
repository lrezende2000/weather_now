import { useState, useEffect } from 'react';

import Message from '../components/Message';

import api from '../services/api';
import history from '../utils/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  async function handleLogin(email, password) {
    try {
      const { data } = await api.post('/login', { email, password });

      localStorage.setItem('@weather:token', data.token);
      api.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${data.token}`;

        return config;
      });
      setAuthenticated(true);
      Message(data.message, 'success');

      history.push('/');
    } catch (err) {
      console.log(err.message)
      Message(err.response.data.message, 'error');
    }
  }

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('@weather:token');
    api.interceptors.request.use((config) => {
      config.headers.authorization = undefined;

      return config;
    });
    history.push('/login');
  }

  useEffect(() => {
    const token = localStorage.getItem('@weather:token');

    if (token) {
      api.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${token}`;

        return config;
      });
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  return { authenticated, loading, handleLogin, handleLogout };
}
