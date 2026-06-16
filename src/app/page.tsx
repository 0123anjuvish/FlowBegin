import Link from "next/link";
import { BookOpen, GraduationCap, Heart, Users } from "lucide-react";

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
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">
              Get Involved
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--surface)" }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Focus Areas</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
              We believe in a holistic approach to child development, focusing on education,
              health, and essential life skills.
            </p>
          </div>

          <div className="grid-2">
            <div className="card">
              <div className="card-icon">
                <BookOpen size={24} />
              </div>
              <h3>Quality Education</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Providing access to basic and advanced education through sponsored schooling
                and community learning centers.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">
                <GraduationCap size={24} />
              </div>
              <h3>Skill Development</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Equipping older children with vocational and technical skills to prepare
                them for a self-sustaining future.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Heart size={24} />
              </div>
              <h3>Health & Nutrition</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Ensuring proper physical development through regular health checkups and
                nutritious meal programs.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <Users size={24} />
              </div>
              <h3>Community Support</h3>
              <p style={{ color: "var(--text-muted)" }}>
                Working with families and local communities to create a safe, supportive
                environment for children to grow.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container" style={{ textAlign: "center", padding: "4rem 2rem", backgroundColor: "rgba(245, 158, 11, 0.1)", borderRadius: "var(--radius-lg)" }}>
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
