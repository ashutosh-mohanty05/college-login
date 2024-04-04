'use client'
import React, { useState } from 'react';
import 'material-symbols';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setEmail('');
    setPassword('');
    setPhoto(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Photo:', photo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/doc-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="bg-[url('/side-bg.jpg')] p-8 rounded-lg shadow-4xl max-w-md w-full bg-cover bg-center bg-no-repeat">
        <h2 className="text-2xl font-bold mb-6 text-black text-center pb-5">
          {isLogin ? 'Login' : 'Registration'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-6 text-center">

                <div className="relative">
                  <img
                    src={photo ? URL.createObjectURL(photo) : './placeholder.jpg'}
                    alt="Profile Photo"
                    className="w-32 h-32 rounded-full object-cover border border-blue-800 mx-auto"
                  />
                  <input
                    type="file"
                    id="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <span className='text-xs p-2 text-black font-medium'>Click to image to upload photo</span>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block font-bold mb-2 text-black">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border border-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

            </>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2 text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-bold mb-2 text-black">
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <span className="material-symbols-outlined text-black text-sm">
                    visibility_off
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-black text-sm">
                    visibility
                  </span>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            onClick={handleToggle}
            className="text-blue-700 hover:text-blue-900 transition-colors duration-300 ml-2 font-bold"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;