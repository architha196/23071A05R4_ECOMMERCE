import React, { useState } from "react";
import Cartu from "./Cartu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Headphones", price: 99 },
];

function Catalogue() {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    const addToCart = (product) => {
        let updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existing = updatedCart.find((item) => item.id === product.id);
        if (existing) {
            updatedCart = updatedCart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                    : item
            );
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
        // window.location.href = "/cartu";
    };

    return (
        <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
            <h1>Product Catalogue</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {products.map((product) => (
                    <li key={product.id} style={{ marginBottom: "1rem" }}>
                        <span>
                            <strong>{product.name}</strong> - ${product.price}
                        </span>
                        <button
                            style={{ marginLeft: "1rem" }}
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </li>
                ))}
            </ul>
            <footer>@23071a05r4</footer>
        </div>
    );
}

export default Catalogue;


