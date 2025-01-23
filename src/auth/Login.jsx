import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import pics from "../asset/loggg.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../api/apiService";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateFields = () => {
    if (!email || !password) {
      setError("All fields are required");
      setIsValid(false);
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsValid(false);
      return;
    }

    setError("");
    setIsValid(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await login(email, password);

      console.log("Login response data:", data);

      // Store token in localStorage
      localStorage.setItem("token", data.token);
      console.log("Stored token:", localStorage.getItem("token"));

      // Store optional fields in localStorage
      if (data.referralLink) {
        localStorage.setItem("referral", data.referralLink);
      }
      if (data.existingUser) {
        localStorage.setItem("user", JSON.stringify(data.existingUser));
      }

      // Redirect to the intended route or dashboard
      const redirectTo = location.state?.from?.pathname || "/";
      console.log("Redirecting to:", redirectTo);
      navigate(redirectTo, { replace: true });
    } catch (error) {
      setLoading(false);
      console.log("Login error:", error); // Debug error
      setError(
        error.response?.data?.message || "Login failed! Please try again..."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full p-2">
        <div className="mb-6">
          <img
            src={pics}
            alt="icon"
            className="w-20 h-20 mx-auto animate-bounce"
          />
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Welcome back
          </h2>
          <p className="text-center">
            Please enter your correct details to login
          </p>
        </div>

        {error && (
          <div className="mb-4 p-2 text-sm text-red-600 border border-red-600 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="off"
                onBlur={validateFields}
              />
              {isValid && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600">
                  ✓
                </span>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="off"
                onBlur={validateFields}
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
              >
                {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className={`w-full py-3 font-semibold rounded-md focus:outline-none ${
                isValid
                  ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              {loading ? "Loading..." : "Login"}
            </button>

            <p className="text-center mt-2">
              Don't have an account?
              <Link to="/signup">
                <span className="text-red-700 underline">Sign Up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
