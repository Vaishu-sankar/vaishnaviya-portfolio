import React, { useState, useEffect } from 'react';
import './App.css';

const NAV_LINKS = ['Skills', 'Experience', 'Projects', 'About', 'Contact'];

const SKILLS = [
  {
    icon: '☁️', title: 'Cloud Platforms',
    tags: ['AWS EC2', 'S3', 'IAM', 'VPC', 'CloudWatch', 'Security Groups', 'Azure Basics', 'GCP Basics']
  },
  {
    icon: '🛡️', title: 'Cloud Security',
    tags: ['IAM Policy Design', 'RBAC', 'VPC Architecture', 'S3 Security', 'Least Privilege', 'Misconfiguration Review']
  },
  {
    icon: '🔍', title: 'Security Operations',
    tags: ['SOC Monitoring', 'Alert Triage', 'SIEM (Securonix)', 'Incident Response', 'Log Correlation', 'Phishing Investigation']
  },
  {
    icon: '🔧', title: 'Security Tools',
    tags: ['Nmap', 'Wireshark', 'Maltego', 'Burp Suite', 'Microsoft Defender', 'Kali Linux']
  },
  {
    icon: '📋', title: 'GRC & Compliance',
    tags: ['ISO 27001', 'NIST Framework', 'Risk Classification', 'Vulnerability Assessment', 'GRC']
  },
  {
    icon: '💻', title: 'Development',
    tags: ['Node.js', 'React.js', 'MongoDB', 'JWT Auth', 'OWASP Top 10', 'REST APIs']
  },
];

const EXPERIENCE = [
  {
    period: 'Jan 2026 – Present',
    role: 'Cybersecurity Analyst & Cloud Computing Trainee',
    company: 'Zenjade Automation Technology Pvt. Ltd.',
    location: 'Chennai',
    points: [
      'Perform cloud security tasks on AWS — reviewing IAM policies, VPC security groups, and S3 bucket permissions to prevent misconfigurations',
      'Monitor security alerts via SOC workflows; perform alert triage using SIEM (Securonix) with log correlation techniques',
      'Conduct incident response: identifying, containing, and documenting security incidents with risk classification (Low–Critical)',
      'Investigate phishing emails through header analysis, URL inspection, and sandbox behavior review',
      'Apply vulnerability assessment using Nmap — identify open ports, exposed services, and remediation steps',
      'Apply GRC compliance frameworks — ISO 27001 and NIST — to security policy understanding',
    ]
  },
  {
    period: 'Jun 2024 – Feb 2025',
    role: 'MERN Stack Developer Intern',
    company: 'Osiz Technologies Pvt. Ltd.',
    location: 'Madurai',
    points: [
      'Built secure web applications with JWT-based authentication, RBAC authorization, and OWASP Top 10 awareness',
      'Deployed applications with API security best practices — input validation, secure headers, and authentication flows',
      'Gained strong application security foundation directly applicable to cloud-native and DevSecOps environments',
    ]
  },
];

const PROJECTS = [
  {
    icon: '☁️',
    colorClass: 'proj-aws',
    title: 'Enterprise Cloud-Based Web Application',
    type: '// AWS · Cloud Security',
    desc: 'Designed and deployed a secure, scalable application on AWS. Implemented network segmentation (public/private subnets), RBAC access control, and CloudWatch monitoring with least-privilege IAM policies.',
    stack: ['AWS EC2', 'S3', 'IAM', 'VPC', 'CloudWatch', 'Node.js', 'React.js', 'MySQL']
  },
  {
    icon: '🔍',
    colorClass: 'proj-soc',
    title: 'Real-Time Threat Detection & GRC System',
    type: '// SOC · Compliance',
    desc: 'Full SOC dashboard with real-time threat detection, alert generation, and severity classification. Integrated ISO 27001 and NIST compliance tracking with audit logging and incident history.',
    stack: ['Node.js', 'React.js', 'MongoDB', 'JWT', 'REST APIs', 'ISO 27001', 'NIST']
  },
  {
    icon: '🕵️',
    colorClass: 'proj-nmap',
    title: 'Network Scanning & Enumeration',
    type: '// Offensive Security · Ethical Hacking',
    desc: 'Conducted host discovery, port scanning, and service fingerprinting using Nmap. Identified attack surface risks, documented findings, and recommended firewall and patch remediation steps.',
    stack: ['Nmap', 'Kali Linux', 'Wireshark']
  },
];

const CERTS = [
  'Cybersecurity Analyst & Cloud Computing Training — Zenjade Automation Technology Pvt. Ltd. (Jan 2026 – Present)',
  'Hands-on Labs: SOC Monitoring, SIEM Analysis, Cloud IAM, Network Scanning — via structured training program',
  'TryHackMe / HackTheBox — SOC & Ethical Hacking Practice Labs',
  'Practical knowledge of Microsoft Defender for endpoint threat monitoring',
  'GRC Frameworks: ISO 27001 & NIST applied to security policy understanding',
];

function TerminalWidget() {
  const lines = [
    { type: 'comment', text: '# Profile loaded' },
    { type: 'kv', key: 'name', val: '"Vaishnaviya Sankar"', valColor: 'str' },
    { type: 'kv', key: 'role', val: '"Cloud Security Engineer"', valColor: 'str' },
    { type: 'kv', key: 'location', val: '"Tamil Nadu, IN"', valColor: 'str' },
    { type: 'blank' },
    { type: 'comment', text: '# Current stack' },
    { type: 'kv', key: 'cloud', val: '[AWS, Azure, GCP]', valColor: 'val' },
    { type: 'kv', key: 'soc', val: '[SIEM, Securonix]', valColor: 'val' },
    { type: 'kv', key: 'tools', val: '[Nmap, Wireshark]', valColor: 'val' },
    { type: 'kv', key: 'compliance', val: '[ISO27001, NIST]', valColor: 'val' },
    { type: 'blank' },
    { type: 'status', key: 'status', val: 'open_to_work' },
  ];

  return (
    <div className="hero-terminal">
      <div className="terminal-bar">
        <div className="t-dot t-red" /><div className="t-dot t-yellow" /><div className="t-dot t-green" />
        <span className="terminal-title">vaishnaviya@security:~</span>
      </div>
      <div className="terminal-body">
        {lines.map((l, i) => {
          if (l.type === 'blank') return <div key={i}>&nbsp;</div>;
          if (l.type === 'comment') return <div key={i} className="t-comment">{l.text}</div>;
          if (l.type === 'kv') return (
            <div key={i}>
              <span className="t-key">{l.key}</span>: <span className={l.valColor === 'str' ? 't-str' : 't-val'}>{l.val}</span>
            </div>
          );
          if (l.type === 'status') return (
            <div key={i}>
              <span className="t-key">{l.key}</span>: <span className="t-val">{l.val}</span> <span className="t-cursor" />
            </div>
          );
          return null;
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="app">
      {/* NAV */}
      <nav className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="nav-logo">VS<span className="accent">_</span>PORTFOLIO</div>
        <ul className="nav-links">
          {NAV_LINKS.map(n => (
            <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-content">
          <div className="hero-tag">Cloud Security Engineer · SOC Analyst</div>
          <h1 className="hero-name">Vaishnaviya Sankar</h1>
          <p className="hero-sub">// AWS · SOC · IAM · SIEM · Incident Response</p>
          <p className="hero-desc">Cybersecurity & Cloud professional specialising in threat detection, AWS cloud hardening, and SOC operations. Building secure cloud environments one policy at a time.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="stats-row">
            {[['3+', 'Projects'], ['2+', 'Years in Tech'], ['10+', 'Core Skills']].map(([v, l]) => (
              <div key={l} className="stat">
                <div className="stat-val">{v}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <TerminalWidget />
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" className="section bg2">
        <div className="section-label">Competencies</div>
        <h2 className="section-title">Core <span className="accent">Skills</span></h2>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <div key={s.title} className="skill-card">
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <div className="skill-tags">
                {s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="section-label">Work History</div>
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          {EXPERIENCE.map(e => (
            <div key={e.company} className="exp-item">
              <div className="exp-meta">
                <div className="period">{e.period}</div>
                <div>{e.role}</div>
                <div className="location">📍 {e.location}</div>
              </div>
              <div className="exp-body">
                <h3>{e.role}</h3>
                <div className="company">{e.company}</div>
                <ul>
                  {e.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projects" className="section bg2">
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div key={p.title} className="project-card">
              <div className={`project-img ${p.colorClass}`}>
                <span className="project-icon">{p.icon}</span>
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <div className="project-type">{p.type}</div>
                <p>{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map(t => <span key={t} className="stack-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-label">Background</div>
        <h2 className="section-title">About <span className="accent">Me</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I'm a Cybersecurity and Cloud Computing professional with a rare combination of cloud infrastructure and security operations experience. Based in Tamil Nadu, I bring hands-on skills in AWS cloud hardening, SOC monitoring, SIEM-based threat detection, and GRC compliance.</p>
            <p>My background in Forensic Science gave me sharp analytical thinking and investigation methods — skills that translate directly into threat analysis and incident response workflows.</p>
            <p>I've built production-grade projects spanning cloud-secure web apps to real-time SOC dashboards, and I'm passionate about Tamil Nadu's fast-growing tech ecosystem.</p>
            <div style={{ marginTop: '2rem' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Education</div>
              <div className="edu-card">
                <h4>B.Sc. in Forensic Science</h4>
                <p>Srinivasan College of Arts and Science, Perambalur · Jul 2020 – May 2023</p>
                <p style={{ marginTop: '0.4rem', opacity: 0.6 }}>Analytical thinking & forensic investigation → transferable to threat analysis</p>
              </div>
            </div>
          </div>
          <div className="about-highlight">
            <div className="section-label">Certifications & Training</div>
            <div className="certs-list">
              {CERTS.map((c, i) => (
                <div key={i} className="cert-item">
                  <div className="cert-dot" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" className="section bg2 text-center">
        <div className="contact-inner">
          <div className="section-label">Let's Connect</div>
          <h2 className="section-title">Get in <span className="accent">Touch</span></h2>
          <p className="contact-desc">Open to Cloud Security Engineer, Security Operations, and Cloud + SOC hybrid roles in Tamil Nadu's growing tech ecosystem. Let's talk.</p>
          <div className="contact-links">
            <a href="tel:+917868938255" className="contact-link">📞 +91-7868938255</a>
            <a href="mailto:vaishnaviya.s@gmail.com" className="contact-link">✉️ vaishnaviya.s@gmail.com</a>
            <a href="https://linkedin.com/in/vaishnaviya-sankar-483994247" target="_blank" rel="noreferrer" className="contact-link">🔗 LinkedIn</a>
            <span className="contact-link">📍 Madurai, Tamil Nadu</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        Built with ❤️ by <span className="accent">Vaishnaviya Sankar</span> · Cloud Security Engineer · Tamil Nadu, India
      </footer>
    </div>
  );
}
