import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight, Loader2, Github, Linkedin, Mail, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';
import { Button } from '@/components/ui/button';
import { socials } from '@/data/portfolio';
import { emailConfig } from '@/data/email-config';
export default function Contact() {
  const [sending, setSending] = useState(false);
  const pending = useRef(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const service = emailConfig.service;
  const template = emailConfig.template;
  const key = emailConfig.publicKey;
  const configured = Boolean(service && template && key);
  const change = (field: keyof typeof values, value: string) => { setValues(v => ({ ...v, [field]: value })); setFeedback(null); };
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (pending.current) return;
    if (!values.name.trim() || !values.message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) { setFeedback({ ok: false, text: 'Please enter your name, a valid email, and a message.' }); return; }
    if (!configured) { setFeedback({ ok: false, text: 'The message service is not configured. Please email me directly.' }); return; }
    pending.current = true; setSending(true); setFeedback(null);
    try {
      const result = await emailjs.send(service, template, { name: values.name.trim(), email: values.email.trim(), message: values.message.trim(), time: new Date().toLocaleString() }, key);
      if (result.status !== 200) throw new Error('Delivery not confirmed');
      setFeedback({ ok: true, text: 'Message sent successfully. Thank you for reaching out!' }); setValues({ name: '', email: '', message: '' });
    } catch { setFeedback({ ok: false, text: 'Your message could not be sent. Please try again or email me directly.' }); }
    finally { pending.current = false; setSending(false); }
  }
  return <section id="contact" className="chapter section-shell contact-section"><div className="chapter-label"><span>06 / THE NEXT CHAPTER</span><span>LET’S MAKE IT HAPPEN</span></div><div className="contact-layout"><div><h2>Have an idea?<br />Let’s build<br /><span className="text-primary">something great.</span></h2><p className="text-muted-foreground contact-intro">A thoughtful product, an interesting challenge, or simply a conversation. I’d love to hear from you.</p><a className="contact-email" href={`mailto:${socials.email}`}>{socials.email}<ArrowUpRight size={22} /></a><a className="flex items-center gap-3 text-muted-foreground mb-8" href="tel:+917046249240"><Phone size={16} />{socials.phone}</a><div className="flex gap-4"><Button asChild variant="outline"><a href={socials.github} target="_blank" rel="noopener noreferrer"><Github />GitHub<ArrowUpRight /></a></Button><Button asChild variant="outline"><a href={socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn<ArrowUpRight /></a></Button></div></div>
    <form className="contact-form" onSubmit={submit} aria-busy={sending}><span className="mono text-muted-foreground">START A CONVERSATION</span><div><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" maxLength={150} required value={values.name} onChange={e => change('name', e.target.value)} placeholder="How should I call you?" /></div><div><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required value={values.email} onChange={e => change('email', e.target.value)} placeholder="you@example.com" /></div><div><label htmlFor="contact-message">What’s on your mind?</label><textarea id="contact-message" name="message" required maxLength={5000} rows={4} value={values.message} onChange={e => change('message', e.target.value)} placeholder="Tell me a little about your idea…" /></div>{!configured && <p className="text-muted-foreground text-sm">Messaging is currently unavailable. <a className="text-primary underline" href={`mailto:${socials.email}`}>Email me directly.</a></p>}{feedback && <p role={feedback.ok ? 'status' : 'alert'} className={feedback.ok ? 'text-primary' : 'text-destructive'}>{feedback.text}</p>}<Button type="submit" disabled={sending || !configured} size="lg" className="w-full justify-between">{sending ? 'Sending your message…' : 'Send message'}{sending ? <Loader2 className="animate-spin" /> : <ArrowRight />}</Button><div className="flex gap-2 items-center mono text-muted-foreground"><Mail size={13} />A DIRECT LINE. NO MIDDLEMEN.</div></form></div></section>;
}
