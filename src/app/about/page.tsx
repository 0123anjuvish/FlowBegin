export default function About() {
  return (
    <div className="container section">
      <div className="section-title">
        <h1>About Flowbegin</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
          We are a dedicated non-profit organization striving to bridge the gap in education
          and skill development for underprivileged children.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-row">
          <div className="about-text">
            <h2 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Our Mission</h2>
            <p>
              At Flowbegin, our mission is to empower children from marginalized communities by providing
              them with access to quality education, essential life skills, and a supportive environment.
              We believe that every child has the potential to flow towards a brighter beginning.
            </p>
            <p>
              By breaking the cycle of poverty through education, we aim to build a society where
              opportunities are not limited by a child's socio-economic background.
            </p>
          </div>
          <div className="about-image-container">
             <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(var(--secondary-rgb), 0.2), rgba(var(--primary-rgb), 0.2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "4rem", opacity: 0.5 }}>🌱</span>
             </div>
          </div>
        </div>

        <div className="about-row reverse">
          <div className="about-image-container">
             <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--secondary-rgb), 0.2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "4rem", opacity: 0.5 }}>🌟</span>
             </div>
          </div>
          <div className="about-text">
            <h2 style={{ color: "var(--primary)", marginBottom: "1rem" }}>Our Vision</h2>
            <p>
              A world where every child, regardless of their circumstances, has the tools,
              confidence, and opportunities to craft their own destiny and contribute positively
              to the global community.
            </p>
            <p>
              We envision communities that are self-reliant, aware, and capable of nurturing
              the next generation with love and adequate resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
