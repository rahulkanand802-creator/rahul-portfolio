function PortfolioHome() {
  return (
    <main>
      <section id="hero">
        <h1>Rahul Portfolio</h1>
        <p>Designing and building thoughtful digital experiences.</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>
          I&apos;m Rahul, a multidisciplinary creative focused on clean interfaces,
          expressive visuals, and performant front-end development.
        </p>
      </section>

      <section id="services">
        <h2>Services</h2>
        <ul>
          <li>Brand &amp; Visual Direction</li>
          <li>UI/UX Design</li>
          <li>Front-End Development</li>
        </ul>
      </section>

      <section id="showreel">
        <h2>Showreel</h2>
        <p>Selected motion and interaction highlights from recent projects.</p>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <p>Featured case studies and shipped client work.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Let&apos;s build something memorable together.</p>
      </section>
    </main>
  );
}

export default function Home() {
  return <PortfolioHome />;
}
