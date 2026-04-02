import { motion } from 'framer-motion';

const services = [
  'Motion Graphics',
  'Video Editing',
  'Social Media Ads',
  'Brand Animations',
  'Explainer Videos',
  'AI-assisted Visual Development',
];

const projects = [
  {
    name: 'Desert Pulse Campaign',
    summary: 'Performance-focused social ad suite with fast-cut edits, motion typography, and platform-native versions.',
    type: 'Social Media Ads · Meta + TikTok',
  },
  {
    name: 'Aurora Brand Film',
    summary: 'Premium branded video blending 2D/3D motion graphics, transitions, and cinematic color treatment.',
    type: 'Branded Video · Motion + Editing',
  },
  {
    name: 'FinEdge Explainer',
    summary: 'Narrative-driven explainer video designed to simplify complex product flows with clear visual storytelling.',
    type: 'Explainer Video · Storyboarding + Animation',
  },
  {
    name: 'Reels Growth Pack',
    summary: 'Weekly reel system with hook-first edits, dynamic captions, and reusable templates for consistent output.',
    type: 'Short-form Reels · Content Engine',
  },
  {
    name: 'AI Visual Concept Lab',
    summary: 'AI-assisted concept frames and visual development to accelerate look-dev before final animation production.',
    type: 'AI-assisted Visuals · Creative Development',
  },
];

function Section({ title, children, delay = 0, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-glow backdrop-blur sm:p-7 ${className}`}
    >
      <h2 className="mb-5 text-lg font-semibold tracking-wide text-cyan-200">{title}</h2>
      {children}
    </motion.section>
  );
}

function PortfolioHome() {
  return (
    <main className="relative overflow-hidden bg-mesh">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/70 to-slate-950" />
      <div className="relative mx-auto grid min-h-screen max-w-6xl gap-6 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-7 lg:px-8 lg:py-16">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur sm:p-10"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Rahul • Dubai</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Cinematic motion, precision editing, and visual storytelling crafted for modern brands.
          </h1>
          <p className="mt-6 max-w-3xl text-slate-300">
            I&apos;m a motion designer, animator, video editor, and AI-assisted creative based in Dubai — producing
            premium branded content, social ads, and explainer films designed to move audiences and drive results.
          </p>
        </motion.section>

        <Section title="About" delay={0.05}>
          <p className="leading-relaxed text-slate-300">
            I shape ideas into clear visual stories through motion design, animation systems, and intentional editing.
            From concept to final delivery, I focus on rhythm, pacing, and composition so every frame communicates
            with clarity while keeping the work elegant, modern, and memorable.
          </p>
        </Section>

        <Section title="Services" delay={0.1}>
          <ul className="space-y-2.5 text-slate-200">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                {service}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Featured Showreel" delay={0.15} className="md:col-span-2">
          <p className="max-w-3xl text-slate-300">
            A curated reel of motion graphics, brand animations, ad edits, and AI-assisted visual concepts.
          </p>
          <div className="mt-5 aspect-video w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
            <div className="flex h-full items-center justify-center rounded-xl border border-cyan-300/20 bg-slate-950/60 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Showreel Placeholder</p>
                <p className="mt-2 text-slate-300">Embed Vimeo / YouTube reel here</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Portfolio" delay={0.2} className="md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div key={project.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-medium text-white">{project.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-emerald-300">{project.type}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.summary}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Contact" delay={0.25} className="md:col-span-2">
          <p className="text-slate-300">Let&apos;s create visuals that feel premium, cinematic, and unmistakably on-brand.</p>
          <a
            href="mailto:hello@rahul.design"
            className="mt-4 inline-block rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 font-medium text-cyan-100 transition hover:bg-cyan-300/20"
          >
            hello@rahul.design
          </a>
        </Section>
      </div>
    </main>
  );
}

export default function Home() {
  return <PortfolioHome />;
}
