"use client";

import { useState } from "react";
import GalleryUpload from "@/components/GalleryUpload";
import { Lock } from "lucide-react";

import { verifyAdminPassword } from "./actions";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setError("");
    
    try {
      const isValid = await verifyAdminPassword(password);
      if (isValid) {
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Invalid password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsChecking(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container section" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <div className="card" style={{ maxWidth: "400px", width: "100%", textAlign: "center" }}>
          <div style={{ margin: "0 auto 1.5rem", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--secondary)" }}>
            <Lock size={24} />
          </div>
          <h2 style={{ marginBottom: "1.5rem" }}>Admin Access</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group" style={{ textAlign: "left" }}>
              <label className="form-label" htmlFor="password">Password</label>
              <input 
                className="form-input" 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                placeholder="Enter admin password" 
              />
            </div>
            {error && <p style={{ color: "#ef4444", marginBottom: "1rem", fontSize: "0.9rem" }}>{error}</p>}
            <button type="submit" className="btn-primary" style={{ width: "100%" }} disabled={isChecking}>
              {isChecking ? "Checking..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container section">
      <div className="section-title">
        <h1>Admin Dashboard</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
          Manage your website's content. Upload images to the public gallery below.
        </p>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <GalleryUpload onUploadSuccess={() => alert("Image uploaded successfully to the gallery!")} />
      </div>
    </div>
  );
}
