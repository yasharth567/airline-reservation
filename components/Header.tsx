
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up submitted');
    setShowSignUpModal(false);
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in submitted');
    setShowSignInModal(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-white cursor-pointer">
                <span className="font-pacifico">SkySwift</span>
              </Link>
            </div>

            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm xl:text-base">
                Home
              </Link>
              <Link href="/flights" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm xl:text-base">
                Flights
              </Link>
              <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm xl:text-base">
                Destinations
              </Link>
              <Link href="/deals" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm xl:text-base">
                Deals
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm xl:text-base">
                About
              </Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <button 
                onClick={() => setShowSignInModal(true)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap text-sm xl:text-base"
              >
                Sign In
              </button>
              <button 
                onClick={() => setShowSignUpModal(true)}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 xl:px-6 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 whitespace-nowrap cursor-pointer text-sm xl:text-base"
              >
                Sign Up
              </button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer p-2"
              >
                <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl sm:text-2xl`}></i>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm">
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer py-2 px-2">
                  Home
                </Link>
                <Link href="/flights" className="text-gray-300 hover:text-white transition-colors cursor-pointer py-2 px-2">
                  Flights
                </Link>
                <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors cursor-pointer py-2 px-2">
                  Destinations
                </Link>
                <Link href="/deals" className="text-gray-300 hover:text-white transition-colors cursor-pointer py-2 px-2">
                  Deals
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer py-2 px-2">
                  About
                </Link>
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-800">
                  <button 
                    onClick={() => setShowSignInModal(true)}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left py-2 px-2 whitespace-nowrap"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => setShowSignUpModal(true)}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
                  >
                    Sign Up
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Sign Up</h2>
              <button
                onClick={() => setShowSignUpModal(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-400"
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                <input
                  type="password"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-400"
                  placeholder="Confirm your password"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Create Account
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setShowSignUpModal(false);
                    setShowSignInModal(true);
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Sign In</h2>
              <button
                onClick={() => setShowSignInModal(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-400"
                  placeholder="Enter your password"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <button
                  onClick={() => {
                    setShowSignInModal(false);
                    setShowSignUpModal(true);
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
