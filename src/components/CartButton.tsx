"use client";
import { useCart } from "@/app/context/CartContext";

interface Product {
  _id: string;
  title: string;
  price: number;
  productImage: string;
  description: string;
  discountPercentage: number;
  quantity: number; // Optional field
}


const CartButton = ({ product }: { product: Product}) => {
    const { addToCart } = useCart();
  
    const handleAddToCart = (product: Product) => {
      const cartItem = {
        _id: product._id,
        productImage: product.productImage,
        title: product.title,
        price: product.price,
        quantity: 1,
      };
      addToCart(cartItem);
    };
  
    return (
      <>
          <button
            key={product._id}
            onClick={() => handleAddToCart(product)}
            className="bg-white active:bg-yellow-700 active:text-white text-yellow-700 border-2 w-40 mt-14 p-4 text-center font-semibold cursor-pointer"
          >
            Add to Cart
          </button>
      </>
    );
  };
  
  export default CartButton