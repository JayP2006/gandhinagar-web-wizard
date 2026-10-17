import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function NotFound() { return <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background text-foreground p-8 text-center"><span className="mono text-primary">OUTSIDE THE COORDINATES</span><h1 className="text-8xl">404<span className="text-primary">.</span></h1><p className="text-muted-foreground">This page is not part of the universe.</p><Button asChild><a href="/">Return to Jaykumar’s portfolio<ArrowUpRight /></a></Button></main>; }
