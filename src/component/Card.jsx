export const Card = ({ title, description, image }) => (
    <div className="mt-20 bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <p></p>
      </div>
    </div>
  );