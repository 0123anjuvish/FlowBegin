import Link from "next/link";
import { BookOpen, Briefcase, Leaf, Trophy, Sparkles } from "lucide-react";
import Carousel from "../components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Empowering Children,<br />
            <span style={{ color: "var(--primary)" }}>Building Futures</span>
          </h1>
          <p className="hero-subtitle">
            Every child deserves a chance. We provide education, skill development,
            and essential support to underprivileged children to help them realize their true potential.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn-primary">
              Get Involved
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <Carousel />
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Focus Areas</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
              We focus on key impact areas designed to uplift children, youth, and communities through education, environment, and empowerment.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-icon">
                <BookOpen size={24} />
              </div>
              <h3>Education</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Providing basic and advanced learning materials, remedial tutoring, and digital literacy tools to underprivileged children.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <Briefcase size={24} />
              </div>
              <h3>Placement</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Equipping young adults with technical skills, career training, and connecting them to stable job placements.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Leaf size={24} />
              </div>
              <h3>Environment</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Leading community tree plantation drives, waste management education, and sustainability initiatives.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Trophy size={24} />
              </div>
              <h3>Sports Support</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Fostering physical fitness, discipline, and team spirit through training, coaching, and athletic gear support.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Sparkles size={24} />
              </div>
              <h3>Women Empowerment</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Delivering skill development workshops, self-defense classes, and financial literacy to foster independence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container" style={{ textAlign: "center", padding: "4rem 2rem", backgroundColor: "rgba(var(--primary-rgb), 0.1)", borderRadius: "var(--radius-lg)" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>Ready to Make a Difference?</h2>
          <p style={{ color: "var(--text-main)", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
            Join our mission to transform lives. Whether you want to volunteer, donate, or 
            simply spread the word, your contribution matters.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
            Donate Now
          </Link>
        </div>
      </section>
    </>
  );
}
