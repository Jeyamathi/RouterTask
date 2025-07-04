import { useNavigate } from "react-router-dom";    
export default function Cart({ cartItems, onUpdateQuantity, onRemove }) {

    const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Navigates back to home or any other path
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const subtotal = getTotal();
  const discount = subtotal * 0.1;
  const finalTotal = subtotal - discount;

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">🧾 Cart Summary</h2>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">🛒 Your cart is empty</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="py-4 flex flex-col md:flex-row md:items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold line-clamp-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">
                      ₹ {item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <p className="text-gray-800 font-medium">
                      Total: ₹ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-red-500 text-sm hover:underline mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0 space-x-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                  >
                    −
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right space-y-1 border-t pt-4">
            <p className="text-gray-700">Subtotal: ₹ {subtotal.toFixed(2)}</p>
            <p className="text-gray-700">Discount (10%): − ₹ {discount.toFixed(2)}</p>
            <p className="text-lg font-bold">Total: ₹ {finalTotal.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}
