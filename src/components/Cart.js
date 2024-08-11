import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
   
    const GST_RATE = 0.18; 
    const TAX_RATE = 0.05; 
    const DELIVERY_COST = 50; 
    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => total + parseFloat(item.cost.replace('₹', '')), 0);
    };

    const totalAmount = calculateTotalAmount();
    const gst = totalAmount * GST_RATE;
    const tax = totalAmount * TAX_RATE;
    const grandTotal = totalAmount + gst + tax + DELIVERY_COST;

    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        setOrderConfirmed(true);
    };

    useEffect(() => {
        if (orderConfirmed) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 2000); 

            return () => clearTimeout(timer); 
        }
    }, [orderConfirmed, navigate]);

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {orderConfirmed ? (
                <div className="order-confirmation">
                    <h3>Order Confirmed</h3>
                </div>
            ) : (
                <>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cart.map((item) => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} className="cart-image" />
                                        <div className="cart-details">
                                            <h5>{item.name}</h5>
                                            <p><strong>Sizes:</strong> {item.sizes ? item.sizes.join(', ') : 'N/A'}</p>
                                            <p><strong>Colors:</strong> {item.colors ? item.colors.join(', ') : 'N/A'}</p>
                                            <p><strong>Cost:</strong> {item.cost}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                           
                            <div className="cart-summary">
                                <h3>Order Summary</h3>
                                <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
                                <p><strong>GST (18%):</strong> ₹{gst.toFixed(2)}</p>
                                <p><strong>Tax (5%):</strong> ₹{tax.toFixed(2)}</p>
                                <p><strong>Delivery Cost:</strong> ₹{DELIVERY_COST}</p>
                                <p><strong>Grand Total:</strong> ₹{grandTotal.toFixed(2)}</p>
                            </div>
                            
                 
                            <div className="cart-payment">
                                <button onClick={handlePlaceOrder}>Place order</button>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Cart;
