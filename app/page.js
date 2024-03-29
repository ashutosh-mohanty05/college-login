'use client'
import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);

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
    <div className="flex items-center justify-center min-h-screen bg-[url('/bg-doctor.png')]">
      <div className=" bg-[url('/side-bg.png')] p-8 rounded-lg shadow-4xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-green-900 text-center pb-5">
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
                    className="w-32 h-32 rounded-full object-cover border border-green-800 mx-auto"
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
                <label htmlFor="username" className="block font-bold mb-2 text-white">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
             
            </>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-bold mb-2 text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <button
            type="submit"
            className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 w-full"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            onClick={handleToggle}
            className="text-white hover:text-green-700 transition-colors duration-300 ml-2 font-bold"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;