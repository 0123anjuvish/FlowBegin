import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 className="logo" style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Flowbegin</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Empowering underprivileged children through education and skill development for a brighter, self-reliant future.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/about" className="nav-link">About Us</Link>
              <Link href="/work" className="nav-link">Our Work</Link>
              <Link href="/gallery" className="nav-link">Gallery</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                <span>Plot no. 17 GF near Jwala Mandir, Prem Nagar 3rd, Kirari, Delhi 110086</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} />
                <span>+91 92055 35669</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} />
                <span>Flowbegin.foundation@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
              <a href="https://www.facebook.com/share/18tMfF18dZ/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'inline-flex' }} aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/flow_begin_foundation?igsh=MWozOGV2c2Z3bXZiMQ==" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'inline-flex' }} aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/flowbegin-foundation-49aa82412" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'inline-flex' }} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Flowbegin NGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
