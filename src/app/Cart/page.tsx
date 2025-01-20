"use client";
import Image from "next/image";
import React from "react";
import { useCart } from "@/components/cartcontext";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";


const CartDisplay = () => {
  const {
    cartItems,
    removeFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
    getTotalPrice,
    getStockLevel,
    clearCart
  } = useCart();

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-[48px] font-bold mb-4 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
         <div>
           <p className="text-gray-500 h-screen text-center">Your cart is empty <Link href={"/Shop"} className="text-pink-500">Continue shopping</Link> </p>
         </div>
      ) : (
        <>
          {cartItems.map((item) => {
            const stockRemaining = getStockLevel(item._id);

            return (
              <div
                key={item._id}
                className="  mb-4 p-4 border rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                    height={10}
                    width={20}
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-sm text-gray-500">
                        Stock remaining: {stockRemaining}
                      </p>
                    </div>
                  </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decrementProductQuantity(item._id)}
                        className="px-3 py-1 border rounded hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => incrementProductQuantity(item._id)}
                        className="px-3 py-1 border rounded hover:bg-gray-100"
                        disabled={stockRemaining === 0}
                        style={{ opacity: stockRemaining === 0 ? 0.5 : 1 }}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="px-4 py-1 text-white rounded bg-pink-500"
                    >
                      Remove
                    </button>
                  </div>

                <div className="mt-2">
                  <p className="text-right font-semibold">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}

          <div className=" flex justify-around items-center mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xl font-bold text-right">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
            <button onClick={clearCart} className="bg-green-500 text-white h-[35px] w-[90px] rounded-lg">Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDisplay;