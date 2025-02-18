import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  var totalAmount = 0;
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="m-2 p-2 text-center font-bold text-2xl">Cart</h1>
      <div className="w-4/12 p-2 m-2 border-2 shadow-lg">
        {cartItems.map((item) => {
          item?.card?.info?.price
            ? (totalAmount += item?.card?.info?.price / 100)
            : (totalAmount += item?.card?.info?.defaultPrice / 100);
          return (
            <div
              key={item?.card?.info?.id}
              className="border-b text-left flex justify-between items-center p-2"
            >
              <h1 className="text-base font-bold">{item?.card?.info?.name}</h1>
              {item?.card?.info?.price ? (
                <span className="text-gray-700 font-bold text-sm">
                  ₹{item?.card?.info?.price / 100}
                </span>
              ) : (
                <span className="text-gray-700 font-bold text-sm">
                  ₹{item?.card?.info?.defaultPrice / 100}
                </span>
              )}
            </div>
          );
        })}
        {cartItems.length === 0 ? (
          <h1 className="text-center">Cart is empty, add items to Proceed !</h1>
        ) : (
          <div>
            <div className="p-2 flex justify-between border-t-2 border-black">
              <h1 className="font-bold text-gray-900">Total</h1>
              <h1 className="text-gray-900 font-bold text-sm text-right">
                ₹{totalAmount}
              </h1>
            </div>
            <div className="flex justify-center items-start flex-col w-4/12">
              <button
                className=" px-2 border bg-red-400 rounded-lg hover:scale-110"
                onClick={handleClearCart}
              >
                Clear cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
