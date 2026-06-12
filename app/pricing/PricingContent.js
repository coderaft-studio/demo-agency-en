"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";
import { IMGS } from "@/lib/images";

const G="#6366f1";
const PLANS=[
  {name:"Starter",price:{monthly:999,annual:849},period:"one-time",icon:"🚀",featured:false,
    features:["5-page Website","Responsive Design","Basic SEO Setup","Contact Form","Google Analytics","1-month Support"],
    missing:["Custom UI/UX Design","CMS Integration","Brand Identity Kit","App Development"],
    cta:"Get Started"},
  {name:"Business",price:{monthly:2499,annual:2099},period:"one-time",icon:"⚡",featured:true,badge:"Most Popular",
    features:["Up to 15 pages","Custom UI/UX Design","Advanced SEO","CMS Integration","Brand Identity Kit","3-month Support","Analytics Dashboard","Performance Optimisation"],
    missing:[],cta:"Start Project"},
  {name:"Enterprise",price:{monthly:"Custom",annual:"Custom"},period:"tailored",icon:"🏆",featured:false,
    features:["Unlimited Pages","Full Brand Strategy","App Development","Dedicated Manager","Performance Marketing","12-month Retainer","Priority 24/7 Support","Custom Integrations"],
    missing:[],cta:"Let's Talk"},
];

const COMPARE_FEATURES=[
  {label:"Number of Pages",starter:"5",business:"15",enterprise:"Unlimited"},
  {label:"UI/UX Design",starter:"Template",business:"Custom",enterprise:"Custom"},
  {label:"CMS Integration",starter:"✗",business:"✓",enterprise:"✓"},
  {label:"Brand Identity Kit",starter:"✗",business:"✓",enterprise:"✓"},
  {label:"App Development",starter:"✗",business:"✗",enterprise:"✓"},
  {label:"SEO Optimisation",starter:"Basic",business:"Advanced",enterprise:"Full"},
  {label:"Support Period",starter:"1 month",business:"3 months",enterprise:"12 months"},
  {label:"Dedicated Manager",starter:"✗",business:"✗",enterprise:"✓"},
  {label:"Performance Marketing",starter:"✗",business:"✗",enterprise:"✓"},
  {label:"Response Time",starter:"48hrs",business:"24hrs",enterprise:"4hrs"},
];

const FAQS=[
  {q:"Are there any setup or hidden fees?",a:"No. The price you see is the price you pay. We'll give you a detailed breakdown in the proposal so there are never any surprises."},
  {q:"Can I customise a plan?",a:"Absolutely. These tiers are starting points. We can add or remove deliverables to create a package that fits your exact needs and budget."},
  {q:"Do you offer payment plans?",a:"Yes. For projects over $2,000, we offer a 50/25/25 split — 50% at project kick-off, 25% at design approval, 25% at launch."},
  {q:"What if I need more pages later?",a:"Additional pages can be added at $150–$350 each depending on complexity. We'll quote you before we begin so you always know the cost."},
  {q:"Is there a minimum contract length?",a:"No minimum contracts for project work. For ongoing retainer arrangements (usually part of Enterprise), we recommend a 3-month minimum to see meaningful results."},
  {q:"What's your refund policy?",a:"If we haven't started design work, you're entitled to a full refund. After design approval, we retain the deposit. We're flexible and fair — we've never had a dispute."},
];

export default function PricingContent(){
  useAnimateOnScroll(150);
  const [annual,setAnnual]=useState(false);
  return(
    <>
      {/* Plans */}
      <section style={{padding:"100px 0",background:"linear-gradient(180deg,#0a0f1e 0%,#111827 50%,#0a0f1e 100%)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"600px",height:"400px",background:"radial-gradient(ellipse,rgba(99,102,241,0.07),transparent 70%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:"1100px",margin:"0 auto",padding:"0 24px",position:"relative"}}>

          {/* Toggle */}
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"12px",marginBottom:"56px"}} className="wow fadeInUp">
            <span style={{fontSize:"13px",fontWeight:600,color:!annual?"#f8fafc":"var(--muted)",fontFamily:"'Inter',sans-serif"}}>Monthly</span>
            <button onClick={()=>setAnnual(!annual)}
              style={{width:"48px",height:"26px",borderRadius:"13px",background:annual?"var(--grad)":"rgba(255,255,255,0.15)",border:"none",cursor:"pointer",position:"relative",transition:"background .3s"}}>
              <span style={{position:"absolute",top:"3px",left:annual?"22px":"3px",width:"20px",height:"20px",borderRadius:"50%",background:"#fff",transition:"left .3s"}}/>
            </button>
            <span style={{fontSize:"13px",fontWeight:600,color:annual?"#f8fafc":"var(--muted)",fontFamily:"'Inter',sans-serif"}}>Annual</span>
            {annual&&<span style={{fontSize:"11px",fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.2)",padding:"3px 10px",borderRadius:"20px"}}>Save 15%</span>}
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px",alignItems:"stretch"}}>
            {PLANS.map((plan,i)=>{
              const isF=plan.featured;
              const price=typeof plan.price.monthly==="number" ? (annual ? `$${plan.price.annual.toLocaleString()}` : `$${plan.price.monthly.toLocaleString()}`) : "Custom";
              return(
                <div key={plan.name} className={`wow flipInX d${i+1}`}
                  style={{position:"relative",borderRadius:"20px",overflow:"hidden",
                    background:isF?"linear-gradient(145deg,#1a1f3a,#141830)":"rgba(255,255,255,0.03)",
                    border:isF?"1px solid rgba(99,102,241,0.5)":"1px solid rgba(255,255,255,0.08)",
                    boxShadow:isF?"0 0 80px rgba(99,102,241,0.15),inset 0 1px 0 rgba(99,102,241,0.2)":"none",
                    transform:isF?"translateY(-16px)":"none",
                    display:"flex",flexDirection:"column"}}>
                  <div style={{height:"4px",background:isF?"var(--grad)":"rgba(255,255,255,0.07)"}}/>
                  <div style={{padding:"32px 28px 28px",display:"flex",flexDirection:"column",flex:1}}>
                    {plan.badge&&<div style={{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"9px",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:G,background:"rgba(99,102,241,0.12)",border:"1px solid rgba(99,102,241,0.25)",padding:"5px 14px",borderRadius:"20px",marginBottom:"20px",width:"fit-content"}}>🔥 {plan.badge}</div>}
                    <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"}}>
                      <div style={{width:"44px",height:"44px",borderRadius:"10px",background:isF?"var(--grad)":"rgba(99,102,241,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>{plan.icon}</div>
                      <div style={{fontSize:"11px",fontWeight:800,letterSpacing:"0.2em",textTransform:"uppercase",color:isF?G:"rgba(248,250,252,0.45)",fontFamily:"'Inter',sans-serif"}}>{plan.name}</div>
                    </div>
                    <div style={{marginBottom:"24px",paddingBottom:"24px",borderBottom:`1px solid ${isF?"rgba(99,102,241,0.15)":"rgba(255,255,255,0.06)"}`}}>
                      <div style={{display:"flex",alignItems:"flex-end",gap:"4px",lineHeight:1}}>
                        {price!=="Custom"&&<span style={{fontSize:"18px",fontWeight:400,color:"rgba(248,250,252,0.5)",paddingBottom:"8px"}}>$</span>}
                        <span style={{fontSize:price==="Custom"?"42px":"52px",fontWeight:100,color:"#f8fafc",fontFamily:"'Inter',sans-serif"}}>{price==="Custom"?"Custom":price.replace("$","")}</span>
                        <span style={{fontSize:"12px",color:"rgba(248,250,252,0.4)",paddingBottom:"8px",paddingLeft:"2px"}}>/ {plan.period}</span>
                      </div>
                      {isF&&annual&&<p style={{fontSize:"11px",color:"rgba(99,102,241,0.8)",marginTop:"8px",fontFamily:"'Inter',sans-serif"}}>💡 You're saving $400 with annual</p>}
                    </div>
                    <ul style={{listStyle:"none",padding:0,margin:"0 0 28px",flex:1,display:"flex",flexDirection:"column"}}>
                      {plan.features.map(ft=>(
                        <li key={ft} style={{fontSize:"13px",color:isF?"rgba(248,250,252,0.85)":"rgba(248,250,252,0.55)",padding:"9px 0",display:"flex",alignItems:"center",gap:"10px",borderBottom:`1px solid ${isF?"rgba(99,102,241,0.08)":"rgba(255,255,255,0.04)"}`,fontFamily:"'Source Sans 3',sans-serif"}}>
                          <span style={{width:"18px",height:"18px",borderRadius:"5px",flexShrink:0,background:isF?"var(--grad)":"rgba(99,102,241,0.12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:900,color:isF?"#fff":G}}>✓</span>{ft}
                        </li>
                      ))}
                      {plan.missing.map(ft=>(
                        <li key={ft} style={{fontSize:"13px",color:"rgba(248,250,252,0.2)",padding:"9px 0",display:"flex",alignItems:"center",gap:"10px",textDecoration:"line-through",borderBottom:"1px solid rgba(255,255,255,0.04)",fontFamily:"'Source Sans 3',sans-serif"}}>
                          <span style={{width:"18px",height:"18px",borderRadius:"5px",flexShrink:0,background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",color:"rgba(248,250,252,0.2)"}}>✕</span>{ft}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" style={{display:"block",textAlign:"center",textDecoration:"none",padding:"14px",borderRadius:"10px",fontSize:"11px",fontWeight:800,letterSpacing:"0.18em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif",transition:"all .3s",background:isF?"var(--grad)":"transparent",color:isF?"#fff":"rgba(248,250,252,0.65)",border:isF?"none":"1px solid rgba(255,255,255,0.15)",boxShadow:isF?"0 4px 24px rgba(99,102,241,0.4)":"none"}}
                      onMouseEnter={e=>{if(!isF){e.currentTarget.style.borderColor=G;e.currentTarget.style.color=G;}else e.currentTarget.style.opacity="0.85";}}
                      onMouseLeave={e=>{if(!isF){e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";e.currentTarget.style.color="rgba(248,250,252,0.65)";}else e.currentTarget.style.opacity="1";}}>
                      {plan.cta}{isF&&" →"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="wow fadeIn" style={{textAlign:"center",color:"rgba(248,250,252,0.25)",fontSize:"12px",marginTop:"36px",fontFamily:"'Inter',sans-serif",letterSpacing:"0.05em"}}>
            All plans include SSL setup, onboarding call, and 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="ax-section dark2">
        <div style={{maxWidth:"1000px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">Compare Plans</div>
            <h2>Full Feature Comparison</h2>
          </div>
          <div className="wow fadeInUp" style={{borderRadius:"16px",overflow:"hidden",border:"1px solid rgba(255,255,255,0.08)"}}>
            <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",background:"rgba(99,102,241,0.08)",padding:"16px 24px",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
              <div style={{fontSize:"11px",fontWeight:700,color:"var(--muted)",letterSpacing:"0.15em",textTransform:"uppercase"}}>Feature</div>
              {["Starter","Business","Enterprise"].map((p,i)=>(
                <div key={p} style={{textAlign:"center",fontSize:"12px",fontWeight:800,color:i===1?"var(--accent)":"rgba(248,250,252,0.7)",fontFamily:"'Inter',sans-serif",letterSpacing:"0.1em",textTransform:"uppercase"}}>{p}</div>
              ))}
            </div>
            {COMPARE_FEATURES.map((row,i)=>(
              <div key={row.label} style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",padding:"14px 24px",borderBottom:"1px solid rgba(255,255,255,0.05)",background:i%2===0?"transparent":"rgba(255,255,255,0.02)"}}>
                <div style={{fontSize:"13px",color:"var(--muted)"}}>{row.label}</div>
                {[row.starter,row.business,row.enterprise].map((val,j)=>(
                  <div key={j} style={{textAlign:"center",fontSize:"13px",color:val==="✓"?"var(--accent)":val==="✗"?"rgba(248,250,252,0.25)":j===1?"rgba(248,250,252,0.9)":"rgba(248,250,252,0.6)",fontWeight:val==="✓"||val==="✗"?"700":"400"}}>{val}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ax-section dark">
        <div style={{maxWidth:"800px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">Questions</div>
            <h2>Pricing FAQ</h2>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            {FAQS.map((item,i)=><FaqItem key={i} q={item.q} a={item.a} i={i}/>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section wow fadeIn" style={{backgroundImage:`url(${IMGS.ctaBg})`}}>
        <div className="overlay"/>
        <div style={{maxWidth:"600px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1,textAlign:"center"}}>
          <h2 className="wow fadeInUp" style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:800,color:"#f8fafc",marginBottom:"16px"}}>Not Sure Which Plan?</h2>
          <p className="wow fadeInUp d1" style={{fontSize:"16px",color:"rgba(248,250,252,0.7)",marginBottom:"28px",lineHeight:1.7}}>Book a free 30-minute call. We'll assess your needs and recommend the right approach — honestly.</p>
          <Link href="/contact" className="btn-primary wow fadeInUp d2" style={{textDecoration:"none"}}>Book Free Consultation</Link>
        </div>
      </section>
      <Footer/>
    </>
  );
}

function FaqItem({q,a,i}){
  const [open,setOpen]=useState(false);
  return(
    <div className={`wow fadeInUp d${(i%3)+1}`} style={{borderRadius:"12px",background:"rgba(255,255,255,0.03)",border:`1px solid ${open?"rgba(99,102,241,0.3)":"rgba(255,255,255,0.07)"}`,overflow:"hidden",transition:"border-color .3s"}}>
      <button onClick={()=>setOpen(!open)} style={{width:"100%",padding:"20px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",cursor:"pointer",textAlign:"left",gap:"16px"}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:"15px",fontWeight:600,color:"#f8fafc"}}>{q}</span>
        <span style={{fontSize:"20px",color:"var(--accent)",flexShrink:0,transition:"transform .3s",transform:open?"rotate(45deg)":"none",fontWeight:300}}>+</span>
      </button>
      {open&&<div style={{padding:"0 24px 20px",fontSize:"14px",color:"var(--muted)",lineHeight:1.8}}>{a}</div>}
    </div>
  );
}
