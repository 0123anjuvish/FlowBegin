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

      <div style={{ display: "grid", gap: "4rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
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
          <div style={{ flex: "1 1 400px", height: "300px", backgroundColor: "var(--surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
             <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(59,130,246,0.2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "4rem", opacity: 0.5 }}>🌱</span>
             </div>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "2rem", alignItems: "center" }}>
          <div style={{ flex: "1 1 400px", height: "300px", backgroundColor: "var(--surface)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
             <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(245,158,11,0.2))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "4rem", opacity: 0.5 }}>🌟</span>
             </div>
          </div>
          <div style={{ flex: "1 1 400px" }}>
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
