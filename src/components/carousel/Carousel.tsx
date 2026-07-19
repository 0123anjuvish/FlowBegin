"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Carousel.module.css";

const images = [
  {
    src: "/carousel/1.jpg",
    alt: "Children playing",
    title: "Joy of Learning",
    description: "Every child deserves a safe space to grow and learn.",
  },
  {
    src: "/carousel/2.jpg",
    alt: "Classroom activities",
    title: "Empowering Futures",
    description: "Education is the key to unlocking true potential.",
  },
  {
    src: "/carousel/3.jpg",
    alt: "Community support",
    title: "Community First",
    description: "Building stronger communities through active support.",
  },
  {
    src: "/carousel/4.jpg",
    alt: "Group photo",
    title: "Together We Can",
    description: "Join hands with us to make a lasting difference.",
  },
  {
    src: "/carousel/5.jpg",
    alt: "Learning sessions",
    title: "Brighter Tomorrows",
    description: "Knowledge lights the path to a better future.",
  },
  {
    src: "/carousel/6.jpg",
    alt: "Playtime",
    title: "Happy Moments",
    description: "Creating joyful memories every day.",
  },
  {
    src: "/carousel/7.jpg",
    alt: "Education programs",
    title: "Building Skills",
    description: "Equipping children with the skills they need to succeed.",
  },
  {
    src: "/carousel/8.jpg",
    alt: "Extracurricular activities",
    title: "Holistic Growth",
    description: "Nurturing talents outside the classroom.",
  },
  {
    src: "/carousel/9.jpg",
    alt: "Community engagement",
    title: "Strong Support System",
    description: "A community that stands by its children.",
  },
  {
    src: "/carousel/10.jpg",
    alt: "Bright future",
    title: "Hope for Tomorrow",
    description: "Every effort counts towards a better future.",
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className={styles.carouselSlide}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={styles.carouselImage}
              priority={index === 0}
            />
            <div className={styles.carouselOverlay}>
              <h3>{img.title}</h3>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.carouselButton} ${styles.prev}`} onClick={prevSlide} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      
      <button className={`${styles.carouselButton} ${styles.next}`} onClick={nextSlide} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>

      <div className={styles.carouselIndicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
