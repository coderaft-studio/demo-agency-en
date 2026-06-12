"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import { useAnimateOnScroll } from "@/lib/hooks";
import { IMGS } from "@/lib/images";

const ServicesContent=dynamic(()=>import("./ServicesContent"),{ssr:false,loading:()=><div style={{minHeight:"60vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#111827"}}><div style={{width:"40px",height:"3px",background:"linear-gradient(90deg,#6366f1,#8b5cf6)",animation:"axl 1.2s ease-in-out infinite alternate",borderRadius:"3px"}}/><style>{`@keyframes axl{to{width:80px}}`}</style></div>});

export default function ServicesPage(){
  useAnimateOnScroll();
  return(
    <>
      <Navbar/>
      <section className="ax-hero" style={{backgroundImage:`url(${IMGS.hero2})`,minHeight:"50vh"}}>
        <div className="ax-hero-overlay"/>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1,paddingTop:"80px",width:"100%",textAlign:"center"}}>
          <p className="wow fadeInUp" style={{fontSize:"13px",fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px"}}>What We Do</p>
          <h1 className="wow fadeInUp d1" style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(36px,5.5vw,64px)",fontWeight:800,lineHeight:1.15,color:"#f8fafc",marginBottom:"16px"}}>Our <span style={{background:"var(--grad)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Services</span></h1>
          <p className="wow fadeInUp d2" style={{fontSize:"16px",lineHeight:1.7,color:"rgba(248,250,252,0.65)",maxWidth:"560px",margin:"0 auto"}}>End-to-end digital solutions designed to grow your business, strengthen your brand, and delight your users.</p>
        </div>
      </section>
      <ServicesContent/>
    </>
  );
}
