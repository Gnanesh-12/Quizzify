// src/pages/LandingPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

// ─── Animated counter hook ───────────────────────────────────────────────────
const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

// ─── Feature cards data ───────────────────────────────────────────────────────
const features = [
  {
    icon: '🎓',
    title: 'For Educators',
    description:
      'Create rich multi-question quizzes in minutes, set time limits, and distribute them instantly via a unique code — no setup required.',
    accent: '#6366f1',
  },
  {
    icon: '📚',
    title: 'For Students',
    description:
      'Join any quiz with a single code, attempt in a distraction-free interface, and receive detailed score breakdowns the moment you submit.',
    accent: '#0ea5e9',
  },
  {
    icon: '📊',
    title: 'Instant Analytics',
    description:
      'Beautiful visual charts reveal class-wide performance trends, question-level accuracy, and individual student progress at a glance.',
    accent: '#10b981',
  },
  {
    icon: '🔐',
    title: 'Secure & Reliable',
    description:
      'JWT-based authentication and role-based access control ensure that student and teacher data stays safe at every step.',
    accent: '#f59e0b',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Powered by React 19 and Vite, the platform loads instantly and responds without lag — even on slower school networks.',
    accent: '#ec4899',
  },
  {
    icon: '📱',
    title: 'Works Everywhere',
    description:
      'Fully responsive across desktops, tablets, and phones — students can attempt quizzes on any device they have available.',
    accent: '#8b5cf6',
  },
];

// ─── How-it-works steps ───────────────────────────────────────────────────────
const steps = [
  { number: '01', role: 'Teacher', action: 'Create a Quiz', detail: 'Log in, hit "New Quiz", fill in the details and add your questions.' },
  { number: '02', role: 'Teacher', action: 'Share the Code', detail: 'Share the auto-generated quiz code with your class via chat or board.' },
  { number: '03', role: 'Student', action: 'Join & Attempt', detail: 'Students enter the code, complete the quiz, and submit — all in one flow.' },
  { number: '04', role: 'Both', action: 'Review Results', detail: 'Detailed analytics are available instantly for teachers and students alike.' },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "Quizzify turned our boring revision sessions into something students actually look forward to. Results visible instantly — brilliant.",
    name: 'Dr. Priya Sharma',
    role: 'Professor of Computer Science',
    org: 'Amrita School of Engineering',
    initials: 'PS',
    color: '#6366f1',
  },
  {
    quote: "I used to dread pop quizzes. Now it takes our teacher two minutes to set one up and we see our scores before we even leave the classroom.",
    name: 'Arjun Reddy',
    role: 'B.Tech 3rd Year Student',
    org: 'VIT Vellore',
    initials: 'AR',
    color: '#0ea5e9',
  },
  {
    quote: "The analytics dashboard gives me exactly the kind of data I need to decide which topics need more attention next week.",
    name: 'Ms. Kavitha Nair',
    role: 'Mathematics Faculty',
    org: 'Presidency College, Chennai',
    initials: 'KN',
    color: '#10b981',
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const LandingPage = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stats intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const students = useCounter(12000, 2200, statsVisible);
  const quizzes = useCounter(3500, 2000, statsVisible);
  const schools = useCounter(80, 1800, statsVisible);

  return (
    <div className="lp-root">

      {/* ── Gradient background blobs ── */}
      <div className="lp-blobs" aria-hidden="true">
        <div className="lp-blob lp-blob-1" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
        <div className="lp-blob lp-blob-2" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
        <div className="lp-blob lp-blob-3" style={{ transform: `translateY(${scrollY * 0.08}px)` }} />
      </div>

      {/* ══════════════════════════════════════════
          HERO
      ════════════════════════════════════════════ */}
      <section className="lp-hero">
        <div className="lp-hero-content">
          <div className="lp-badge">
            <span className="lp-badge-dot" />
            Trusted by 80+ schools &amp; colleges across India
          </div>

          <h1 className="lp-hero-title">
            The Smarter Way to<br />
            <span className="lp-gradient-text">Quiz Your Class</span>
          </h1>

          <p className="lp-hero-subtitle">
            Quizzify gives educators instant quiz creation and gives students a
            seamless assessment experience — all with real-time analytics built in.
          </p>

          <div className="lp-hero-ctas">
            <Link to="/register" id="hero-get-started-btn" className="lp-btn lp-btn-primary">
              Get Started Free
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
            <Link to="/login" id="hero-login-btn" className="lp-btn lp-btn-ghost">
              I have an account
            </Link>
          </div>

          {/* Trust badges */}
          <div className="lp-trust-row">
            <span className="lp-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
              No credit card required
            </span>
            <span className="lp-trust-sep">·</span>
            <span className="lp-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
              Free for students
            </span>
            <span className="lp-trust-sep">·</span>
            <span className="lp-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18z" /></svg>
              Instant results
            </span>
          </div>
        </div>

        {/* Hero visual */}
        <div className="lp-hero-visual">
          <div className="lp-mockup">
            <div className="lp-mockup-header">
              <span /><span /><span />
              <span className="lp-mockup-title">Quizzify</span>
            </div>
            <div className="lp-mockup-body">
              <div className="lp-mock-quiz-title">📝 Data Structures — Mid-Sem</div>
              <div className="lp-mock-progress">
                <div className="lp-mock-progress-label">
                  <span>Question 3 of 10</span>
                  <span className="lp-mock-timer">⏱ 4:32</span>
                </div>
                <div className="lp-mock-bar"><div className="lp-mock-bar-fill" /></div>
              </div>
              <div className="lp-mock-question">Which data structure uses LIFO order?</div>
              <div className="lp-mock-options">
                {['Queue', 'Stack', 'Linked List', 'Heap'].map((opt, i) => (
                  <div key={opt} className={`lp-mock-option${i === 1 ? ' lp-mock-option--selected' : ''}`}>
                    <span className="lp-mock-opt-letter">{String.fromCharCode(65 + i)}</span>
                    {opt}
                  </div>
                ))}
              </div>
              <div className="lp-mock-footer">
                <button className="lp-mock-btn" type="button">← Previous</button>
                <button className="lp-mock-btn lp-mock-btn--active" type="button">Next →</button>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="lp-float-card lp-float-card--top">
            <span>🎉</span>
            <div>
              <div className="lp-float-card-title">Quiz Submitted!</div>
              <div className="lp-float-card-sub">Score: 9/10 — Excellent</div>
            </div>
          </div>
          <div className="lp-float-card lp-float-card--bottom">
            <span>📈</span>
            <div>
              <div className="lp-float-card-title">Class Average</div>
              <div className="lp-float-card-sub">78% · 32 students</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAND
      ════════════════════════════════════════════ */}
      <section className="lp-stats-band" ref={statsRef}>
        <div className="lp-stats-inner">
          <div className="lp-stat">
            <div className="lp-stat-number">{students.toLocaleString()}+</div>
            <div className="lp-stat-label">Students Assessed</div>
          </div>
          <div className="lp-stat-divider" />
          <div className="lp-stat">
            <div className="lp-stat-number">{quizzes.toLocaleString()}+</div>
            <div className="lp-stat-label">Quizzes Created</div>
          </div>
          <div className="lp-stat-divider" />
          <div className="lp-stat">
            <div className="lp-stat-number">{schools}+</div>
            <div className="lp-stat-label">Institutions Using Quizzify</div>
          </div>
          <div className="lp-stat-divider" />
          <div className="lp-stat">
            <div className="lp-stat-number">100%</div>
            <div className="lp-stat-label">Free for Students</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURES
      ════════════════════════════════════════════ */}
      <section className="lp-section lp-features-section">
        <div className="lp-section-header">
          <div className="lp-section-eyebrow">Everything you need</div>
          <h2 className="lp-section-title">Built for the Classroom</h2>
          <p className="lp-section-subtitle">
            Every feature is crafted around how real classrooms actually work —
            quick setup, minimal friction, and actionable feedback.
          </p>
        </div>
        <div className="lp-features-grid">
          {features.map((f, i) => (
            <div key={f.title} className="lp-feature-card" style={{ '--accent': f.accent, animationDelay: `${i * 0.08}s` }}>
              <div className="lp-feature-icon" style={{ background: `${f.accent}18` }}>
                <span>{f.icon}</span>
              </div>
              <h3 className="lp-feature-title">{f.title}</h3>
              <p className="lp-feature-desc">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════ */}
      <section className="lp-section lp-hiw-section">
        <div className="lp-hiw-inner">
          <div className="lp-section-header lp-section-header--light">
            <div className="lp-section-eyebrow lp-section-eyebrow--light">Simple workflow</div>
            <h2 className="lp-section-title lp-section-title--light">From Zero to Graded in Minutes</h2>
            <p className="lp-section-subtitle lp-section-subtitle--light">
              No lengthy onboarding. No complex configuration. Just create, share, attempt, and review.
            </p>
          </div>
          <div className="lp-hiw-steps">
            {steps.map((s, i) => (
              <div key={s.number} className="lp-hiw-step">
                <div className="lp-hiw-step-num">{s.number}</div>
                <div className="lp-hiw-connector" aria-hidden="true" />
                <div className="lp-hiw-step-body">
                  <div className="lp-hiw-role">{s.role}</div>
                  <div className="lp-hiw-action">{s.action}</div>
                  <div className="lp-hiw-detail">{s.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════ */}
      <section className="lp-section lp-testimonials-section">
        <div className="lp-section-header">
          <div className="lp-section-eyebrow">What educators say</div>
          <h2 className="lp-section-title">Loved by Classrooms Across India</h2>
        </div>
        <div className="lp-testimonials-wrapper">
          <div className="lp-testimonials-stage">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`lp-testimonial-card${i === activeTestimonial ? ' lp-testimonial-card--active' : ''}`}
                role="article"
              >
                <div className="lp-testimonial-quote">"{t.quote}"</div>
                <div className="lp-testimonial-author">
                  <div className="lp-testimonial-avatar" style={{ background: t.color }}>{t.initials}</div>
                  <div>
                    <div className="lp-testimonial-name">{t.name}</div>
                    <div className="lp-testimonial-role">{t.role} · {t.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lp-testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`lp-testimonial-dot${i === activeTestimonial ? ' lp-testimonial-dot--active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ROLE SPLIT — WHO IS IT FOR
      ════════════════════════════════════════════ */}
      <section className="lp-section lp-roles-section">
        <div className="lp-roles-grid">
          <div className="lp-role-card lp-role-card--teacher">
            <div className="lp-role-icon">🧑‍🏫</div>
            <h3 className="lp-role-title">I'm an Educator</h3>
            <p className="lp-role-desc">
              Build quizzes, track individual and class-wide performance, and cut your grading time to zero.
            </p>
            <ul className="lp-role-list">
              <li>Create unlimited quizzes</li>
              <li>Real-time class leaderboard</li>
              <li>Export quiz results</li>
              <li>Question bank &amp; repository</li>
            </ul>
            <Link to="/register?role=teacher" id="teacher-register-btn" className="lp-btn lp-btn-primary lp-btn--full">
              Start as Teacher →
            </Link>
          </div>

          <div className="lp-role-card lp-role-card--student">
            <div className="lp-role-icon">🧑‍🎓</div>
            <h3 className="lp-role-title">I'm a Student</h3>
            <p className="lp-role-desc">
              Join any quiz in seconds, get instant feedback, and track how your performance improves over time.
            </p>
            <ul className="lp-role-list">
              <li>Join with a single code</li>
              <li>Instant score &amp; feedback</li>
              <li>Performance history</li>
              <li>Works on any device</li>
            </ul>
            <Link to="/register?role=student" id="student-register-btn" className="lp-btn lp-btn-outline-student lp-btn--full">
              Join as Student →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════ */}
      <section className="lp-cta-banner">
        <div className="lp-cta-banner-content">
          <h2 className="lp-cta-title">Ready to Transform Your Classroom?</h2>
          <p className="lp-cta-sub">
            Join thousands of educators and students already using Quizzify. Setup takes under 2 minutes.
          </p>
          <div className="lp-cta-btns">
            <Link to="/register" id="footer-cta-btn" className="lp-btn lp-btn-white">
              Create a Free Account
            </Link>
            <Link to="/login" id="footer-login-btn" className="lp-btn lp-btn-ghost-white">
              Sign In
            </Link>
          </div>
        </div>
        <div className="lp-cta-deco" aria-hidden="true">
          <span>🧠</span><span>📝</span><span>🎓</span><span>📊</span>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-brand">
            <span className="lp-footer-logo">Quizzify</span>
            <span className="lp-footer-tagline">Smart assessments for modern classrooms.</span>
          </div>
          <div className="lp-footer-links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
        <div className="lp-footer-copy">© {new Date().getFullYear()} Quizzify. Made with ❤️ for education.</div>
      </footer>

    </div>
  );
};

export default LandingPage;