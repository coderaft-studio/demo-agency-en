"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useAnimateOnScroll } from "@/lib/hooks";
import { IMGS } from "@/lib/images";

const HomeContent = dynamic(()=>import("./HomeContent"),{
  ssr:false,
  loading:()=>(
    <div style={{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0f1e"}}>
      <div style={{width:"40px",height:"3px",background:"linear-gradient(90deg,#6366f1,#8b5cf6)",animation:"axl 1.2s ease-in-out infinite alternate",borderRadius:"3px"}}/>
      <style>{`@keyframes axl{to{width:80px}}`}</style>
    </div>
  )
});

const SLIDES=[
  {bg:IMGS.hero1,tag:"Welcome to Axiom Studio",h1:<>We Build Digital<br/><span>Experiences</span> That Matter</>,p:"From pixel-perfect interfaces to high-converting campaigns — we partner with ambitious brands to create digital presence that truly stands out.",cta1:"Start a Project",cta2:"See Our Work",link1:"/contact",link2:"/portfolio"},
  {bg:IMGS.hero2,tag:"Award-Winning Design",h1:<>Strategy Meets<br/><span>Beautiful</span> Design</>,p:"Our multidisciplinary team blends creative vision with data-driven strategy to deliver solutions that look stunning and perform brilliantly.",cta1:"View Portfolio",cta2:"Our Services",link1:"/portfolio",link2:"/services"},
  {bg:IMGS.hero3,tag:"Results-Driven Agency",h1:<>Growth Through<br/><span>Digital</span> Innovation</>,p:"We've helped 120+ companies achieve measurable growth. Your success is our benchmark — every project starts and ends with your goals.",cta1:"Get a Free Quote",cta2:"Learn More",link1:"/contact",link2:"/about"},
];

export default function Home(){
  useAnimateOnScroll();
  const [scrolled,setScrolled]=useState(false);
  const [showTop,setShowTop]=useState(false);
  const [slide,setSlide]=useState(0);

  useEffect(()=>{
    const fn=()=>{setScrolled(window.scrollY>60);setShowTop(window.scrollY>700);};
    window.addEventListener("scroll",fn,{passive:true});
    return()=>window.removeEventListener("scroll",fn);
  },[]);

  useEffect(()=>{
    const t=setInterval(()=>setSlide(s=>(s+1)%SLIDES.length),5000);
    return()=>clearInterval(t);
  },[]);

  const s=SLIDES[slide];

  return(
    <>
      <Navbar/>
      <section id="home" className="ax-hero wow fadeIn" style={{backgroundImage:`url(${s.bg})`}}>
        <div className="ax-hero-overlay"/>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1,paddingTop:"80px"}}>
          <div style={{maxWidth:"680px"}}>
            <p className="wow fadeInUp" style={{fontSize:"13px",fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px"}}>{s.tag}</p>
            <h1 className="wow fadeInUp d1" style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(40px,6vw,72px)",fontWeight:800,lineHeight:1.15,color:"#f8fafc",marginBottom:"20px",letterSpacing:"-0.01em"}}>{s.h1}</h1>
            <div className="separator wow fadeInUp d2"/>
            <p className="wow fadeInUp d2" style={{fontSize:"17px",lineHeight:1.8,color:"rgba(248,250,252,0.7)",marginBottom:"36px"}}>{s.p}</p>
            <div className="wow fadeInUp d3" style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
              <Link href={s.link1} className="btn-primary">{s.cta1}</Link>
              <Link href={s.link2} className="btn-outline">{s.cta2}</Link>
            </div>
          </div>
          <div style={{display:"flex",gap:"8px",marginTop:"48px"}}>
            {SLIDES.map((_,i)=>(
              <button key={i} className={`slide-dot${slide===i?" active":""}`} onClick={()=>setSlide(i)}/>
            ))}
          </div>
        </div>
      </section>
      <HomeContent/>
      <a href="#home" className={`back-top${showTop?" show":""}`} aria-label="Back to top">↑</a>
    </>
  );
}
