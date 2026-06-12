"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href:"/",          label:"Home" },
  { href:"/about",     label:"About" },
  { href:"/services",  label:"Services" },
  { href:"/portfolio", label:"Portfolio" },
  { href:"/pricing",   label:"Pricing" },
  { href:"/blog",      label:"Blog" },
  { href:"/contact",   label:"Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>60);
    window.addEventListener("scroll",fn,{passive:true});
    return()=>window.removeEventListener("scroll",fn);
  },[]);

  return (
    <>
      <header className={`ax-nav${scrolled?" scrolled":""}`}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <Link href="/" className="ax-logo" style={{ textDecoration:"none" }}>
            Axiom<span>.</span>Studio
          </Link>

          <ul className="hidden md:flex" style={{ listStyle:"none", gap:"28px", margin:0, padding:0 }}>
            {LINKS.map(l=>(
              <li key={l.href} className={path===l.href?"active":""}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn-primary hidden md:inline-block"
            style={{ padding:"10px 22px", fontSize:"11px", textDecoration:"none" }}>
            Get in Touch
          </Link>

          <button className="md:hidden" onClick={()=>setOpen(true)}
            style={{ background:"none", border:"1px solid rgba(99,102,241,0.4)", color:"#6366f1", padding:"6px 14px", fontSize:"11px", cursor:"pointer", borderRadius:"4px", fontFamily:"'Inter',sans-serif" }}>
            ☰
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open?" open":""}`}>
        <button onClick={()=>setOpen(false)} style={{ position:"absolute", top:"24px", right:"24px", background:"none", border:"none", color:"#fff", fontSize:"24px", cursor:"pointer" }}>✕</button>
        {LINKS.map(l=>(
          <Link key={l.href} href={l.href} onClick={()=>setOpen(false)}
            style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:800, color: path===l.href ? "#6366f1" : "#f8fafc", textDecoration:"none", fontFamily:"'Inter',sans-serif", padding:"8px 0" }}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn-primary" onClick={()=>setOpen(false)}
          style={{ marginTop:"16px", textDecoration:"none" }}>
          Get in Touch
        </Link>
      </div>
    </>
  );
}
