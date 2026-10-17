import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, ArrowUp, ArrowRight, Download, Github, Linkedin, Menu, X, Sun, Moon, MapPin, Award, Code2, Terminal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Expertise from '@/components/portfolio/Expertise';
import Work from '@/components/portfolio/Work';
import Contact from '@/components/Contact';
import { achievements, education, socials } from '@/data/portfolio';
const Artifact = lazy(() => import('@/components/portfolio/Artifact'));
gsap.registerPlugin(ScrollTrigger);
const navigation = ['About', 'Expertise', 'Projects', 'Achievements', 'Education', 'Contact'];
export default function Index() {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [light, setLight] = useState(() => localStorage.getItem('portfolio-theme') === 'light');
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('');
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    document.documentElement.classList.toggle('light', light);
    document.documentElement.classList.toggle('dark', !light);
    localStorage.setItem('portfolio-theme', light ? 'light' : 'dark');
  }, [light]);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(query.matches); query.addEventListener('change', change);
    return () => query.removeEventListener('change', change);
  }, []);
  useEffect(() => {
    const context = gsap.context(() => {
      if (reduced) return;
      gsap.from('.hero-reveal', { y: 32, opacity: 0, duration: 1, stagger: .12, ease: 'power3.out', delay: .12 });
      gsap.from('.hero-side-note', { opacity: 0, duration: 1.4, delay: .65 });
      gsap.utils.toArray<HTMLElement>('.section-heading, .chapter-label, .case-copy, [data-reveal], .about-layout, .achievement-grid, .education-layout, .contact-layout').forEach(element => {
        gsap.from(element, { y: 32, opacity: 0, duration: .85, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
      });
      gsap.to(progress.current, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: .2 } });
    }, root);
    const update = () => { if (reduced && progress.current) progress.current.style.transform = `scaleX(${window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)})`; };
    window.addEventListener('scroll', update, { passive: true });
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-15% 0px -65% 0px' });
    root.current?.querySelectorAll('section[id]').forEach(s => observer.observe(s));
    return () => { context.revert(); observer.disconnect(); window.removeEventListener('scroll', update); };
  }, [reduced]);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenu(false); };
    document.addEventListener('keydown', escape); return () => document.removeEventListener('keydown', escape);
  }, []);
  const resume = <Button asChild variant="outline" size="lg"><a href="/ResumeFinal.pdf" download="Jaykumar-Previous-Resume.pdf"><Download />Previous resume</a></Button>;
  return <div ref={root} className="portfolio-root">
    <a className="skip-link" href="#about">Skip to content</a><div ref={progress} className="scroll-progress" aria-hidden="true" />
    <header className="site-header"><a href="#hero" aria-label="Jaykumar home" className="wordmark"><span className="monogram">J<span className="text-primary">/</span>K</span><span>JAYKUMAR<span className="wordmark-sub">THE DIGITAL ARCHITECT</span></span></a><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a href={`#${item.toLowerCase()}`} key={item} aria-current={active === item.toLowerCase() ? 'location' : undefined}>{item}</a>)}</nav><div className="flex items-center gap-2"><Button variant="ghost" size="icon" onClick={() => setLight(!light)} aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'} title={light ? 'Dark theme' : 'Light theme'}>{light ? <Moon size={18} /> : <Sun size={18} />}</Button><Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'}>{menu ? <X /> : <Menu />}</Button></div>
      {menu && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navigation.map((item, i) => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenu(false)}><span className="mono">0{i + 1}</span>{item}<ArrowUpRight size={20} /></a>)}</nav>}
    </header>
    <main><section id="hero" className="hero-section"><div className="hero-grid" aria-hidden="true" />{!reduced ? <Suspense fallback={<div className="artifact-loading" aria-hidden="true" />}><Artifact light={light} /></Suspense> : <div className="reduced-artifact" aria-hidden="true"><Code2 size={180} strokeWidth={.4} /></div>}
      <div className="hero-content section-shell"><div className="hero-reveal hero-eyebrow mono"><span className="status-dot" /> ENGINEERING IDEAS INTO REALITY</div><h1 className="hero-reveal">PATEL <span>JAYKUMAR</span><br />RAKESHBHAI<span className="text-primary">.</span></h1><div className="hero-reveal hero-role">Software Engineer <span>/</span> Full-Stack Developer<br className="desktop-break" /> Competitive Programmer <span>/</span> ML Enthusiast</div><p className="hero-reveal hero-description">I turn complex problems into intelligent<br className="desktop-break" /> digital experiences.</p><div className="hero-reveal hero-actions"><Button asChild size="lg" className="hero-primary"><a href="#projects">Explore my work<ArrowUpRight /></a></Button>{resume}<Button asChild variant="link" className="text-foreground"><a href="#contact">Contact me<ArrowUpRight /></a></Button></div><div className="hero-reveal hero-meta"><span><MapPin size={14} />Gandhinagar, Gujarat, India</span><div><a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div></div></div>
      <div className="hero-side-note mono"><span>ARTIFACT / 001</span><span>COMPLEXITY, CONNECTED.</span></div><div className="hero-bottom section-shell"><a href="#about" className="mono flex items-center gap-3"><ArrowDown size={17} />SCROLL TO DISCOVER</a><span className="mono text-muted-foreground">LOGIC × CREATIVITY × PURPOSE</span></div>
    </section>
    <div className="identity-strip"><span>SOFTWARE ENGINEERING</span><span className="text-primary">✳</span><span>INTELLIGENT SYSTEMS</span><span className="text-accent">✳</span><span>HUMAN EXPERIENCES</span><span className="text-primary">✳</span></div>
    <section id="about" className="chapter section-shell"><div className="chapter-label"><span>01 / BEHIND THE CODE</span><span>THE HUMAN PART</span></div><div className="about-layout"><div className="portrait-block"><img src="/profilePhoto.jpg" alt="Patel Jaykumar Rakeshbhai" width="480" height="580" loading="lazy" /><div className="portrait-caption mono"><span>JAYKUMAR / GANDHINAGAR</span><ArrowUpRight size={17} /></div><span className="portrait-cross">+</span></div><div className="about-copy"><span className="mono text-primary">CURIOUS MIND. BUILDER AT HEART.</span><h2>The engineer<br />behind the code<span className="text-primary">.</span></h2><p>I’m Jaykumar — a Computer Science student who enjoys bringing structure to complex problems and turning ideas into useful digital products.</p><p className="text-muted-foreground">My interests sit at the intersection of software engineering, full-stack development, machine learning and competitive programming. I learn by exploring, build by experimenting, and care about the details that make a product feel right.</p><div className="about-facts"><div><Code2 /><span>Problem solver</span><small>Algorithms & thoughtful systems</small></div><div><Sparkles /><span>Practical builder</span><small>From exploration to implementation</small></div></div><a href="#expertise" className="inline-flex items-center gap-2 text-primary mt-8">Explore my toolkit<ArrowRight size={17} /></a></div></div></section>
    <Expertise /><Work />
    <section id="achievements" className="chapter section-shell"><div className="chapter-label"><span>04 / PROOF OF PERSISTENCE</span><span>THE PROBLEM-SOLVING MINDSET</span></div><div className="section-heading"><h2>Practice meets<br /><span className="text-muted-foreground">possibility.</span></h2><p>Every problem is a new perspective. A competitive programming journey defined by consistency and curiosity.</p></div><div className="achievement-grid"><div className="rank-feature"><div className="mono"><span className="status-dot" /> LEETCODE WEEKLY CONTEST {achievements.contest}</div><div className="rank-number"><span>#</span>{achievements.rank}</div><div className="rank-caption"><h3>Global rank.</h3><p>Among 39,000+ participants.</p></div><ArrowUpRight className="rank-arrow" size={48} strokeWidth={1} /></div><div className="achievement-stats"><div><span className="mono">PROBLEMS SOLVED</span><strong>1,700<span className="text-primary">+</span></strong><p>LeetCode & GeeksforGeeks</p></div><div><span className="mono">LEETCODE RATING</span><strong>2212<span className="text-primary">+</span></strong><p>Approximately top 2%</p></div><div><span className="mono">CODECHEF RATING</span><strong>1918<span className="text-primary">+</span></strong><p>Competitive programming</p></div><div><span className="mono">HACKERRANK</span><strong>5<span className="text-accent">★</span></strong><p>Problem Solving</p></div></div></div><div className="recognition-row"><div><Terminal size={24} /><span><strong>TCS NQT-IT Programming</strong><small>600/600 · 100% in the programming section</small></span><ArrowUpRight size={22} /></div><div><Award size={26} /><span><strong>Dewang Mehta IT Award · GTU</strong><small>Outstanding academic performance as a B.E. top ranker</small></span><ArrowUpRight size={22} /></div></div></section>
    <section id="education" className="chapter section-shell"><div className="chapter-label"><span>05 / THE FOUNDATION</span><span>LEARNING NEVER STOPS</span></div><div className="education-layout"><h2>A foundation<br />for what’s next<span className="text-primary">.</span></h2><div className="education-detail"><span className="mono text-primary">{education.period} / B.TECH</span><h3>{education.school}</h3><p>{education.degree}</p><div className="education-footer"><span className="mono text-muted-foreground">GANDHINAGAR, GUJARAT</span><span><strong>{education.cgpa}</strong> CGPA</span></div></div></div><div className="resume-note"><span className="text-muted-foreground text-sm">Looking for the details? The previous resume is available; an updated PDF is coming.</span>{resume}</div></section>
    <Contact /></main><footer className="footer section-shell"><a href="#hero" className="wordmark"><span className="monogram">J<span className="text-primary">/</span>K</span><span>BUILT WITH INTENTION.</span></a><span className="mono text-muted-foreground">© {new Date().getFullYear()} JAYKUMAR PATEL</span><Button asChild variant="ghost" size="icon"><a href="#hero" aria-label="Back to top"><ArrowUp /></a></Button></footer>
  </div>;
}
