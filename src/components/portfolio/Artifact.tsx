import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { Component, Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Group, Color } from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Sculpture({ light }: { light: boolean }) {
  const group = useRef<Group>(null);
  const time = useRef(0);
  const scrollState = useRef({ progress: 0 });
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to(scrollState.current, { progress: 1, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: .4 } });
    });
    return () => context.revert();
  }, []);
  const colors = useMemo(() => {
    const themeRoot = document.querySelector(light ? ':root.light' : ':root.dark') ?? document.documentElement;
    const style = getComputedStyle(themeRoot);
    const token = (name: string) => new Color(`hsl(${style.getPropertyValue(name).trim().split(/\s+/).join(', ')})`);
    return { primary: token('--primary'), accent: token('--accent'), foreground: token('--foreground') };
  }, [light]);
  const particles = useMemo(() => Float32Array.from(Array.from({ length: 240 }, (_, i) => {
    const a = i * 2.399963; const r = 2.7 + (i % 7) * .17;
    return [Math.cos(a) * r, Math.sin(a) * r, Math.sin(i * 1.73) * 2];
  }).flat()), []);
  useFrame(({ pointer, viewport, size }, rawDelta) => {
    const g = group.current; if (!g) return;
    const dt = Math.min(rawDelta, .05); time.current += dt;
    const scroll = scrollState.current.progress;
    g.rotation.y += dt * .085;
    g.rotation.x += ((pointer.y * .13 + scroll * .6) - g.rotation.x) * (1 - Math.exp(-3 * dt));
    g.rotation.z = Math.sin(time.current * .16) * .09 + pointer.x * .08;
    g.position.x = size.width > 850 ? viewport.width * .235 : 0;
    g.scale.setScalar(size.width > 850 ? 1.15 - scroll * .12 : 1 - scroll * .12);
  });
  return <group ref={group} rotation={[.15, .2, -.12]}>
    <mesh><torusKnotGeometry args={[1.24, .33, 220, 20, 2, 3]} /><meshStandardMaterial color={colors.primary} wireframe transparent opacity={.68} emissive={colors.primary} emissiveIntensity={.35} /></mesh>
    <mesh rotation={[.5, .3, .2]}><icosahedronGeometry args={[1.15, 1]} /><meshStandardMaterial color={colors.foreground} metalness={.9} roughness={.27} transparent opacity={.16} wireframe /></mesh>
    {[0, 1, 2].map(i => <mesh key={i} rotation={[.65 + i * .57, i * .75, i * .5]}><torusGeometry args={[2.08 + i * .13, .008, 6, 160]} /><meshBasicMaterial color={i === 2 ? colors.accent : colors.primary} transparent opacity={i === 2 ? .5 : .26} /></mesh>)}
    <points><bufferGeometry><bufferAttribute attach="attributes-position" args={[particles, 3]} /></bufferGeometry><pointsMaterial color={colors.primary} size={.024} transparent opacity={.65} sizeAttenuation /></points>
  </group>;
}
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <Fallback /> : this.props.children; }
}
export function Fallback() { return <div className="artifact-fallback" aria-hidden="true"><div /><div /><div /><span>J / K</span></div>; }
export default function Artifact({ light }: { light: boolean }) {
  const [supported, setSupported] = useState(false);
  const [visible, setVisible] = useState(true);
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const probe = document.createElement('canvas');
    try { const gl = probe.getContext('webgl2'); setSupported(Boolean(gl)); gl?.getExtension('WEBGL_lose_context')?.loseContext(); } catch { setSupported(false); }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (host.current) observer.observe(host.current);
    const handleVisibility = () => setVisible(!document.hidden && (host.current?.getBoundingClientRect().bottom ?? 0) > 0);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', handleVisibility); };
  }, []);
  return <div ref={host} className="artifact-canvas" aria-label="Interactive computational sculpture">
    {supported ? <SceneBoundary><Canvas dpr={[1, 1.5]} frameloop={visible ? 'always' : 'never'} camera={{ position: [0, 0, 8.5], fov: 42 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={.6} /><directionalLight position={[3, 5, 5]} intensity={2} />
      <Suspense fallback={null}><Environment resolution={64}><Lightformer intensity={2} position={[0, 4, 2]} scale={[8, 8, 1]} /><Lightformer intensity={1} position={[-4, 0, 1]} rotation-y={Math.PI / 2} scale={[6, 4, 1]} /></Environment><Sculpture light={light} /></Suspense>
    </Canvas></SceneBoundary> : <Fallback />}
  </div>;
}
