import { FaSearch } from "react-icons/fa";

export const Input = ({ placeholder, type, className }) => (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
      />
      {type === "search" && (
        <FaSearch className="absolute right-3 top-3 text-gray-400" />
      )}
    </div>
  );