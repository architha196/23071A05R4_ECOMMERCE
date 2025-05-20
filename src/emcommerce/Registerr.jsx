import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registerr = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle registration logic here
    //     alert("Registered successfully!");
    // };

    // Import useNavigate from react-router-dom
    // Place this import at the top of your file:
    // import { useNavigate } from "react-router-dom";
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        alert("Registered successfully!");
        navigate("/loginned");
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "#fff",
                    padding: "2.5rem 2rem",
                    borderRadius: "12px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    minWidth: "320px",
                    width: "100%",
                    maxWidth: "400px"
                }}
            >
                <h2 style={{ color: "#2d6cdf", marginBottom: "1.5rem", textAlign: "center" }}>
                     Register
                </h2>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ color: "#333", fontWeight: 500 }}>First name</label>
                    <input
                        type="text"
                        name="First name"
                        value={"xyz"}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            marginTop: "0.3rem",
                            borderRadius: "6px",
                            border: "1px solid #bcd0ee"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ color: "#333", fontWeight: 500 }}>Last name</label>
                    <input
                        type="text"
                        name="Last name"
                        value={"xyzx"}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            marginTop: "0.3rem",
                            borderRadius: "6px",
                            border: "1px solid #bcd0ee"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ color: "#333", fontWeight: 500 }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            marginTop: "0.3rem",
                            borderRadius: "6px",
                            border: "1px solid #bcd0ee"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ color: "#333", fontWeight: 500 }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            marginTop: "0.3rem",
                            borderRadius: "6px",
                            border: "1px solid #bcd0ee"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ color: "#333", fontWeight: 500 }}>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            marginTop: "0.3rem",
                            borderRadius: "6px",
                            border: "1px solid #bcd0ee"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ color: "#333", fontWeight: 500 }}>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            marginTop: "0.3rem",
                            borderRadius: "6px",
                            border: "1px solid #bcd0ee"
                        }}
                    />
                </div>
                {/* Additional Fields */}
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ color: "#333", fontWeight: 500 }}>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone || ""}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            marginTop: "0.3rem",
                            borderRadius: "6px",
                            border: "1px solid #bcd0ee"
                        }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label style={{ color: "#333", fontWeight: 500 }}>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={form.address || ""}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            marginTop: "0.3rem",
                            borderRadius: "6px",
                            border: "1px solid #bcd0ee"
                        }}
                    />
                </div>
                
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "0.8rem",
                        background: "#2d6cdf",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        fontWeight: 600,
                        fontSize: "1rem",
                        cursor: "pointer"
                    }}
                >
                    Register
                </button>
            </form>
            <footer>@23071a05r4</footer>
        </div>
    );
};

export default Registerr;