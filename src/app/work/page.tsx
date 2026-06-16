export default function Work() {
  const projects = [
    {
      title: "Project Vidyalaya",
      description: "Establishing makeshift classrooms in remote slums and villages. We provide learning materials, trained educators, and a safe learning environment for over 500 children.",
      status: "Active",
      impact: "500+ Children Enrolled",
    },
    {
      title: "Tech For Tomorrow",
      description: "A digital literacy program aimed at older children (12-16 years). We set up computer labs and teach basic programming, digital tools, and internet safety.",
      status: "Active",
      impact: "120+ Students Certified",
    },
    {
      title: "Nourish to Flourish",
      description: "A mid-day meal initiative that ensures every child attending our learning centers receives at least one wholesome, nutritious meal a day to combat malnutrition.",
      status: "Active",
      impact: "1,000+ Meals/Week",
    },
    {
      title: "Art & Craft Workshops",
      description: "Skill development focusing on creative expression. These workshops help children discover their talents and provide therapeutic outlets for stress.",
      status: "Completed",
      impact: "50+ Workshops Held",
    }
  ];

  return (
    <div className="container section">
      <div className="section-title">
        <h1>Our Work</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem" }}>
          Explore the initiatives and projects we've undertaken to bring about sustainable
          change in the lives of underprivileged children.
        </p>
      </div>

      <div className="grid-2">
        {projects.map((project, index) => (
          <div key={index} className="card" style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "var(--primary)" }}>{project.title}</h3>
              <span style={{ 
                fontSize: "0.8rem", 
                padding: "0.25rem 0.75rem", 
                borderRadius: "20px", 
                backgroundColor: project.status === 'Active' ? "rgba(59, 130, 246, 0.1)" : "rgba(120, 113, 108, 0.1)",
                color: project.status === 'Active' ? "var(--secondary)" : "var(--text-muted)",
                fontWeight: 600
              }}>
                {project.status}
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", flexGrow: 1 }}>{project.description}</p>
            <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border)", fontWeight: 600 }}>
              Impact: {project.impact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
