import React, { useEffect, useState } from "react";

const Cartu = () => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from localStorage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Remove item from cart
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Calculate total price
    const getTotal = () =>
        cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "1rem",
                                    borderBottom: "1px solid #ccc",
                                    paddingBottom: "1rem",
                                }}
                            >
                                {/* If you have images, show them. Otherwise, remove this img tag */}
                                {/* <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ width: 60, height: 60, marginRight: 16 }}
                                /> */}
                                <div style={{ flex: 1 }}>
                                    <strong>{item.name}</strong>
                                    <div>Price: ${item.price}</div>
                                    <div>Quantity: {item.quantity || 1}</div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    style={{
                                        background: "#e74c3c",
                                        color: "#fff",
                                        border: "none",
                                        padding: "0.5rem 1rem",
                                        borderRadius: 4,
                                        cursor: "pointer",
                                    }}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${getTotal()}</h3>
                </div>
            )}
            <footer>@23071a05r4</footer>
        </div>
    );
};

export default Cartu;
