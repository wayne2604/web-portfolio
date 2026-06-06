import { Mail, ArrowUp, Heart } from 'lucide-react';
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaThreads,
  FaSlack,
} from 'react-icons/fa6';
import './styles/Footer.css';

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

const navigation = [
  {
    name: 'Navigate',
    items: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'What I Do', href: '#whatido' },
    ],
  },
  {
    name: 'Work',
    items: [
      { name: 'Projects', href: '#work' },
      { name: 'Career', href: '#career' },
      { name: 'Tech Stack', href: '#techstack' },
    ],
  },
  {
    name: 'Connect',
    items: [
      { name: 'Contact', href: '#contact' },
      { name: 'Resume', href: '/CV/CV - RHETT WAYNE MANUBAG.pdf' },
      { name: 'Email', href: 'mailto:rmanubag308@gmail.com' },
    ],
  },
];

const socialLinks = [
  { name: 'Email', href: 'mailto:rmanubag308@gmail.com', icon: Mail },
  { name: 'GitHub', href: 'https://github.com/wayne2604', icon: FaGithub },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1CfGPicueW/?mibextid=wwXIfr', icon: FaFacebook },
  { name: 'Instagram', href: 'https://www.instagram.com/wayneer26?igsh=cGp0dzh3cjh5ZTJu&utm_source=qr', icon: FaInstagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rhett-wayne-manubag-207654319/', icon: FaLinkedin },
  { name: 'YouTube', href: 'https://www.youtube.com/@rwsgaming5534', icon: FaYoutube },
  { name: 'TikTok', href: 'https://www.tiktok.com/@tamad_naartist', icon: FaTiktok },
  { name: 'Threads', href: 'https://www.threads.net/@wayneer26', icon: FaThreads },
  { name: 'Slack', href: 'https://join.slack.com/t/tech-udv9610/shared_invite/zt-40j60ersw-SXMBRTDBmA3a9IiOxbOjnQ', icon: FaSlack },
];

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      {/* Top Section: Logo/description + nav grid */}
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/logo-rwm.svg" alt="RWM" style={{ height: "28px" }} />
          <p className="footer-description">
            A passionate full-stack developer dedicated to crafting dynamic web applications
            and delivering seamless user experiences. I transform ideas into compelling digital
            products that make an impact. Let's build something extraordinary together.
          </p>
        </div>
      </div>

      <div className="footer-divider" />

      {/* Navigation Links Grid */}
      <div className="footer-nav-grid">
        {navigation.map((section) => (
          <div key={section.name} className="footer-nav-section">
            <h4 className="footer-nav-heading">{section.name}</h4>
            <ul className="footer-nav-list">
              {section.items.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="footer-nav-link"
                    target={item.href.startsWith('http') || item.href.startsWith('/CV') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-divider" />

      {/* Social Icons + Scroll Top */}
      <div className="footer-social-row">
        <div className="footer-social-icons">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              aria-label={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="footer-social-link"
            >
              <link.icon style={{ width: 20, height: 20 }} />
            </a>
          ))}
        </div>

        <div className="footer-scroll-top-wrap">
          <button
            className="footer-scroll-top"
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            data-cursor="disable"
          >
            <ArrowUp size={14} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <span>© {new Date().getFullYear()}</span>
        <span className="footer-copyright-sep">·</span>
        <span>Made with</span>
        <Heart size={14} className="footer-heart" />
        <span>by</span>
        <a
          href="https://github.com/wayne2604"
          target="_blank"
          rel="noreferrer"
          className="footer-copyright-name"
        >
          Rhett Wayne Manubag
        </a>
      </div>
    </footer>
  );
};

export default Footer;
