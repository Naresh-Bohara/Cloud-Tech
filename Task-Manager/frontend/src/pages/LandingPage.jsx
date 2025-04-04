import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6">
      <div className="text-center space-y-10 max-w-2xl">
        <h1 className="text-6xl font-extrabold drop-shadow-lg leading-tight">
          Welcome to <span className="text-yellow-300">Task Manager</span>
        </h1>
        <p className="text-xl opacity-90">
          Stay organized, stay focused. Start managing your tasks with ease.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-6">
          <Link to="/login">
            <button className="px-10 py-4 text-xl font-semibold bg-white text-indigo-700 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out">
              🚀 Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-10 py-4 text-xl font-semibold bg-yellow-400 text-gray-900 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition duration-300 ease-in-out">
              ✨ Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
