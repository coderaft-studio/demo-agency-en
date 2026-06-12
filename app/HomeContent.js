"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";
import { IMGS } from "@/lib/images";

const SERVICES=[
  {icon:"🎨",title:"UI/UX Design",desc:"Intuitive, beautiful interfaces built around your users.",href:"/services"},
  {icon:"💻",title:"Web Development",desc:"Fast, scalable websites and web apps with modern tech.",href:"/services"},
  {icon:"📱",title:"App Development",desc:"Native and cross-platform mobile apps for iOS & Android.",href:"/services"},
  {icon:"✦", title:"Brand Identity",desc:"Strategic visual identities that set you apart.",href:"/services"},
  {icon:"📈",title:"Digital Marketing",desc:"Data-driven campaigns that drive measurable ROI.",href:"/services"},
  {icon:"🔍",title:"SEO & Performance",desc:"Technical SEO and optimisation to rank higher.",href:"/services"},
];

const FEATURED=[
  {img:IMGS.portfolio1,title:"Horizon Finance",cat:"Web Design",href:"/portfolio"},
  {img:IMGS.portfolio2,title:"Palette Studio",cat:"Brand Identity",href:"/portfolio"},
  {img:IMGS.portfolio7,title:"Nexus Platform",cat:"SaaS Development",href:"/portfolio"},
];

const STATS=[
  {num:"120+",label:"Projects Completed"},
  {num:"95",label:"Happy Clients"},
  {num:"8",label:"Years Experience"},
  {num:"14",label:"Awards Won"},
];

const TESTIMONIALS=[
  {q:"Axiom Studio transformed our entire digital presence. The team's attention to detail and strategic thinking is unlike any agency we've worked with. The results exceeded every benchmark we set.",name:"Sarah Chen",role:"CMO, Horizon Finance",init:"SC"},
  {q:"From concept to launch in 6 weeks. The quality was outstanding and the communication was seamless throughout. We've since brought them back for three more projects.",name:"Marcus Reid",role:"CEO, Palette Studio",init:"MR"},
];

export default function HomeContent(){
  useAnimateOnScroll(150);
  const [activeTest,setActiveTest]=useState(0);
  return(
    <>
      {/* Services overview */}
      <section className="ax-section dark2">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">What We Do</div>
            <h2>Full-Service Digital Agency</h2>
            <p>Everything your brand needs to succeed online — under one roof, with one team, focused on your results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s,i)=>(
              <Link key={s.title} href={s.href} style={{textDecoration:"none",display:"flex",flexDirection:"column"}}>
                <div className={`feat-card wow fadeInUp d${(i%3)+1}`} style={{cursor:"pointer",flex:1,display:"flex",flexDirection:"column"}}>
                  <div className="feat-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p style={{flex:1}}>{s.desc}</p>
                  <div style={{marginTop:"16px",fontSize:"11px",fontWeight:700,color:"var(--accent)",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>Learn More →</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:"40px"}} className="wow fadeInUp">
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="ax-section dark">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"48px",flexWrap:"wrap",gap:"16px"}} className="wow fadeInUp">
            <div>
              <div className="tag" style={{display:"inline-block",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"12px",background:"rgba(99,102,241,0.1)",padding:"4px 14px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Our Work</div>
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(28px,4vw,42px)",fontWeight:800,color:"#f8fafc",margin:0}}>Featured Projects</h2>
            </div>
            <Link href="/portfolio" className="btn-outline" style={{flexShrink:0}}>See All Work →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED.map((p,i)=>(
              <Link key={p.title} href={p.href} style={{textDecoration:"none"}} className={`wow fadeInUp d${i+1}`}>
                <div className="portfolio-card" style={{borderRadius:"14px",overflow:"hidden",cursor:"pointer"}}>
                  <Image unoptimized src={p.img} alt={p.title} width={400} height={260}
                    style={{width:"100%",height:"240px",objectFit:"cover",display:"block",transition:"transform .5s ease"}}/>
                  <div className="portfolio-overlay">
                    <div><h4>{p.title}</h4><span>{p.cat}</span></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="counter-section wow fadeIn" style={{backgroundImage:`url(${IMGS.counterBg})`}}>
        <div className="overlay"/>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{textAlign:"center"}}>
            {STATS.map((s,i)=>(
              <div key={s.label} className={`wow zoomIn d${i+1}`}>
                <div className="counter-num">{s.num}</div>
                <div className="counter-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ax-section dark2">
        <div style={{maxWidth:"900px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">Client Love</div>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="wow fadeInUp">
            <div style={{background:"rgba(99,102,241,0.05)",border:"1px solid rgba(99,102,241,0.15)",borderRadius:"20px",padding:"40px 48px",position:"relative"}}>
              <div style={{fontSize:"48px",color:"var(--accent)",lineHeight:1,marginBottom:"20px",fontFamily:"'Inter',sans-serif",fontWeight:800,opacity:0.4}}>&ldquo;</div>
              <p style={{fontSize:"18px",lineHeight:1.8,color:"#f8fafc",fontStyle:"italic",marginBottom:"28px"}}>{TESTIMONIALS[activeTest].q}</p>
              <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
                <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:800,color:"#fff",fontFamily:"'Inter',sans-serif"}}>{TESTIMONIALS[activeTest].init}</div>
                <div>
                  <div style={{fontFamily:"'Inter',sans-serif",fontSize:"15px",fontWeight:700,color:"#f8fafc"}}>{TESTIMONIALS[activeTest].name}</div>
                  <div style={{fontSize:"12px",color:"var(--muted)"}}>{TESTIMONIALS[activeTest].role}</div>
                </div>
              </div>
            </div>
            <div style={{display:"flex",gap:"8px",justifyContent:"center",marginTop:"20px"}}>
              {TESTIMONIALS.map((_,i)=>(
                <button key={i} onClick={()=>setActiveTest(i)}
                  style={{width:"8px",height:"8px",borderRadius:"50%",border:"none",cursor:"pointer",transition:"all .3s",background:activeTest===i?"var(--accent)":"rgba(255,255,255,0.2)"}}/>
              ))}
            </div>
          </div>
          <div style={{textAlign:"center",marginTop:"40px"}} className="wow fadeInUp">
            <Link href="/about" className="btn-outline">Meet the Team</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section wow fadeIn" style={{backgroundImage:`url(${IMGS.ctaBg})`}}>
        <div className="overlay"/>
        <div style={{maxWidth:"700px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1,textAlign:"center"}}>
          <div className="tag wow fadeInUp" style={{display:"inline-block",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"20px",background:"rgba(99,102,241,0.1)",padding:"4px 14px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Free Consultation</div>
          <h2 className="wow fadeInUp d1" style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(28px,4vw,48px)",fontWeight:800,color:"#f8fafc",marginBottom:"16px"}}>Ready to Build Something Remarkable?</h2>
          <p className="wow fadeInUp d2" style={{fontSize:"16px",color:"rgba(248,250,252,0.7)",lineHeight:1.7,marginBottom:"32px"}}>Let's talk about your project. Free, no-obligation consultation — no pushy sales, just honest advice.</p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}} className="wow fadeInUp d3">
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/pricing" className="btn-outline">View Pricing</Link>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
