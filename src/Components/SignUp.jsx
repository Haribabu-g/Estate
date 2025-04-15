import { useState } from "react";

export default function AuthPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Sign Up button on top-right */}
      <button
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => setIsOpen(true)}
      >
        Sign Up
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl relative animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl"
            >
              &times;
            </button>

            {/* Toggle between Login and Sign Up */}
            <div className="flex justify-center mb-6">
              <button
                className={`px-4 py-2 rounded-l-full ${
                  !isLogin ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
              <button
                className={`px-4 py-2 rounded-r-full ${
                  isLogin ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </div>

            {/* Form Section */}
            {isLogin ? (
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border p-2 rounded"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Login
                </button>
              </form>
            ) : (
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border p-2 rounded"
                />
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

