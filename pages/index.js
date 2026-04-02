import { motion } from 'framer-motion';

const services = ['Brand & Visual Direction', 'UI/UX Design', 'Front-End Development'];

const projects = [
  {
    name: 'Luma Commerce',
    summary: 'Headless storefront redesign focused on conversion and speed.',
    metric: '+41% checkout completion',
  },
  {
    name: 'Nova Studio',
    summary: 'Interactive marketing site with a cinematic launch sequence.',
    metric: '2.3x longer session duration',
  },
  {
    name: 'Pulse Health',
    summary: 'Accessible patient dashboard with role-based UX personalization.',
    metric: '38% drop in support tickets',
  },
];

function Section({ title, children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-glow backdrop-blur"
    >
      <h2 className="mb-4 text-lg font-semibold tracking-wide text-cyan-200">{title}</h2>
      {children}
    </motion.section>
  );
}

function PortfolioHome() {
  return (
    <main className="relative overflow-hidden bg-mesh">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950" />
      <div className="relative mx-auto grid min-h-screen max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Rahul Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Designing premium digital products with clarity, motion, and intent.
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            I help ambitious brands craft modern interfaces that feel cinematic and convert at scale.
          </p>
        </motion.section>

        <Section title="About" delay={0.05}>
          <p className="leading-relaxed text-slate-300">
            I&apos;m Rahul, a multidisciplinary creative focused on clean systems, expressive visuals, and
            performant front-end development.
          </p>
        </Section>

        <Section title="Services" delay={0.1}>
          <ul className="space-y-2 text-slate-200">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                {service}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Showreel" delay={0.15}>
          <p className="text-slate-300">Selected interaction systems and motion direction from recent launches.</p>
          <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-300">
            Layered transitions, fluid micro-interactions, and immersive scroll narratives.
          </div>
        </Section>

        <Section title="Portfolio" delay={0.2}>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-medium text-white">{project.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{project.summary}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-emerald-300">{project.metric}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Contact" delay={0.25}>
          <p className="text-slate-300">Let&apos;s build something memorable together.</p>
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
