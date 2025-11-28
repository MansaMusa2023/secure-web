export default function HomePage() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Home Lab · Security · Automation</p>
          <h1 className="hero-title">Emiliano&nbsp;Aguero</h1>
          <p className="hero-subtitle">
            Securing networks, building resilient services, and running
            a modern home lab on Fedora, Docker, and WireGuard.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn ghost">
              Contact
            </a>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="section-inner">
          <h2>About</h2>
          <p>
            I&apos;m a security-focused engineer running a hardened Fedora server,
            Dockerized services, and a private WireGuard VPN. This site is served
            from my own infrastructure, reverse-proxied through nginx with TLS
            termination and strict firewall rules.
          </p>
          <p>
            I care about defense-in-depth, observability, and building systems
            that are easy to secure and maintain over the long term.
          </p>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="section-inner">
          <h2>Focus Areas</h2>
          <div className="card-grid">
            <article className="card">
              <h3>System Hardening</h3>
              <ul>
                <li>Fedora server hardening (SSH, auditd, sysctl, firewalld)</li>
                <li>systemd service sandboxing</li>
                <li>Least-privilege and attack-surface reduction</li>
              </ul>
            </article>
            <article className="card">
              <h3>Network & Access</h3>
              <ul>
                <li>WireGuard VPN for remote access</li>
                <li>nginx reverse proxy with TLS (Let&apos;s Encrypt)</li>
                <li>Home network segmentation & monitoring</li>
              </ul>
            </article>
            <article className="card">
              <h3>Applications</h3>
              <ul>
                <li>Dockerized web apps (Next.js + Postgres + Prisma)</li>
                <li>Secure-by-default app configuration</li>
                <li>Logging, metrics, and health checks</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-inner">
          <h2>Projects</h2>
          <div className="card-grid">
            <article className="card">
              <h3>Secure Home Server</h3>
              <p>
                Hardened Fedora host with SSH key-only auth, systemd sandboxing
                for services, firewall rules, and audit logging. All exposed
                services terminate TLS and sit behind a reverse proxy.
              </p>
              <p className="meta">
                Stack: Fedora · nginx · Docker · WireGuard
              </p>
            </article>
            <article className="card">
              <h3>Self-Hosted Web Stack</h3>
              <p>
                Next.js app running in Docker with Postgres and Prisma. Traffic
                flows through nginx with Let&apos;s Encrypt certificates and HTTP
                to HTTPS enforcement.
              </p>
              <p className="meta">
                Stack: Next.js · Postgres · Prisma · Docker
              </p>
            </article>
            <article className="card">
              <h3>Security Automation Lab</h3>
              <p>
                Experimenting with log collection, basic intrusion detection,
                and automated hardening checks across services and containers.
              </p>
              <p className="meta">
                Stack: Linux · systemd · scripting
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="section-inner">
          <h2>Contact</h2>
          <p>
            Want to talk about security, home labs, or infrastructure?
            You can reach me at:
          </p>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@emilianoaguero.com">
                contact@emilianoaguero.com
              </a>
            </li>
          </ul>
          <p className="small">
            This site is self-hosted. Latency or downtime probably means I&apos;m
            tweaking something in the lab.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Emiliano Aguero. Self-hosted & secured.</p>
        </div>
      </footer>
    </main>
  );
}
