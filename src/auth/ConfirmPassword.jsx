import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import pics from "../asset/loggg.png";
import {  useLocation, useNavigate } from "react-router-dom";
import { login } from "../api/apiService";

const ConfirmPassword = () => {
 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const validateFields = () => {
    
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
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
      const data = await login( password);
      console.log("Login response data:", data);

      localStorage.setItem("token", data.token);
      if (data.referralLink) {
        localStorage.setItem("referral", data.referralLink);
      }
      if (data.existingUser) {
        localStorage.setItem("user", JSON.stringify(data.existingUser));
      }

      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      setError(
        error.response?.data?.message || "Login failed! Please try again..."
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div className="w-full max-w-md  p-6 ">
        <div className="mb-6 text-center">
          <img src={pics} alt="icon" className="w-20 h-20 mx-auto animate-bounce" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
         
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
              New Password
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
                className="absolute right-3 top-4 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              autoComplete="off"
              onBlur={validateFields}
            />
          </div>

          <div>
            <button
              type="submit"
              className={`w-full py-3 font-semibold rounded-md focus:outline-none transition-all duration-300 ${
                isValid
                  ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!isValid || loading}
            >
              {loading ? "Loading..." : "confirm Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmPassword;
