"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";
import { IMGS } from "@/lib/images";

const ALL_PROJECTS=[
  {img:IMGS.portfolio1, title:"Horizon Finance",    cat:"Web",       tags:["Next.js","Tailwind","Fintech"],    year:"2024", desc:"Complete redesign of a $2B fintech platform. 40% improvement in conversion rate post-launch."},
  {img:IMGS.portfolio2, title:"Palette Studio",     cat:"Brand",     tags:["Brand Identity","Logo","Print"],  year:"2024", desc:"Full brand identity system for a creative studio — from strategy to final guidelines."},
  {img:IMGS.portfolio7, title:"Nexus Platform",     cat:"Web",       tags:["React","Node.js","SaaS"],         year:"2024", desc:"B2B SaaS dashboard with real-time collaboration features and custom reporting engine."},
  {img:IMGS.portfolio3, title:"DevFlow Pro",        cat:"Web",       tags:["Next.js","PostgreSQL","API"],     year:"2023", desc:"Developer tooling platform with 50,000 active monthly users. 2× growth in 6 months."},
  {img:IMGS.portfolio4, title:"Pulse Health App",   cat:"App",       tags:["React Native","iOS","Android"],   year:"2023", desc:"Award-winning health tracking app with AI-powered insights and coach integration."},
  {img:IMGS.portfolio8, title:"Axiom Analytics",    cat:"Web",       tags:["Dashboard","D3.js","Analytics"],  year:"2023", desc:"Enterprise analytics platform processing 100M+ events daily with real-time visualisation."},
  {img:IMGS.portfolio5, title:"Growth Engine",      cat:"Marketing", tags:["SEO","Ads","Content"],            year:"2023", desc:"Full-funnel growth campaign delivering 3× ROAS and 200% organic traffic growth in 12 months."},
  {img:IMGS.portfolio9, title:"DataVault",          cat:"Web",       tags:["React","AWS","Security"],         year:"2022", desc:"Secure data management platform for enterprise clients in regulated industries."},
  {img:IMGS.portfolio10,title:"Nomad Co-working",   cat:"Brand",     tags:["Branding","Web","Social"],        year:"2022", desc:"Brand identity and digital presence for a premium co-working network across 12 cities."},
  {img:IMGS.portfolio11,title:"CodeLab Academy",    cat:"Web",       tags:["EdTech","LMS","React"],           year:"2022", desc:"Online learning platform serving 25,000 students with interactive coding environments."},
  {img:IMGS.portfolio6, title:"Apex Commerce",      cat:"Web",       tags:["eCommerce","Shopify","Custom"],   year:"2022", desc:"Custom Shopify build with 400% increase in mobile conversion rate in first quarter."},
  {img:IMGS.portfolio12,title:"Verve Skincare",     cat:"Brand",     tags:["DTC Brand","Web","Packaging"],    year:"2021", desc:"Complete DTC brand launch from zero — identity, website, packaging, and growth marketing."},
];

const CATS=["All","Web","Brand","App","Marketing"];

function ProjectCard({p,i}){
  const [hov,setHov]=useState(false);
  const [modal,setModal]=useState(false);
  return(
    <>
      <div className={`card-in card-in-d${(i%3)+1}`}
        style={{borderRadius:"14px",overflow:"hidden",cursor:"pointer",position:"relative",
          transform:hov?"translateY(-4px)":"none",boxShadow:hov?"0 16px 40px rgba(99,102,241,0.2)":"0 4px 16px rgba(0,0,0,0.3)",
          transition:"all .35s",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)"}}
        onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} onClick={()=>setModal(true)}>
        <div style={{position:"relative",height:"220px",overflow:"hidden"}}>
          <Image unoptimized src={p.img} alt={p.title} fill sizes="33vw"
            style={{objectFit:"cover",transition:"transform .6s",transform:hov?"scale(1.07)":"scale(1)"}}/>
          <div style={{position:"absolute",inset:0,background:hov?"linear-gradient(to top,rgba(10,15,30,0.92),rgba(10,15,30,0.3))":"linear-gradient(to top,rgba(10,15,30,0.7),transparent)",transition:"background .35s",display:"flex",alignItems:"flex-end",padding:"16px"}}>
            <div style={{maxHeight:hov?"60px":"0",overflow:"hidden",transition:"max-height .35s"}}>
              <span style={{fontSize:"11px",fontWeight:700,color:"var(--accent)",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>View Case Study →</span>
            </div>
          </div>
        </div>
        <div style={{padding:"20px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"}}>
            <h4 style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",fontWeight:700,color:"#f8fafc"}}>{p.title}</h4>
            <span style={{fontSize:"11px",color:"rgba(248,250,252,0.4)",flexShrink:0,marginLeft:"8px"}}>{p.year}</span>
          </div>
          <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.6,marginBottom:"14px"}}>{p.desc}</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
            {p.tags.map(t=><span key={t} style={{fontSize:"10px",fontWeight:600,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.15)",padding:"2px 8px",borderRadius:"20px"}}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal&&(
        <div style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(6,8,15,0.95)",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px"}} onClick={()=>setModal(false)}>
          <div style={{maxWidth:"800px",width:"100%",background:"#111827",borderRadius:"20px",overflow:"hidden",border:"1px solid rgba(99,102,241,0.2)"}} onClick={e=>e.stopPropagation()}>
            <div style={{position:"relative",height:"360px"}}>
              <Image unoptimized src={p.img} alt={p.title} fill style={{objectFit:"cover"}}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(17,24,39,1) 0%,transparent 60%)"}}/>
              <button onClick={()=>setModal(false)} style={{position:"absolute",top:"16px",right:"16px",background:"rgba(0,0,0,0.5)",border:"none",color:"#fff",width:"36px",height:"36px",borderRadius:"50%",cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
            </div>
            <div style={{padding:"32px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"12px",flexWrap:"wrap",gap:"8px"}}>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"24px",fontWeight:800,color:"#f8fafc"}}>{p.title}</h3>
                <span style={{fontSize:"11px",color:"var(--accent)",background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.2)",padding:"4px 12px",borderRadius:"20px",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase"}}>{p.cat}</span>
              </div>
              <p style={{color:"var(--muted)",fontSize:"15px",lineHeight:1.8,marginBottom:"20px"}}>{p.desc}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"24px"}}>
                {p.tags.map(t=><span key={t} style={{fontSize:"12px",fontWeight:600,color:"var(--muted)",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",padding:"4px 12px",borderRadius:"20px"}}>{t}</span>)}
              </div>
              <Link href="/contact" className="btn-primary" style={{textDecoration:"none"}} onClick={()=>setModal(false)}>
                Start a Similar Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function PortfolioContent(){
  useAnimateOnScroll(150);
  const [cat,setCat]=useState("All");
  const filtered=cat==="All"?ALL_PROJECTS:ALL_PROJECTS.filter(p=>p.cat===cat);
  return(
    <>
      <section className="ax-section dark2">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>

          {/* Filter */}
          <div style={{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap",marginBottom:"48px"}} className="wow fadeInUp">
            {CATS.map(c=>(
              <button key={c} onClick={()=>setCat(c)}
                style={{padding:"9px 22px",borderRadius:"50px",fontSize:"11px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .25s",
                  background:cat===c?"var(--grad)":"transparent",color:cat===c?"#fff":"rgba(248,250,252,0.5)",
                  border:cat===c?"none":"1px solid rgba(255,255,255,0.12)",
                  boxShadow:cat===c?"0 4px 16px rgba(99,102,241,0.3)":"none"}}>
                {c} <span style={{opacity:.7}}>({c==="All"?ALL_PROJECTS.length:ALL_PROJECTS.filter(p=>p.cat===c).length})</span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((p,i)=><ProjectCard key={p.title} p={p} i={i}/>)}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="counter-section wow fadeIn" style={{backgroundImage:`url(${IMGS.counterBg})`}}>
        <div className="overlay"/>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{textAlign:"center"}}>
            {[["120+","Projects Delivered"],["95%","Client Retention"],["14","Industry Awards"],["4","Continents Served"]].map(([n,l],i)=>(
              <div key={l} className={`wow zoomIn d${i+1}`}>
                <div className="counter-num">{n}</div>
                <div className="counter-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section wow fadeIn" style={{backgroundImage:`url(${IMGS.ctaBg})`}}>
        <div className="overlay"/>
        <div style={{maxWidth:"600px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1,textAlign:"center"}}>
          <h2 className="wow fadeInUp" style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:800,color:"#f8fafc",marginBottom:"16px"}}>Your Project Could Be Next</h2>
          <p className="wow fadeInUp d1" style={{fontSize:"16px",color:"rgba(248,250,252,0.7)",marginBottom:"28px",lineHeight:1.7}}>We'd love to add your brand to our portfolio. Let's talk about what we can build together.</p>
          <Link href="/contact" className="btn-primary wow fadeInUp d2" style={{textDecoration:"none"}}>Start Your Project</Link>
        </div>
      </section>
      <Footer/>
    </>
  );
}
