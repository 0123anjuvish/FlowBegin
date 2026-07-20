import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container section">
      <div className="section-title">
        <h1>Contact Us</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
          Have questions, want to volunteer, or just say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid-3" style={{ marginTop: "3rem" }}>
        {/* Visit Us Card */}
        <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2.5rem 2rem" }}>
          <div style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>
            <MapPin size={40} />
          </div>
          <h3 style={{ marginBottom: "1rem" }}>Visit Us</h3>
          <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: "1.6" }}>
            Plot no. 17 GF near Jwala Mandir<br />
            Prem Nagar 3rd, Kirari<br />
            Delhi, 110086
          </p>
        </div>

        {/* Call Us Card */}
        <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2.5rem 2rem" }}>
          <div style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>
            <Phone size={40} />
          </div>
          <h3 style={{ marginBottom: "1rem" }}>Call Us</h3>
          <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: "1.6" }}>
            +91 92055 35669<br />
            Mon-Fri, 9am - 6pm
          </p>
        </div>

        {/* Email Us Card */}
        <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2.5rem 2rem" }}>
          <div style={{ color: "var(--primary)", marginBottom: "1.5rem" }}>
            <Mail size={40} />
          </div>
          <h3 style={{ marginBottom: "1rem" }}>Email Us</h3>
          <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: "1.6" }}>
            Flowbegin.foundation@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
