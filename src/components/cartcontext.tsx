"use client";
import React from 'react';
import { useState, createContext,useCallback,useContext,useEffect } from 'react';

interface ProductsDetails {
    _id:string,
    name:string,
    image:string,
    price:number,
    description:string,
    discountPercentage:number,
    stockLevel:number,
    category:string
};

interface CartItem extends ProductsDetails {
    quantity:number;
}

interface CartContextType {
    cartItems:CartItem[];
    addToCart:(product: ProductsDetails) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    incrementProductQuantity: (productId: string) => void;
    decrementProductQuantity: (productId: string) => void;
    getTotalPrice:number;
    getCartItemCount: number;
    updateItemQuantity: (productId: string, quantity: number) => void;
    updateStockLevel: (productId: string, quantity: number) => void;
    isItemInCart:(productId: string) => boolean;
    getItemQuantity: (productId: string) => number;
    getStockLevel:(productId: string) => number;
};

const CartContext =createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export function CartFunctionality({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false );
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [stockLevels, setStockLevels] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        setIsClient(true);
        const savedCart = localStorage.getItem('cart');
        const savedStock = localStorage.getItem('stockLevels');
        if (savedCart) setCartItems(JSON.parse(savedCart ));
        if (savedStock) setStockLevels(JSON.parse(savedStock));
    }, []);

    // client side pa updated stock data or cart safe kia hai local storage mai
    useEffect(() => {
        if (isClient) {
            localStorage.setItem('cart', JSON.stringify(cartItems) );
            localStorage.setItem('stockLevels', JSON.stringify(stockLevels));
        }
    }, [cartItems, stockLevels,  isClient]);

    const updateStockLevel = useCallback((productId:string, quantity:number) => {
        setStockLevels(prev => ({
            ...prev,
            [productId]:quantity
        }));
    }, []);

    const getStockLevel = useCallback((productId: string) => {
        return stockLevels[productId] ?? 0;
    }, [stockLevels]);

    const addToCart = useCallback((product: ProductsDetails) => {
        setCartItems(prev => {
            const existingItems =prev.find(item => item._id === product._id);
            
            const currentStock = stockLevels[product._id] ?? product.stockLevel;
            if (currentStock <= 0) {
                return prev; // Agar stock nahi hai tu nahi add karo product 
            }
            setStockLevels(prevStock => ({
                ...prevStock,
                [product._id]: currentStock - 1
            }));
            if (existingItems) {
                return prev.map(item =>
                    item._id === product._id
                        ?{ ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }, [stockLevels]);

    const removeFromCart = useCallback((productId: string) => {
        const RemoveItem = cartItems.find(item => item._id === productId);
        if (RemoveItem) {
            setStockLevels(prev => ({
                ...prev,
                [productId]: (prev[productId] ?? RemoveItem.stockLevel) + RemoveItem.quantity
            }));
        }
        setCartItems(prev => prev.filter(item => item._id !== productId));
    }, [cartItems ]);

    const incrementProductQuantity = useCallback((productId: string) => {
        const currentStock = stockLevels[productId];
        if (currentStock <= 0) return; 

        setCartItems(prev =>
            prev.map(item =>
                item._id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
        setStockLevels(prev => ({
            ...prev,
            [productId]: prev[productId] - 1
        }));
    }, [stockLevels]);


    const decrementProductQuantity = useCallback((productId: string) => {
        setCartItems(prev =>
            prev.map(item =>
                item._id === productId && item.quantity > 1
                    ? { ...item,  quantity: item.quantity - 1 }
                    : item
            )
        );
        setStockLevels(prev => {
            const currentQuantity = cartItems.find(item => item._id === productId)?.quantity;
            if (currentQuantity &&  currentQuantity > 1) {
                return {
                    ...prev,
                    [productId]: prev[productId] + 1
                };
            }
            return prev;
        });
    }, [cartItems]);

    const updateItemQuantity = useCallback((productId: string, quantity: number) => {
        const currentItem = cartItems.find(item => item._id === productId);
        if (!currentItem) return;

        const quantityDiff = quantity - currentItem.quantity;
        const currentStock = stockLevels[productId];

        if (quantityDiff > currentStock) return; 

        if (quantity <=  0) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prev =>
            prev.map(item =>
                item._id === productId
                    ? { ...item, quantity }
                : item
            )
        );
        setStockLevels(prev => ({
            ...prev,
            [productId]: prev[productId] - quantityDiff
        }));
    }, [cartItems, stockLevels, removeFromCart] );

    const clearCart = useCallback(() => {
        // Restore all stock when clearing cart
     cartItems.forEach(item => {
        setStockLevels(prev => ({
                ...prev,
                [item._id]: (prev[item._id] ?? item.stockLevel) + item.quantity
            }));
        });
        setCartItems([]);
    }, [cartItems]);

    const getTotalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const getCartItemCount =  cartItems.reduce((count, item) => count + item.quantity, 0);
    
    const isItemInCart = useCallback((productId: string) => {
        return cartItems.some(item => item._id === productId);
    }, [cartItems]);

    const getItemQuantity = useCallback((productId: string) => {
        const item = cartItems.find(item => item._id === productId);
        return item?.quantity || 0;
    }, [cartItems]);

    const value = {
        cartItems,
        addToCart: addToCart,
        removeFromCart,
        clearCart,
        incrementProductQuantity,
        decrementProductQuantity,
        getTotalPrice,
        getCartItemCount,
        updateItemQuantity,
        updateStockLevel,
        isItemInCart,
        getItemQuantity,
        getStockLevel,
    };

    return (
        <CartContext.Provider value={ value}>
            {children}
          </CartContext.Provider>
    );
}

export default CartFunctionality;