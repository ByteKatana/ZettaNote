import Feature from '../Feature';
import { IoOptions } from 'react-icons/io5';

const Features = () => {
  return (
    <div>
      <section className="features-section second max-w-6xl mx-auto mt-12">
        <h2 className="text-5xl font-semibold text-secondary flex items-center gap-3">
          <IoOptions />
          <span className="mb-2"> Core features</span>
        </h2>
        <p className="mt-2 text-sm text-[color:var(--color-neutral-content)] max-w-2xl">
          Designed for writers, students and developers — minimal UI, fast editor and safe sharing.
        </p>
        <div className="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="feature-item">
            <Feature
              icon={'🗒️'}
              title="Private notes"
              desc="Create, edit, rename, and organize your notes with full privacy. Your thoughts stay yours until you decide to share."
            />
          </div>
          <div className="feature-item">
            <Feature
              icon={'🔗'}
              title="Secure sharing"
              desc="Generate read-only public links to share specific notes. No account required for readers, full control for you."
            />
          </div>
          <div className="feature-item">
            <Feature
              icon={'✍️'}
              title="Rich markdown editor"
              desc="Write with a clean, distraction-free editor. Markdown support, autosave, and real-time preview for seamless note-taking."
            />
          </div>
          <div className="feature-item">
            <Feature
              icon={'🔐'}
              title="Secure authentication"
              desc="Email/password authentication with secure session management. Change passwords, manage accounts, and delete data anytime."
            />
          </div>
          <div className="feature-item">
            <Feature
              icon={'👥'}
              title="Admin dashboard"
              desc="Comprehensive admin tools for user management, analytics, moderation, and system insights. Built for scalability."
            />
          </div>
          <div className="feature-item">
            <Feature
              icon={'🚀'}
              title="Modern architecture"
              desc="Vite + React frontend, Node.js + MongoDB backend. Fast loading, responsive design, and developer-friendly codebase."
            />
          </div>
          <div className="feature-item">
            <Feature
              icon={'🌐'}
              title="Open source"
              desc="MIT licensed and community-driven. Fork, contribute, customize, or learn from the complete source code on GitHub."
            />
          </div>
          <div className="feature-item">
            <Feature
              icon={'📱'}
              title="Responsive design"
              desc="Works beautifully on desktop, tablet, and mobile. Dark/light themes with smooth transitions and accessible UI."
            />
          </div>
          <div className="feature-item">
            <Feature
              icon={'🔄'}
              title="Version control"
              desc="Track changes, save drafts, and maintain edit history. Never lose your work with automatic backups and versioning."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
