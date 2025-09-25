import React from 'react';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                <Star className="w-4 h-4 mr-1 fill-current" />
                #1 Shopping Destination
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  {' '}Amazing{' '}
                </span>
                Products
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Shop from thousands of premium products with fast delivery, 
                secure payments, and unbeatable customer service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="font-semibold">Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300">
                <span className="font-semibold">Explore Categories</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-3">
                  <Truck className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-700">Free Shipping</p>
                <p className="text-xs text-gray-500">On orders $50+</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-700">Secure Payment</p>
                <p className="text-xs text-gray-500">100% Protected</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-3">
                  <Headphones className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-700">24/7 Support</p>
                <p className="text-xs text-gray-500">Always here</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg"
                alt="Shopping Experience"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating Product Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl z-20 animate-pulse">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg"></div>
                <div>
                  <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                  <div className="h-2 bg-gray-100 rounded w-16"></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl z-20">
              <div className="flex items-center space-x-2 text-green-600">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-sm font-medium">Live Orders: 1,247</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};