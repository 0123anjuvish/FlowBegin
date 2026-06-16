"use client";

import { useState, useRef, ChangeEvent } from "react";
import { UploadCloud, Image as ImageIcon, Loader2 } from "lucide-react";

export default function GalleryUpload({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleFileSelection = (file: File) => {
    setError(null);
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError("Image size should be less than 5MB.");
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setPreview(null);
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        onUploadSuccess();
      } else {
        setError(result.message || "Failed to upload image.");
      }
    } catch (err) {
      setError("An error occurred during upload.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="card" style={{ marginBottom: "3rem" }}>
      <h3 style={{ marginBottom: "1.5rem" }}>Upload to Gallery</h3>
      
      {!preview ? (
        <div 
          className={`upload-zone ${isDragging ? "drag-active" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <UploadCloud size={48} color="var(--primary)" style={{ margin: "0 auto 1rem" }} />
          <h4 style={{ marginBottom: "0.5rem" }}>Click or drag image to upload</h4>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>SVG, PNG, JPG or GIF (max. 5MB)</p>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileInput} 
            accept="image/*" 
            style={{ display: "none" }} 
          />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "400px", height: "250px", margin: "0 auto 1.5rem", borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--border)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "var(--background)" }} />
          </div>
          
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button 
              className="btn-secondary" 
              onClick={() => { setPreview(null); setSelectedFile(null); }}
              disabled={isUploading}
            >
              Cancel
            </button>
            <button 
              className="btn-primary" 
              onClick={handleUpload}
              disabled={isUploading}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              {isUploading ? <Loader2 className="animate-spin" size={18} /> : <ImageIcon size={18} />}
              {isUploading ? "Uploading..." : "Upload Image"}
            </button>
          </div>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "rgba(239, 68, 68, 0.1)", color: "#ef4444", borderRadius: "var(--radius)" }}>
          {error}
        </div>
      )}
    </div>
  );
}
