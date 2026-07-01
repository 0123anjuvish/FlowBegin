"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Thank you for your message. We will get back to you shortly!");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="container section">
      <div className="section-title">
        <h1>Contact Us</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
          Have questions, want to volunteer, or just say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid-2 contact-grid">
        <div>
          <h2 style={{ marginBottom: "2rem" }}>Get in Touch</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div style={{ color: "var(--primary)", marginTop: "0.25rem" }}>
                <MapPin size={32} />
              </div>
              <div>
                <h3 style={{ marginBottom: "0.5rem" }}>Visit Us</h3>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>
                  Plot no. 17 GF near Jwala Mandir<br />
                  Prem Nagar 3rd, Kirari<br />
                  Delhi, 110086
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div style={{ color: "var(--primary)", marginTop: "0.25rem" }}>
                <Phone size={32} />
              </div>
              <div>
                <h3 style={{ marginBottom: "0.5rem" }}>Call Us</h3>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>
                  +91 92055 35669<br />
                  Mon-Fri, 9am - 6pm
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div style={{ color: "var(--primary)", marginTop: "0.25rem" }}>
                <Mail size={32} />
              </div>
              <div>
                <h3 style={{ marginBottom: "0.5rem" }}>Email Us</h3>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>
                  hello@flowbegin.org<br />
                  volunteer@flowbegin.org
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: "1.5rem" }}>Send a Message</h3>
          {status && (
            <div style={{ backgroundColor: "rgba(59, 130, 246, 0.1)", color: "var(--secondary)", padding: "1rem", borderRadius: "var(--radius)", marginBottom: "1.5rem" }}>
              {status}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <input className="form-input" type="text" id="name" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input className="form-input" type="email" id="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">Your Message</label>
              <textarea className="form-textarea" id="message" required placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
