import Link from "next/link";
import { Mail, Phone, MapPin, Globe, MessageCircle, Camera } from "lucide-react";

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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} />
                <span>123 Hope Street, New Delhi, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={18} />
                <span>hello@flowbegin.org</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)' }}>
              <a href="#" className="nav-link" style={{ display: 'inline-flex' }}><Globe size={24} /></a>
              <a href="#" className="nav-link" style={{ display: 'inline-flex' }}><MessageCircle size={24} /></a>
              <a href="#" className="nav-link" style={{ display: 'inline-flex' }}><Camera size={24} /></a>
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
