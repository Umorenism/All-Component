import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "./apiService";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await loginUser(data);
      alert("Login successful!");
      navigate("/")
      console.log(response);
    } catch (error) {
      setErrorMsg(error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button type="submit" className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
