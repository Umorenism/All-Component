import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Reset password data:", data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Enter your email"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          {...register("newPassword", { required: "New password is required" })}
          placeholder="Enter new password"
          className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
        />
        {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}

        <button type="submit" className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
