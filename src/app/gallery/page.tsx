"use client";

import { useState, useEffect, useCallback } from "react";
import { Image as ImageIcon, X, Maximize2, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<"all" | "work" | "uploads" | "carousel">("all");
  const [isLoading, setIsLoading] = useState(true);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

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

  // Filter logic
  const filteredImages = images.filter((img) => {
    if (activeFilter === "all") return true;
    return img.startsWith(`/${activeFilter}/`);
  });

  return (
    <div className="container section">
      <div className="section-title">
        <h1>Moments of Joy</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
          A glimpse into the lives we touch and the smiles we share across all our initiatives.
        </p>
      </div>

      <div>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "2.5rem",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "1.5rem"
        }}>
          <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: 0, fontSize: "1.75rem" }}>
            <ImageIcon size={28} style={{ color: "var(--primary)" }} /> Our Gallery
          </h2>

          {/* Filter Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {(["all", "work", "uploads", "carousel"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "20px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  transition: "var(--transition)",
                  border: "1px solid var(--border)",
                  backgroundColor: activeFilter === filter ? "var(--primary)" : "var(--surface)",
                  color: activeFilter === filter ? "#fff" : "var(--text-muted)"
                }}
              >
                {filter === "all" ? "All Photos" : filter === "carousel" ? "SPECIAL" : filter.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        {isLoading ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center", padding: "6rem 0", color: "var(--text-muted)" }}>
            <RefreshCw className="animate-spin" size={32} style={{ color: "var(--primary)", marginBottom: "1rem" }} />
            <p>Loading gallery images...</p>
          </div>
        ) : filteredImages.length === 0 ? (
          <div style={{ 
            textAlign: "center", 
            padding: "5rem 2rem", 
            backgroundColor: "var(--surface)", 
            borderRadius: "var(--radius-lg)", 
            border: "1px dashed var(--border)" 
          }}>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", margin: 0 }}>
              No images found in the "{activeFilter === "carousel" ? "special" : activeFilter}" folder.
            </p>
          </div>
        ) : (
          <div className="gallery-grid">
            {filteredImages.map((img, index) => (
              <div 
                key={index} 
                className="gallery-card"
                onClick={() => setActiveLightboxImage(img)}
                style={{
                  position: "relative",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  cursor: "pointer",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                <Image 
                  src={img} 
                  alt={`Gallery item ${index + 1}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="gallery-image"
                />
                
                {/* Category label badge */}
                <div style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "0.75rem",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(4px)",
                  color: "#fff",
                  textTransform: "uppercase",
                  zIndex: 2
                }}>
                  {img.split("/")[1] === "carousel" ? "special" : img.split("/")[1]}
                </div>

                {/* Hover zoom overlay */}
                <div className="gallery-hover-overlay" style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(37, 99, 235, 0.3)",
                  backdropFilter: "blur(2px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  zIndex: 1
                }}>
                  <div style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    boxShadow: "var(--shadow-md)"
                  }}>
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Global CSS for animations & hover effects */}
      <style>{`
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .gallery-card:hover .gallery-image {
          transform: scale(1.05);
        }
        .gallery-card:hover .gallery-hover-overlay {
          opacity: 1 !important;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Full-screen Lightbox Modal */}
      {activeLightboxImage && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2000,
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem"
        }}
        onClick={() => setActiveLightboxImage(null)}
        >
          <button 
            onClick={() => setActiveLightboxImage(null)}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
          >
            <X size={24} />
          </button>
          
          <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "100%", 
            maxWidth: "1100px", 
            maxHeight: "85vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image 
                src={activeLightboxImage} 
                alt="Zoomed gallery image"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
            
            {/* Folder context badge at the bottom of lightbox */}
            <span style={{ 
              color: "rgba(255,255,255,0.7)", 
              marginTop: "1rem", 
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: 600
            }}>
              Source Folder: {activeLightboxImage.split("/")[1] === "carousel" ? "special" : activeLightboxImage.split("/")[1]}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
