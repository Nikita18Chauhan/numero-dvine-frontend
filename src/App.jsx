import { useState } from "react";
import LoShuGrid from "./components/LoShuGrid.jsx";
import { YantraIcon, CrystalIcon, SwitchWordIcon, SaltIcon, BayLeafIcon } from "./components/RemedyIcons.jsx";

const SERVICES = [
  {
    title: "Numerology Reading",
    desc: "A full reading of your birth number, destiny number and life-path cycles, mapped against the years ahead.",
    size: "wide",
  },
  {
    title: "Mobile Numerology",
    desc: "Your phone number, aligned to your personal numbers, so daily calls stop working against you.",
    size: "narrow",
  },
  {
    title: "Name Correction",
    desc: "Signature and spelling adjustments that bring your name's number in step with your birth chart.",
    size: "narrow",
  },
  {
    title: "EFT Therapy",
    desc: "Tapping sessions that release stored stress at the points where emotion and number pattern meet.",
    size: "wide",
  },
  {
    title: "Crystal Healing",
    desc: "Stones chosen for your specific numbers, placed to clear and steady the energy around you.",
    size: "narrow",
  },
  {
    title: "Crystal Board Predictions",
    desc: "A crystal board sitting reveals the near-term picture — timing, decisions and what to prepare for.",
    size: "wide",
  },
];

const REMEDIES = [
  { icon: <YantraIcon />, title: "Yantras", desc: "Geometric charts placed to correct number imbalances at home or work." },
  { icon: <CrystalIcon />, title: "Crystals", desc: "Matched to your personal numbers for daily energetic support." },
  { icon: <SwitchWordIcon />, title: "Switch Words", desc: "Written phrases used with intent to shift stuck situations." },
  { icon: <SaltIcon />, title: "Salts", desc: "Simple salt rituals for clearing heavy or stagnant energy at home." },
  { icon: <BayLeafIcon />, title: "Bay Leaf Ritual", desc: "A traditional practice for inviting ease around money and decisions." },
];

const PROCESS = [
  { n: "01", title: "Share your details", desc: "Your full birth name and date of birth — the two numbers everything else is built from." },
  { n: "02", title: "Receive your reading", desc: "A session with Niramala, in person or on call, walking through what your numbers show." },
  { n: "03", title: "Apply your remedies", desc: "A short, specific set of remedies — no more than your life actually needs." },
];

function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <div className="brand">
          <span className="brand-mark">✦</span>
          <span className="brand-name">Numero D'vine</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#remedies">Remedies</a></li>
            <li><a href="#about">Niramala</a></li>
            <li><a href="#process">Process</a></li>
          </ul>
        </nav>
        <a href="#contact" className="nav-cta">Book a reading</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow-line">
            <span className="rule" />
            <span>Numerology · EFT · Crystal Healing</span>
          </div>
          <h1>Your numbers already know <em>where you're headed.</em></h1>
          <p className="hero-sub">
            Numero D'vine reads the numbers behind your name, birth date and mobile number
            with Niramala Shridhar — and pairs each reading with remedies you can actually use.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Book a reading</a>
            <a href="#services" className="btn-ghost">Explore services</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">9</div>
              <div className="label">core numbers read</div>
            </div>
            <div className="hero-stat">
              <div className="num">6</div>
              <div className="label">services offered</div>
            </div>
            <div className="hero-stat">
              <div className="num">1:1</div>
              <div className="label">personal sessions</div>
            </div>
          </div>
        </div>
        <div>
          <LoShuGrid />
          <p className="grid-caption">The Lo Shu square — every row, column and diagonal sums to 15.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap">
        <div className="about-portrait">
          <span className="glyph">NS</span>
          <div className="frame-label">Niramala Shridhar — Numerologist &amp; EFT Practitioner</div>
        </div>
        <div className="about-body">
          <span className="kicker">About Niramala</span>
          <h2 style={{ marginBottom: 22 }}>A reading rooted in your own numbers, not a generic chart.</h2>
          <p>
            Niramala Shridhar works across numerology, name correction and energy healing,
            treating each reading as specific to one person's birth date, name and circumstances —
            never a template applied to everyone who walks in.
          </p>
          <p>
            Alongside numerology, she practises EFT therapy and crystal healing, and reads
            crystal boards for clients who want a clearer picture of what's coming next.
            Every session ends with a small set of remedies — yantras, crystals, switch words,
            salts or a bay leaf ritual — chosen for what the numbers actually call for.
          </p>
          <p className="about-signoff">
            "Your number sets the pattern. My work is helping you read it."
            <span>Niramala Shridhar, Founder</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Services</span>
          <h2>Six ways to work together</h2>
          <p>From a first numerology reading to ongoing energy work — pick a starting point, or ask Niramala where to begin.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className={`svc-card ${s.size}`} key={s.title}>
              <div className="svc-index">{String(i + 1).padStart(2, "0")}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Remedies() {
  return (
    <section className="section section-dark" id="remedies">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Remedies</span>
          <h2>Practical remedies, not a shopping list</h2>
          <p>Every reading closes with the remedies your numbers actually call for — usually just one or two of these.</p>
        </div>
        <div className="remedies-list">
          {REMEDIES.map((r) => (
            <div className="remedy" key={r.title}>
              {r.icon}
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">How it works</span>
          <h2>Three steps to your first reading</h2>
        </div>
        <div className="process-row">
          {PROCESS.map((p) => (
            <div className="process-step" key={p.n}>
              <div className="p-num">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Numerology Reading", message: "" });
  const [status, setStatus] = useState(null); // 'sending' | 'ok' | 'err'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("sending");
  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });
  //     if (!res.ok) throw new Error("Request failed");
  //     setStatus("ok");
  //     setForm({ name: "", phone: "", service: "Numerology Reading", message: "" });
  //   } catch {
  //     setStatus("err");
  //   }

  const onSubmit = (e) => {
  e.preventDefault();
  setStatus("sending");

  // Frontend-only for now — no backend call
  setTimeout(() => {
    setStatus("ok");
    setForm({ name: "", phone: "", service: "Numerology Reading", message: "" });
  }, 600);

  };

  return (
    <section className="section section-dark contact" id="contact">
      <div className="wrap">
        <div className="contact-info">
          <span className="kicker">Get in touch</span>
          <h2>Book your reading</h2>
          <p className="lead">Send your details and Niramala will get back to you to schedule your session.</p>

          <div className="contact-line">
            <span className="k">Email</span>
            <span className="v">numerodvine@gmail.com</span>
          </div>
          <div className="contact-line">
            <span className="k">Phone</span>
            <span className="v">+8291373125</span>
          </div>
          <div className="contact-line">
            <span className="k">Instagram</span>
            <span className="v">numerodvine</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" value={form.name} onChange={onChange} required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" value={form.phone} onChange={onChange} required />
          </div>
          <div className="field">
            <label htmlFor="service">Service</label>
            <select id="service" name="service" value={form.service} onChange={onChange}>
              <option>Numerology Reading</option>
              <option>Mobile Numerology</option>
              <option>Name Correction</option>
              <option>EFT Therapy</option>
              <option>Crystal Healing</option>
              <option>Crystal Board Predictions</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">What would you like help with?</label>
            <textarea id="message" name="message" value={form.message} onChange={onChange} />
          </div>
          <button className="btn-primary" type="submit" disabled={status === "sending"} style={{ width: "100%" }}>
            {status === "sending" ? "Sending…" : "Request a reading"}
          </button>
          {status === "ok" && <p className="form-status ok">Thank you — Niramala will reach out shortly.</p>}
          {status === "err" && <p className="form-status err">Something went wrong. Please try again, or email us directly.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span className="footer-brand">Numero D'vine</span>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#remedies">Remedies</a>
          <a href="#about">Niramala</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        © {new Date().getFullYear()} Numero D'vine. All readings are for guidance purposes.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Remedies />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}
