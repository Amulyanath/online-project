import { useState } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const login = (email: string, password: string) => {
    // Mock login - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    };
    setUser(mockUser);
    setIsLoginOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  const signup = (name: string, email: string, password: string) => {
    // Mock signup - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name,
      email,
    };
    setUser(mockUser);
    setIsLoginOpen(false);
  };

  return {
    user,
    isLoginOpen,
    setIsLoginOpen,
    login,
    logout,
    signup,
  };
};