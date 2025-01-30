import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-white text-center px-6">
      <h1 className="text-6xl font-bold text-yellow-400">404</h1>
      <h2 className="text-3xl mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-200">
        The page you are looking for might have been removed or doesn’t exist.
      </p>
      <img
        src="/Logo.svg"
        alt="Not Found"
        className="w-1/3 mt-6 rounded-lg shadow-md"
      />
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
