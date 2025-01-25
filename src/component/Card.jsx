export const Card = ({ title, description, image }) => (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );