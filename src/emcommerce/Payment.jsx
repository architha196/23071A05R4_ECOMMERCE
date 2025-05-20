import React, { useState } from "react";

const Payment = () => {
    const [form, setForm] = useState({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        amount: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment submitted!");
        // Add payment processing logic here
    };

    return (
        <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
            <h2>Payment Module</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name on Card</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                </div>
                <div>
                    <label>Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleChange}
                        maxLength={16}
                        required
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                </div>
                <div>
                    <label>Expiry Date</label>
                    <input
                        type="text"
                        name="expiry"
                        value={form.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                </div>
                <div>
                    <label>CVV</label>
                    <input
                        type="password"
                        name="cvv"
                        value={form.cvv}
                        onChange={handleChange}
                        maxLength={4}
                        required
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        min={1}
                        required
                        style={{ width: "100%", marginBottom: 10 }}
                    />
                </div>
                <button type="submit" style={{ width: "100%" }}>Pay Now</button>
            </form>
            <footer>@23071a05r4</footer>
        </div>
    );
};

export default Payment;