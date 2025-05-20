import React from "react";

const Contact = () => {
    return (
        <div style={{ maxWidth: 600, margin: "40px auto", padding: 24, background: "#f9f9f9", borderRadius: 8 }}>
            <h2>Contact  </h2>
            <p>
                Have questions or want to join our study circle
            </p>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <label>
                    Name:
                    <input type="text" name="name" required style={{ width: "100%", padding: 8, marginTop: 4 }} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required style={{ width: "100%", padding: 8, marginTop: 4 }} />
                </label>
                <label>
                    Message:
                    <textarea name="message" rows={4} required style={{ width: "100%", padding: 8, marginTop: 4 }} />
                </label>
                <button type="submit" style={{ padding: "10px 20px", background: "#1976d2", color: "#fff", border: "none", borderRadius: 4 }}>
                    Send Message
                </button>
            </form>
        
            <footer>@23071a05r4</footer>
        </div>
    );
};

export default Contact;
