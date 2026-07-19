"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Info } from "lucide-react";

interface Project {
  title: string;
  description: string;
  status: string;
  impact: string;
  images: string[];
}

interface WorkClientProps {
  initialProjects: Project[];
}

export default function WorkClient({ initialProjects }: WorkClientProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  return (
    <div className="container section">
      <div className="section-title">
        <h1>Our Work</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
          Explore the initiatives and projects we've undertaken to bring about sustainable
          change in the lives of underprivileged children and communities. Click any category to view more details and photos.
        </p>
      </div>

      <div className="grid-2">
        {initialProjects.map((project, index) => (
          <div 
            key={index} 
            className="card" 
            onClick={() => setSelectedProject(project)}
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              padding: 0, 
              overflow: "hidden",
              cursor: "pointer",
              position: "relative"
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "250px", overflow: "hidden" }}>
              <Image 
                src={project.images[0] || "/placeholder.jpg"} 
                alt={project.title} 
                fill 
                style={{ objectFit: "cover" }} 
                className="project-card-image"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="card-hover-overlay" style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(37, 99, 235, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
                backdropFilter: "blur(4px)"
              }}>
                <div style={{
                  background: "white",
                  color: "var(--primary)",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "var(--radius)",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "var(--shadow-md)"
                }}>
                  <ZoomIn size={18} />
                  View Details & Gallery
                </div>
              </div>
            </div>

            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <h3 style={{ margin: 0, color: "var(--primary)" }}>{project.title}</h3>
                <span style={{ 
                  fontSize: "0.8rem", 
                  padding: "0.25rem 0.75rem", 
                  borderRadius: "20px", 
                  backgroundColor: project.status === 'Active' ? "rgba(37, 99, 235, 0.1)" : "rgba(120, 113, 108, 0.1)",
                  color: project.status === 'Active' ? "var(--primary)" : "var(--text-muted)",
                  fontWeight: 600
                }}>
                  {project.status}
                </span>
              </div>
              <p style={{ color: "var(--text-muted)", flexGrow: 1 }}>{project.description}</p>
              <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border)", fontWeight: 600, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Impact: {project.impact}</span>
                <span style={{ fontSize: "0.85rem", color: "var(--primary)", display: "flex", alignItems: "center", gap: "4px" }}>
                  {project.images.length} {project.images.length === 1 ? "Photo" : "Photos"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global CSS injection to handle hover state & modal backdrop */}
      <style>{`
        .card:hover .card-hover-overlay {
          opacity: 1 !important;
        }
        .project-card-image {
          transition: transform 0.5s ease;
        }
        .card:hover .project-card-image {
          transform: scale(1.05);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0,0,0,0.3);
        }
      `}</style>

      {/* Detail Modal */}
      {selectedProject && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem"
        }}
        onClick={() => setSelectedProject(null)}
        >
          <div style={{
            backgroundColor: "var(--surface)",
            borderRadius: "var(--radius-lg)",
            width: "100%",
            maxWidth: "900px",
            maxHeight: "85vh",
            overflowY: "auto",
            position: "relative",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            animation: "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
          onClick={(e) => e.stopPropagation()}
          className="custom-scrollbar"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-main)",
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <div style={{ padding: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <h2 style={{ margin: 0, color: "var(--text-main)" }}>{selectedProject.title}</h2>
                <span style={{ 
                  fontSize: "0.8rem", 
                  padding: "0.25rem 0.75rem", 
                  borderRadius: "20px", 
                  backgroundColor: "rgba(37, 99, 235, 0.1)",
                  color: "var(--primary)",
                  fontWeight: 600
                }}>
                  {selectedProject.status}
                </span>
              </div>

              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2rem" }}>
                {selectedProject.description}
              </p>

              <div style={{ 
                background: "rgba(var(--primary-rgb), 0.05)", 
                padding: "1rem 1.5rem", 
                borderRadius: "var(--radius)",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                border: "1px solid rgba(var(--primary-rgb), 0.1)"
              }}>
                <Info size={20} style={{ color: "var(--primary)" }} />
                <span style={{ fontWeight: 600, color: "var(--text-main)" }}>
                  Current Impact: {selectedProject.impact}
                </span>
              </div>

              <h3 style={{ marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.5rem" }}>
                Project Gallery ({selectedProject.images.length} {selectedProject.images.length === 1 ? "Photo" : "Photos"})
              </h3>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
                gap: "1rem" 
              }}>
                {selectedProject.images.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveLightboxImage(img)}
                    style={{ 
                      position: "relative", 
                      height: "150px", 
                      borderRadius: "var(--radius)", 
                      overflow: "hidden",
                      cursor: "pointer",
                      border: "1px solid var(--border)"
                    }}
                  >
                    <Image 
                      src={img} 
                      alt={`${selectedProject.title} gallery ${i + 1}`}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for zooming photos */}
      {activeLightboxImage && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1100,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
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
              color: "white"
            }}
          >
            <X size={24} />
          </button>
          <div style={{ position: "relative", width: "100%", height: "100%", maxWidth: "1000px", maxHeight: "80vh" }}>
            <Image 
              src={activeLightboxImage} 
              alt="Zoomed image"
              fill
              style={{ objectFit: "contain" }}
              unoptimized
            />
          </div>
        </div>
      )}

      {/* Keyframe animation for modal */}
      <style>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
