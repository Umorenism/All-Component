import { useState } from "react";
import { useForm } from "react-hook-form";
import { signupUser, requestOTP } from "./apiService";


const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [otpSent, setOtpSent] = useState(false);

  const handleSignup = async (data) => {
    try {
      await signupUser(data);
      alert("Signup successful!");
    } catch (error) {
      alert(error);
    }
  };

  const sendOtp = async (email) => {
    try {
      await requestOTP(email);
      setOtpSent(true);
      alert("OTP sent to your email!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        
        <button type="button" onClick={() => sendOtp("email")} className="w-full bg-green-500 py-2 rounded">
          {otpSent ? "Resend OTP" : "Send OTP"}
        </button>

        <input
          type="text"
          {...register("otp", { required: "OTP is required" })}
          placeholder="Enter OTP"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
        />
        {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}

        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button type="submit" className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
