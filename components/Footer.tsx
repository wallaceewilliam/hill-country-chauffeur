import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Footer() { return <footer className="bg-charcoal text-cream">
  <div className="site-shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
    <div><p className="eyebrow text-gold">Hill Country, Texas</p><h2 className="mt-4 max-w-md font-serif text-4xl leading-tight">The road is part of the experience.</h2><Link className="mt-7 inline-flex items-center gap-2 text-sm text-gold" href="/contact">Begin your itinerary <ArrowUpRight size={16}/></Link></div>
    <div><h3 className="footer-heading">Explore</h3><div className="footer-links">{[["About","/about"],["Services","/services"],["Destinations","/destinations"],["Gallery","/gallery"],["Frequently asked questions","/faq"]].map(([text, href]) => <Link href={href} key={href}>{text}</Link>)}</div></div>
    <div><h3 className="footer-heading">Connect</h3><div className="footer-links"><a href="tel:+15123939970"><Phone size={15}/> (512) 393-9970</a><a href="mailto:hello@hillcountrychauffeur.com"><Mail size={15}/> hello@hillcountrychauffeur.com</a></div></div>
  </div><div className="border-t border-white/10"><div className="site-shell flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Hill Country Chauffeur. All rights reserved.</span><span>Private transportation & concierge service</span></div></div>
</footer> }
