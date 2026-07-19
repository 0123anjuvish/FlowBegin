import fs from "fs";
import path from "path";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function About() {
  const teamDir = path.join(process.cwd(), "public", "team");
  let fileNames: string[] = [];

  try {
    if (fs.existsSync(teamDir)) {
      fileNames = fs.readdirSync(teamDir);
    }
  } catch (error) {
    console.error("Error reading public/team directory:", error);
  }

  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"];
  const teamMembers = fileNames
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    })
    .map((file) => {
      const baseName = path.basename(file, path.extname(file)); // e.g. "nikesh_directory" or "suman_coordinator"
      const parts = baseName.split("_");
      
      const rawName = parts[0] || "Team Member";
      const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
      
      const rawPosition = parts.slice(1).join(" ") || "Member";
      let formattedPosition = rawPosition.charAt(0).toUpperCase() + rawPosition.slice(1);
      
      // Auto-correct common values like "directory" to "Director"
      if (formattedPosition.toLowerCase() === "directory") {
        formattedPosition = "Director";
      }

      return {
        name: formattedName,
        position: formattedPosition,
        image: `/team/${file}`
      };
    });

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

        {/* Our Team Section */}
        {teamMembers.length > 0 && (
          <div style={{ marginTop: "5rem" }}>
            <div className="section-title" style={{ marginBottom: "3rem" }}>
              <h2>Meet Our Team</h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
                The passionate individuals leading the change and making a daily difference.
              </p>
            </div>

            <div style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "2.5rem", 
              flexWrap: "wrap" 
            }}>
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="team-card"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border)",
                    padding: "2.5rem",
                    width: "100%",
                    maxWidth: "320px",
                    textAlign: "center",
                    boxShadow: "var(--shadow-sm)",
                    transition: "var(--transition)"
                  }}
                >
                  <div style={{
                    position: "relative",
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto 1.5rem",
                    border: "4px solid rgba(var(--primary-rgb), 0.1)"
                  }}>
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="140px"
                    />
                  </div>
                  <h3 style={{ margin: "0 0 0.5rem 0", color: "var(--text-main)", fontSize: "1.35rem" }}>{member.name}</h3>
                  <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.95rem", margin: 0, letterSpacing: "0.5px" }}>{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Team card hover style */}
      <style>{`
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md) !important;
          border-color: rgba(var(--primary-rgb), 0.25) !important;
        }
      `}</style>
    </div>
  );
}
