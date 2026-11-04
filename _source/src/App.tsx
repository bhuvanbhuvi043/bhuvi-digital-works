import { useState } from 'react'

type Project = { name: string; type: string; description: string; href: string; mark: string; image?: string }

const projects: Project[] = [
  { name: 'Card Sabha', type: 'Live multiplayer card game', description: 'A social card-playing experience with online rooms and familiar Indian card games. Play with friends from any device.', href: 'https://card-sabha.card-sabha.workers.dev/', mark: 'C', image: 'card-sabha.webp' },
  { name: 'Webpify', type: 'Live image converter', description: 'A quick image conversion tool that helps make web-ready assets for everyday creative and website work.', href: 'https://webpify-image-converter.sheerriver2.chatgpt.site/', mark: 'W', image: 'webpify.webp' },
  { name: 'Zetiify', type: 'Product prototype', description: 'A networking platform concept connecting founders, investors and talent with profiles, chat and focused dashboards.', href: 'https://github.com/bhuvanbhuvi043/zetiify-poc', mark: 'Z' },
  { name: 'VisionMate', type: 'Business automation', description: 'A desktop workflow for finding business information and preparing structured outreach data for review.', href: 'https://github.com/bhuvanbhuvi043/VisionMate', mark: 'V' },
  { name: 'World Tourism Map', type: 'Travel technology', description: 'An interactive destination discovery experience designed for travel brands and tourism audiences.', href: 'https://github.com/bhuvanbhuvi043/world-tourism-map-explorer', mark: 'W' },
  { name: 'AI Writing Tool', type: 'AI product', description: 'A writing assistant exploring more natural, reader-friendly copy for creators and marketers.', href: 'https://github.com/bhuvanbhuvi043/AI-Text-To-Human-Text-Converter', mark: 'A' },
  { name: 'Box Chain Arena', type: 'Multiplayer game prototype', description: 'An online strategy duel with custom arenas and Firebase multiplayer, built around quick tactical matches.', href: 'https://github.com/bhuvanbhuvi043/Box-Chain-Arena', mark: 'B' },
  { name: 'Serpent Playground', type: 'Word game', description: 'A playful snake game where players collect the right words to form a sentence.', href: 'https://github.com/bhuvanbhuvi043/serpentplaygroung', mark: 'S' },
  { name: 'Lunch Time', type: 'Food delivery concept', description: 'A food delivery app concept focused on convenience, choice and thoughtful service.', href: 'https://github.com/bhuvanbhuvi043/lunch-time-app', mark: 'L' },
]

const services = [
  { no: '01', title: 'Websites that earn trust', text: 'Fast, responsive business websites and landing pages with clear messaging, confident design and a path to enquiry.', tags: 'Web design · WordPress · Landing pages' },
  { no: '02', title: 'SEO built into the foundations', text: 'Search-ready page structure, useful content, on-page improvements and a practical plan for becoming easier to find.', tags: 'Technical SEO · Content · Local search' },
  { no: '03', title: 'AI and automation that save time', text: 'Useful AI tools and repeatable workflows that reduce busywork and help your team move with more focus.', tags: 'AI workflows · Python · Data tools' },
  { no: '04', title: 'Creative work with a clear purpose', text: 'Campaign visuals, short-form video concepts and content designed to look consistent and make the next step obvious.', tags: 'Social creative · Video · Copywriting' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const year = new Date().getFullYear()
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header">
        <nav className="nav wrap" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Bhuvi Digital Works home">
            <img src="./assets/bhuvi-mark.svg" alt="" />
            <span>Bhuvi<span className="brand-light">Digital Works</span></span>
          </a>
          <button className="menu-button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>
            <span>{menuOpen ? 'Close' : 'Menu'}</span><span className="menu-lines" aria-hidden="true"><i /><i /></span>
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="nav-links">
            <a href="#services" onClick={closeMenu}>What I do</a>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>Let’s talk <Arrow diagonal /></a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero section wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Independent digital studio · Chennai, India</p>
            <h1>Make your next<br />digital move <em>matter.</em></h1>
            <p className="hero-intro">Websites, search, automation and creative work — thoughtfully brought together to help good businesses grow.</p>
            <div className="hero-ctas">
              <a className="button button-dark" href="#contact">Start a conversation <Arrow diagonal /></a>
              <a className="text-link" href="#work">Explore the work <Arrow /></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Built for clarity. Made to move business forward.</div>
          </div>
          <div className="hero-art" aria-label="A look into the Bhuvi Digital Works studio">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-label art-label-top"><span>BDW / 01</span><span>Digital, connected.</span></div>
            <img className="hero-artwork" src="./assets/studio-hero.webp" alt="Glass forms and light arranged into a connected digital studio artwork" width="1440" height="960" fetchPriority="high" decoding="async" />
            <div className="art-stamp"><span>THOUGHTFUL<br />BY DESIGN</span><b>✳</b></div>
            <div className="art-label art-label-bottom"><span>WEB</span><span>SEARCH</span><span>SYSTEMS</span><span>STORY</span></div>
          </div>
          <div className="hero-bottom"><span>01 — 04</span><span>Scroll to discover</span><a href="#services" aria-label="Scroll to services">↓</a></div>
        </section>

        <section className="intro-band">
          <div className="wrap intro-band-inner"><p>SMALL STUDIO<br />BIG PICTURE THINKING</p><h2>From the first impression to the follow-through, every touchpoint should work harder for your brand.</h2><span className="intro-index">01 / 04</span></div>
        </section>

        <section className="section services-section wrap" id="services">
          <div className="section-heading"><div><p className="eyebrow">A connected set of capabilities</p><h2>Good work starts<br />with <em>good thinking.</em></h2></div><p className="section-summary">One partner for the digital pieces that shape how customers find you, understand you and choose you.</p></div>
          <div className="services-list">{services.map((service) => <article className="service-row" key={service.no}><span className="service-no">{service.no}</span><div><h3>{service.title}</h3><p>{service.text}</p><div className="service-tags">{service.tags.split(' · ').map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="service-plus" aria-hidden="true">↗</span></article>)}</div>
        </section>

        <section className="work-section" id="work">
          <div className="wrap section work-inner">
            <div className="section-heading"><div><p className="eyebrow">Selected work & experiments</p><h2>Ideas made<br /><em>real.</em></h2></div><p className="section-summary">A selection of digital products, prototypes and practical tools built around real-world needs.</p></div>
            <div className="project-grid">{projects.map((project, index) => <a className={`project-card project-${index + 1}`} href={project.href} target="_blank" rel="noreferrer" key={project.name}>{project.image && <img className="project-art" src={`./assets/${project.image}`} alt="" loading="lazy" decoding="async" width="900" height="600" />}<div className="project-card-top"><span>{project.type}</span><Arrow diagonal /></div><div className="project-mark">{project.mark}</div><div className="project-card-copy"><h3>{project.name}</h3><p>{project.description}</p><span className="project-visit">View project <Arrow /></span></div></a>)}</div>
            <div className="work-foot"><span>More experiments and source code</span><a href="https://github.com/bhuvanbhuvi043" target="_blank" rel="noreferrer">Explore GitHub <Arrow diagonal /></a></div>
          </div>
        </section>

        <section className="proof-section">
          <div className="wrap proof-inner"><div className="proof-heading"><div><p className="eyebrow">Beyond the build</p><h2>Digital work that<br /><em>shows up.</em></h2></div><p>Strong digital presence is a whole experience. Here are a few places where the work continues across websites, content and business operations.</p></div><div className="proof-cards"><a href="https://www.findholidays.in/" target="_blank" rel="noreferrer"><span className="proof-number">01 / TRAVEL</span><strong>Find Holidays India</strong><span>Website, destination content and creative support for a travel brand.</span><i>Visit website <Arrow diagonal /></i></a><a href="https://www.youtube.com/@FindHolidaysIndia/videos" target="_blank" rel="noreferrer"><span className="proof-number">02 / CONTENT</span><strong>Creative in motion</strong><span>Travel videos, short-form stories and social content built for discovery.</span><i>View channel <Arrow diagonal /></i></a><a href="https://menschforce.org/" target="_blank" rel="noreferrer"><span className="proof-number">03 / OPERATIONS</span><strong>MenschForce</strong><span>Experience across web development, CRM workflows and SharePoint support.</span><i>Visit website <Arrow diagonal /></i></a></div></div>
        </section>

        <section className="products-section section wrap" id="products">
          <div className="products-title"><p className="eyebrow">Made for the everyday</p><h2>Small tools.<br /><em>Useful impact.</em></h2><p>Focused products designed to make common creative tasks easier. Explore what’s live.</p></div>
          <div className="product-list">
            <a className="product-row webpify" href="https://webpify-image-converter.sheerriver2.chatgpt.site/" target="_blank" rel="noreferrer"><span className="product-icon">W<span>↗</span></span><span className="product-copy"><span className="product-category">IMAGE TOOL · LIVE</span><strong>Webpify</strong><small>Image Converter</small></span><span className="product-desc">Convert images for the modern web. A simple utility to make image workflows lighter.</span><span className="product-arrow"><Arrow diagonal /></span></a>
            <a className="product-row cardsabha" href="https://card-sabha.card-sabha.workers.dev/" target="_blank" rel="noreferrer"><span className="product-icon">C<span>↗</span></span><span className="product-copy"><span className="product-category">CARD GAME · LIVE</span><strong>Card Sabha</strong><small>Play together, anywhere</small></span><span className="product-desc">A social card-playing experience bringing people together around a familiar table.</span><span className="product-arrow"><Arrow diagonal /></span></a>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="wrap about-inner section"><div className="portrait-wrap"><img src="./assets/Bhuvaneshwaran R.jpeg" alt="Bhuvaneshwaran R, founder of Bhuvi Digital Works" loading="lazy" /><span className="portrait-caption">THE PERSON BEHIND THE WORK</span></div><div className="about-copy"><p className="eyebrow">A little about me</p><h2>Hi, I’m <em>Bhuvaneshwaran.</em></h2><p>I’m an AI full stack developer and digital execution specialist based in Chennai. I enjoy connecting technical thinking with strong creative work — making websites, content and tools useful, clear and ready for the real world.</p><p>With 3+ years of experience across web, AI automation and digital marketing, I work closely with businesses to take an idea from “we should do this” to something people can actually use.</p><div className="about-facts"><span>Chennai, Tamil Nadu</span><span>3+ years building</span><span>Curious by default</span></div><a className="text-link" href="https://www.linkedin.com/in/bhuvaneshwaran-r04031999/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow diagonal /></a></div></div>
        </section>

        <section className="contact-section wrap section" id="contact"><div className="contact-panel"><div className="contact-orb" /><p className="eyebrow">Have a good one in mind?</p><h2>Let’s make<br />something <em>work.</em></h2><p className="contact-intro">Tell me what you’re building, what’s getting in the way, or what you’d like to make better. We’ll take it from there.</p><a className="button button-lime" href="mailto:bhuvanbhuvi043@gmail.com?subject=Let%E2%80%99s%20talk%20about%20a%20project">Tell me about your project <Arrow diagonal /></a><div className="contact-direct"><a href="mailto:bhuvanbhuvi043@gmail.com">bhuvanbhuvi043@gmail.com</a><a href="tel:+917448488925">+91 74484 88925</a></div></div></section>
      </main>

      <footer className="footer"><div className="wrap footer-top"><a href="#home" className="brand"><img src="./assets/bhuvi-mark-light.svg" alt="" /><span>Bhuvi<span className="brand-light">Digital Works</span></span></a><p>Digital craft for a world<br />that keeps moving.</p><div className="footer-social"><a href="https://github.com/bhuvanbhuvi043" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/in/bhuvaneshwaran-r04031999/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://wa.me/917448488925" target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a></div></div><div className="wrap footer-bottom"><span>© {year} Bhuvi Digital Works · Chennai, India</span><a href="#home">Back to top ↑</a><span>Built with care by Bhuvaneshwaran R</span></div></footer>
    </>
  )
}

export default App
