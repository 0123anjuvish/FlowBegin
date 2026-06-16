"use client";

import { useState, useEffect, useCallback } from "react";
import { Image as ImageIcon } from "lucide-react";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/upload");
      const data = await res.json();
      if (data.images) {
        setImages(data.images);
      }
    } catch (error) {
      console.error("Failed to fetch images", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container section">
      <div className="section-title">
        <h1>Moments of Joy</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
          A glimpse into the lives we touch and the smiles we share.
        </p>
      </div>

      <div>
        <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
          <ImageIcon /> Our Gallery
        </h2>
        
        {isLoading ? (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-muted)" }}>
            Loading images...
          </div>
        ) : images.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 0", backgroundColor: "var(--surface)", borderRadius: "var(--radius-lg)", border: "1px dashed var(--border)" }}>
            <p style={{ color: "var(--text-muted)", margin: 0 }}>No images in the gallery yet.</p>
          </div>
        ) : (
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div key={index} className="gallery-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={`Gallery item ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
