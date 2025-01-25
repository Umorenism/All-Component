import { Button } from "./GlobalButton";
export const Hero = () => (
    <div className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center text-white bg-[url('https://images.pexels.com/photos/3778684/pexels-photo-3778684.jpeg?auto=compress&cs=tinysrgb&w=600')]">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl mb-6">Explore the best services we offer</p>
        <Button >Get Started</Button>
      </div>
    </div>
  );