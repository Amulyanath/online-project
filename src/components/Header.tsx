import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';

interface HeaderProps {
  onCategoryFilter: (category: string | null) => void;
  onSearch: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onCategoryFilter, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const { user, setIsLoginOpen } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const navItems = ['All Products', 'Electronics', 'Clothing', 'Home', 'Sports', 'Books', 'Beauty'];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">ShopHub</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Wishlist</span>
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="hidden md:block text-sm">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => user ? {} : setIsLoginOpen(true)}
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {user && user.avatar ? (
                <img src={user.avatar} alt={user.name} className="h-6 w-6 rounded-full" />
              ) : (
                <User className="h-5 w-5" />
              )}
              <span className="hidden md:block text-sm">{user ? user.name : 'Login'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center justify-center py-4 border-t border-gray-100">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onCategoryFilter(item === 'All Products' ? null : item.toLowerCase())}
                className="text-gray-700 hover:text-indigo-600 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Search */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
            
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onCategoryFilter(item === 'All Products' ? null : item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-indigo-600 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};