"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs"; // Import Clerk's hook

interface CartItem {
  _id: string;
  productImage: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  wishlistItems: CartItem[]; // Wishlist items
  addToCart: (product: CartItem) => void;
  removeFromCart: (_id: string) => void;
  incrementQuantity: (_id: string) => void;
  decrementQuantity: (_id: string) => void;
  addToWishlist: (product: CartItem) => void; // Add to Wishlist
  removeFromWishlist: (_id: string) => void; // Remove from Wishlist
  clearCart: () => void;
  showPopup: boolean;
  wishlistPopup: boolean; // Wishlist Popup
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setWishlistPopup: React.Dispatch<React.SetStateAction<boolean>>; // Wishlist Popup Setter
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser(); // Get signed-in user from Clerk
  // Create a unique key based on the user id if available, otherwise use a generic key
  const userId = user?.id || "guest";
  const cartKey = `cartItems_${userId}`;
  const wishlistKey = `wishlistItems_${userId}`;

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<CartItem[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [wishlistPopup, setWishlistPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load cart and wishlist from localStorage using user-specific keys
    const storedCart = localStorage.getItem(cartKey);
    const storedWishlist = localStorage.getItem(wishlistKey);
    if (storedCart) setCartItems(JSON.parse(storedCart));
    if (storedWishlist) setWishlistItems(JSON.parse(storedWishlist));
    setIsLoading(false);
  }, [cartKey, wishlistKey]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(cartKey, JSON.stringify(cartItems));
      localStorage.setItem(wishlistKey, JSON.stringify(wishlistItems));
    }
  }, [cartItems, wishlistItems, isLoading, cartKey, wishlistKey]);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex((item) => item._id === product._id);
      if (existingProductIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const removeFromCart = (_id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== _id));
  };

  const incrementQuantity = (_id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (_id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === _id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const addToWishlist = (product: CartItem) => {
    setWishlistItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (!existingItem) {
        return [...prevItems, product];
      }
      return prevItems;
    });

    setWishlistPopup(true);
    setTimeout(() => setWishlistPopup(false), 3000);
  };

  const removeFromWishlist = (_id: string) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item._id !== _id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem(cartKey);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        addToWishlist,
        removeFromWishlist,
        clearCart,
        showPopup,
        wishlistPopup,
        setShowPopup,
        setWishlistPopup,
        isLoading,
      }}
    >
      {isLoading ? (
        <div className="loader flex justify-center items-center w-full h-screen">
          <div className="border-t-4 border-yellow-700 border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        children
      )}

      {showPopup && (
        <div className="popup fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-green-500 text-white p-4 rounded shadow-lg">
          <p>Great Choice! It's now in your cart! 🛒</p>
        </div>
      )}

      {wishlistPopup && (
        <div className="popup fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-yellow-700 text-white p-4 rounded shadow-lg">
          <p>Your choice is amazing! It's on your wishlist now 💖</p>
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


