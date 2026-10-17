import { useState } from 'react';
import { ArrowUpRight, Braces, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { expertise } from '@/data/portfolio';
export default function Expertise() {
  const [selected, setSelected] = useState(0);
  const category = expertise[selected];
  return <section id="expertise" className="chapter section-shell">
    <div className="chapter-label"><span>02 / THE TOOLKIT</span><span>ALWAYS LEARNING</span></div>
    <div className="section-heading"><h2>Ideas need<br /><span className="text-muted-foreground">the right tools.</span></h2><p>From a single line of code to connected systems. The technologies and foundations I build with.</p></div>
    <div className="expertise-layout"><div role="tablist" aria-label="Expertise categories" className="expertise-tabs">{expertise.map((item, i) => <Button key={item.name} role="tab" aria-selected={selected === i} aria-controls={`expertise-panel-${i}`} id={`expertise-tab-${i}`} variant="ghost" onClick={() => setSelected(i)} className={`expertise-tab ${selected === i ? 'selected' : ''}`}><span className="mono text-muted-foreground">{item.code}</span><span>{item.name}</span><ArrowUpRight /></Button>)}</div>
      <div id={`expertise-panel-${selected}`} role="tabpanel" aria-labelledby={`expertise-tab-${selected}`} className="expertise-panel"><div className="flex items-center justify-between text-primary"><Braces size={48} strokeWidth={1} /><span className="mono">STACK / {category.code}</span></div><h3>{category.name}</h3><p className="text-muted-foreground">{category.description}</p><div className="skills-list">{category.skills.map(skill => <span key={skill}><Code2 size={14} />{skill}</span>)}</div><div className="expertise-bottom mono">EXPLORE. BUILD. ITERATE.<span className="text-accent">↗</span></div></div>
    </div>
  </section>;
}
