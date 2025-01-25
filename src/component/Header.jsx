export const Header = () => (
  <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <h1 className="text-xl font-bold text-gray-800">Logo</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
      </nav>
    </div>
  </header>
);
