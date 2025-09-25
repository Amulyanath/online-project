import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { Cart } from './components/Cart';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { products } from './data/products';
import { Product } from './types';
import { useCart } from './hooks/useCart';
import { useAuth } from './hooks/useAuth';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Initialize hooks
  useCart();
  useAuth();

  const handleProductView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCategoryFilter = (category: string | null) => {
    setCategoryFilter(category);
    setSearchQuery(''); // Clear search when filtering by category
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCategoryFilter(null); // Clear category filter when searching
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCategoryFilter={handleCategoryFilter} onSearch={handleSearch} />
      <Hero />
      <ProductGrid
        products={products}
        onViewDetails={handleProductView}
        categoryFilter={categoryFilter}
        searchQuery={searchQuery}
      />
      <Footer />
      
      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <Cart />
      <AuthModal />
    </div>
  );
}

export default App;