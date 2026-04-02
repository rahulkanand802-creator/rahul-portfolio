const services = [
  {
    title: 'Motion Design',
    detail: 'High-impact 2D/3D motion systems, titles, and transitions built for modern brand campaigns.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 12h16M12 4l8 8-8 8" />
      </svg>
    ),
  },
  {
    title: 'Video Editing',
    detail: 'Rhythm-first editing, cinematic pacing, and premium color finishing for social and branded content.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 6h16v12H4z" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    ),
  },
  {
    title: 'Ad & Reels Creative',
    detail: 'Platform-native assets designed for retention, conversion, and consistent brand tone at scale.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 5h12v14H6z" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: 'Explainer Storycraft',
    detail: 'Clear visual storytelling that turns complex ideas into concise, elegant, and memorable films.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 5h14v14H5z" />
        <path d="M9 8v8m3-6v6m3-4v4" />
      </svg>
    ),
  },
];

const projects = [
  {
    name: 'Desert Pulse Campaign',
    summary: 'Performance-focused ad suite featuring fast-cut edits, kinetic typography, and multi-format delivery for Meta and TikTok.',
    type: 'Social Ads • Campaign System',
  },
  {
    name: 'Aurora Brand Film',
    summary: 'Luxury-focused brand film combining cinematic editing, layered motion graphics, and refined color treatment.',
    type: 'Brand Film • Motion + Edit',
  },
  {
    name: 'FinEdge Explainer',
    summary: 'Narrative-led explainer that simplifies product complexity through thoughtful pacing and precision visual language.',
    type: 'Explainer • Story + Animation',
  },
  {
    name: 'Reels Growth Pack',
    summary: 'Repeatable short-form content engine with hook-first structures and reusable templates for weekly publishing.',
    type: 'Short-form • Reels System',
  },
  {
    name: 'AI Visual Concept Lab',
    summary: 'AI-assisted concept development and look-dev boards that accelerate pre-production and creative alignment.',
    type: 'AI Visual Development',
  },
];

function Section({ title, subtitle, children, className = '' }) {
  return (
    <section className={`fade-in rounded-3xl border border-white/10 bg-slate-900/65 p-6 shadow-glow backdrop-blur sm:p-8 ${className}`}>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/70">{title}</p>
        {subtitle ? <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{subtitle}</h2> : null}
      </div>
      {children}
    </section>
  );
}

function PortfolioHome() {
  return (
    <main className="relative overflow-hidden bg-mesh">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl gap-6 px-4 py-8 sm:gap-7 sm:px-6 sm:py-12 lg:gap-8 lg:px-8 lg:py-16">
        <section className="hero-glow fade-in relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-7 shadow-glow backdrop-blur sm:p-10 lg:p-12">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-cyan-300/10 to-transparent lg:block" />
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/85 sm:text-sm">Rahul • Motion Designer & Video Editor</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Cinematic motion and precision editing for brands that want to feel unforgettable.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I craft premium brand films, social campaigns, and explainers with a focus on rhythm, storytelling, and visual polish — built to move people and drive action.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#portfolio"
              className="rounded-xl border border-cyan-200/40 bg-cyan-300/15 px-6 py-3 text-sm font-semibold tracking-wide text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/25"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/35 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <Section title="About" subtitle="A personal note">
            <p className="leading-relaxed text-slate-300">
              I&apos;m Rahul, a motion designer and editor who loves making visuals feel intentional, emotional, and sharp. I blend cinematic timing with brand clarity so the work doesn&apos;t just look good — it communicates. Whether it&apos;s a fast-paced ad, a premium brand film, or an explainer, I care about the same thing in every frame: story first, craft always.
            </p>
          </Section>

          <Section title="Services" subtitle="What I can craft for you">
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-3 text-cyan-100">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-200/30 bg-cyan-200/10">
                      {service.icon}
                    </span>
                    <h3 className="font-medium text-white">{service.title}</h3>
                  </div>
                  <p className="mt-2 pl-12 text-sm leading-relaxed text-slate-300">{service.detail}</p>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section title="Featured Showreel" subtitle="Selected motion cuts">
          <p className="max-w-3xl text-slate-300">
            A curated reel of motion graphics, branded edits, and visual storytelling highlights.
          </p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/80 p-4 sm:p-6">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.12),transparent_45%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="group flex h-20 w-20 items-center justify-center rounded-full border border-cyan-100/40 bg-slate-950/70 text-cyan-100 transition duration-300 hover:scale-105 hover:bg-slate-900/80"
                >
                  <span className="ml-1 inline-block border-y-[10px] border-y-transparent border-l-[16px] border-l-cyan-100" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/65 px-4 py-3 text-sm">
                <span className="font-medium text-white">Replace with Vimeo or YouTube embed</span>
                <code className="text-xs text-cyan-200/80">&lt;iframe src="..." /&gt;</code>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Portfolio" subtitle="Case-study style highlights">
          <div id="portfolio" className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-white/[0.06]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/75">Project {index + 1}</p>
                <h3 className="mt-2 text-xl font-medium text-white">{project.name}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-emerald-200/85">{project.type}</p>
                <p className="mt-4 leading-relaxed text-slate-300">{project.summary}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Contact" subtitle="Let&apos;s create something premium">
          <div id="contact" className="space-y-5">
            <p className="max-w-3xl text-slate-300">
              If you&apos;re building a campaign, launching a product, or refreshing your brand visuals, I&apos;d love to collaborate. Let&apos;s make work that feels cinematic, intentional, and unmistakably yours.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <a href="mailto:hello@rahul.design" className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-200/35 hover:text-cyan-100">
                Email
                <span className="mt-1 block text-cyan-200/80">hello@rahul.design</span>
              </a>
              <a href="#" className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-200/35 hover:text-cyan-100">
                WhatsApp
                <span className="mt-1 block text-cyan-200/80">+971 XX XXX XXXX</span>
              </a>
              <a href="#" className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-200/35 hover:text-cyan-100">
                Social
                <span className="mt-1 block text-cyan-200/80">Behance / Instagram / LinkedIn</span>
              </a>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}

export default function Home() {
  return <PortfolioHome />;
}
