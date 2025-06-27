import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.error("Error fetching item:", err));
  }, [id]);

  if (!item) return <div>Loading item details...</div>;

  return (
   <div className="p-4 max-w-2xl mx-auto bg-white shadow-lg rounded-lg py-12">
  <div className="flex flex-col items-center space-y-6">
    <h1 className="text-xl font-bold text-center">{item.title}</h1>
    
    <img 
      src={item.image} 
      alt={item.title} 
      className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain" 
    />
    
    <h2 className="text-center px-4">{item.description}</h2>
    
    <p className="text-green-600 font-semibold">${item.price}</p>
  </div>
</div>

  );
}
