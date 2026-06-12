"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";
import { IMGS } from "@/lib/images";

const SERVICES=[
  {
    id:"web",icon:"💻",title:"Web Development",
    short:"Blazing-fast websites and web applications built to scale.",
    img:IMGS.portfolio1,
    desc:"We build performant, accessible, and maintainable web experiences using modern technology stacks. From marketing sites to complex SaaS platforms — we architect solutions that grow with your business.",
    deliverables:["Responsive website (all devices)","Custom CMS integration","Performance optimisation","SEO-ready architecture","Analytics & tracking setup","3-month post-launch support"],
    process:["Discovery & scoping","Wireframes & architecture","Design system creation","Development & QA","Launch & handover","Ongoing support"],
    tech:["React / Next.js","Node.js","PostgreSQL","AWS / Vercel","Prisma","Tailwind CSS"],
  },
  {
    id:"design",icon:"🎨",title:"UI/UX Design",
    short:"Interfaces people love — beautiful, intuitive, and conversion-focused.",
    img:IMGS.portfolio2,
    desc:"Great design is invisible. It guides users naturally, communicates clearly, and makes every interaction feel effortless. Our design process is rooted in user research, data, and a relentless pursuit of clarity.",
    deliverables:["User research & personas","Information architecture","Wireframes & prototypes","Full UI design system","Interaction design","Handoff documentation"],
    process:["User research","Competitive analysis","Wireframing","High-fidelity design","Prototype & test","Design handoff"],
    tech:["Figma","Principle","Framer","Maze","Hotjar","Lottie"],
  },
  {
    id:"app",icon:"📱",title:"App Development",
    short:"Native and cross-platform apps for iOS and Android.",
    img:IMGS.portfolio4,
    desc:"We build mobile applications that users actually want to use. From concept to App Store approval, we handle everything — including backend infrastructure, push notifications, and analytics.",
    deliverables:["iOS & Android apps","Backend API","Push notifications","App Store submission","Analytics integration","6-month support"],
    process:["Discovery & scoping","UX/UI design","Development sprints","Beta testing","Store submission","Monitoring"],
    tech:["React Native","Swift","Kotlin","Firebase","Expo","App Store Connect"],
  },
  {
    id:"brand",icon:"✦",title:"Brand Identity",
    short:"Visual identities that communicate who you are at a glance.",
    img:IMGS.portfolio3,
    desc:"Your brand is more than a logo. It's the whole impression you make — every touchpoint, every interaction, every pixel. We build brand identities that are strategic, distinctive, and built to last.",
    deliverables:["Brand strategy & positioning","Logo & visual system","Typography & colour palette","Brand guidelines (50+ pages)","Social media templates","Business collateral"],
    process:["Brand audit","Strategy workshop","Concept exploration","Design development","Guidelines creation","Brand launch"],
    tech:["Adobe Illustrator","Figma","InDesign","Brandbook","Notion","Zeroheight"],
  },
  {
    id:"marketing",icon:"📈",title:"Digital Marketing",
    short:"Campaigns that attract, engage, and convert.",
    img:IMGS.blog3,
    desc:"We design and execute multi-channel digital marketing strategies that deliver measurable results. From paid media to content marketing, every campaign is built around data and your specific growth goals.",
    deliverables:["Marketing strategy","Paid media management","Content strategy & creation","Email marketing","Conversion rate optimisation","Monthly reporting"],
    process:["Audit & research","Strategy development","Campaign setup","Launch & test","Optimise","Report & iterate"],
    tech:["Google Ads","Meta Ads","HubSpot","Klaviyo","Ahrefs","Looker Studio"],
  },
  {
    id:"seo",icon:"🔍",title:"SEO & Performance",
    short:"Higher rankings, faster load times, better Core Web Vitals.",
    img:IMGS.blog1,
    desc:"We approach SEO technically and holistically — fixing the foundation, building the content, and earning the links. Combined with performance optimisation, we help you rank higher and convert more visitors.",
    deliverables:["Full technical SEO audit","On-page optimisation","Core Web Vitals improvement","Link building strategy","Content gap analysis","Monthly performance reports"],
    process:["Technical audit","Competitor analysis","On-page fixes","Content planning","Link strategy","Reporting"],
    tech:["Ahrefs","Screaming Frog","Google Search Console","PageSpeed","Lighthouse","Semrush"],
  },
];

const PROCESS=[
  {num:"01",title:"Discovery",desc:"We start by deeply understanding your business, users, and goals. Research, stakeholder interviews, and competitive analysis inform everything that follows."},
  {num:"02",title:"Strategy",desc:"With a clear picture of the landscape, we craft a strategic plan. Timeline, scope, technology choices, and success metrics — all agreed before a pixel is designed."},
  {num:"03",title:"Design",desc:"Our designers create wireframes, then high-fidelity designs. Multiple rounds of feedback ensure we nail the vision before development begins."},
  {num:"04",title:"Build",desc:"Our engineers bring the designs to life with clean, tested, documented code. Weekly demos keep you informed and in control throughout."},
  {num:"05",title:"Launch",desc:"Rigorous QA across devices and browsers. We handle deployment, performance monitoring, and ensure everything works flawlessly at launch."},
  {num:"06",title:"Grow",desc:"We don't disappear after launch. Post-launch support, analytics review, and iterative improvements ensure your investment keeps paying off."},
];

export default function ServicesContent(){
  useAnimateOnScroll(150);
  const [active,setActive]=useState("web");
  const svc=SERVICES.find(s=>s.id===active)||SERVICES[0];

  return(
    <>
      {/* Services grid overview */}
      <section className="ax-section dark2">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">Full-Service</div>
            <h2>Everything You Need to Win Online</h2>
            <p>Six core capabilities, one integrated team. We cover the full digital spectrum so you never have to manage multiple agencies.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6" style={{marginBottom:"64px"}}>
            {SERVICES.map((s,i)=>(
              <div key={s.id} className={`feat-card wow fadeInUp d${(i%3)+1}`}
                style={{cursor:"pointer",borderColor:active===s.id?"rgba(99,102,241,0.5)":"",background:active===s.id?"rgba(99,102,241,0.08)":""}}
                onClick={()=>setActive(s.id)}>
                <div className="feat-icon" style={{background:active===s.id?"var(--grad)":"rgba(99,102,241,0.12)"}}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div style={{marginTop:"16px",fontSize:"11px",fontWeight:700,color:"var(--accent)",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Inter',sans-serif"}}>
                  {active===s.id ? "Selected ✓" : "Learn More →"}
                </div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="wow fadeInUp" style={{background:"rgba(99,102,241,0.05)",border:"1px solid rgba(99,102,241,0.2)",borderRadius:"20px",overflow:"hidden"}}>
            <div className="grid md:grid-cols-2 gap-0">
              <div style={{padding:"40px 48px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"20px"}}>
                  <div style={{width:"52px",height:"52px",borderRadius:"12px",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px"}}>{svc.icon}</div>
                  <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"24px",fontWeight:800,color:"#f8fafc"}}>{svc.title}</h3>
                </div>
                <p style={{color:"var(--muted)",fontSize:"15px",lineHeight:1.8,marginBottom:"28px"}}>{svc.desc}</p>

                <div style={{marginBottom:"24px"}}>
                  <div style={{fontSize:"11px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"12px"}}>What You Get</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px"}}>
                    {svc.deliverables.map(d=>(
                      <div key={d} style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",color:"var(--muted)"}}>
                        <span style={{width:"16px",height:"16px",borderRadius:"4px",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"8px",color:"#fff",fontWeight:900,flexShrink:0}}>✓</span>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{fontSize:"11px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"12px"}}>Tech Stack</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                    {svc.tech.map(t=>(
                      <span key={t} style={{fontSize:"11px",fontWeight:600,color:"var(--muted)",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",padding:"4px 12px",borderRadius:"20px"}}>{t}</span>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="btn-primary" style={{display:"inline-block",marginTop:"28px",textDecoration:"none"}}>
                  Get a Quote for {svc.title}
                </Link>
              </div>
              <div style={{position:"relative",minHeight:"320px"}}>
                <Image unoptimized src={svc.img} alt={svc.title} fill sizes="50vw" style={{objectFit:"cover"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to right, rgba(12,18,38,0.6), transparent)"}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="ax-section dark">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">How We Work</div>
            <h2>Our Process</h2>
            <p>A proven 6-step process refined over 120+ projects. No surprises, no ambiguity — just consistent, excellent results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROCESS.map((p,i)=>(
              <div key={p.num} className={`wow fadeInUp d${(i%3)+1}`}
                style={{padding:"28px",borderRadius:"14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",transition:"all .3s",position:"relative",overflow:"hidden"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(99,102,241,0.3)";e.currentTarget.style.background="rgba(99,102,241,0.05)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.background="rgba(255,255,255,0.03)";}}>
                <div style={{position:"absolute",top:"16px",right:"16px",fontSize:"40px",fontWeight:800,color:"rgba(99,102,241,0.1)",fontFamily:"'Inter',sans-serif",lineHeight:1}}>{p.num}</div>
                <div style={{width:"40px",height:"40px",borderRadius:"10px",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:800,color:"#fff",fontFamily:"'Inter',sans-serif",marginBottom:"16px"}}>{p.num}</div>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"18px",fontWeight:700,color:"#f8fafc",marginBottom:"10px"}}>{p.title}</h3>
                <p style={{color:"var(--muted)",fontSize:"14px",lineHeight:1.7,margin:0}}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ax-section dark2">
        <div style={{maxWidth:"800px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">Common Questions</div>
            <h2>Service FAQ</h2>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
            {[
              {q:"How long does a typical project take?",a:"Timelines vary by scope. A 5-page website typically takes 4–6 weeks. A complex SaaS platform or full brand identity can take 3–6 months. We'll give you a precise timeline after the discovery call."},
              {q:"Do you work with startups or only established companies?",a:"Both. We love working with early-stage companies building from scratch, and established businesses looking to level up. The key is a clear brief and a willingness to collaborate closely."},
              {q:"Can we engage you for just one service?",a:"Absolutely. You can hire us purely for design, purely for development, or for any single service. Many clients start with one engagement and expand as the relationship develops."},
              {q:"What does your post-launch support cover?",a:"All projects include a minimum 1-month post-launch support period (Business and Enterprise plans include more). This covers bug fixes, minor content updates, and performance monitoring."},
              {q:"How do you handle revisions?",a:"We build structured revision rounds into every project. You'll never be surprised by extra charges for reasonable feedback. We work iteratively and want you to love the outcome."},
            ].map((item,i)=>(
              <FaqItem key={i} q={item.q} a={item.a} i={i}/>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section wow fadeIn" style={{backgroundImage:`url(${IMGS.ctaBg})`}}>
        <div className="overlay"/>
        <div style={{maxWidth:"600px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1,textAlign:"center"}}>
          <h2 className="wow fadeInUp" style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:800,color:"#f8fafc",marginBottom:"16px"}}>Ready to Get Started?</h2>
          <p className="wow fadeInUp d1" style={{fontSize:"16px",color:"rgba(248,250,252,0.7)",marginBottom:"28px",lineHeight:1.7}}>Book a free 30-minute consultation. No pressure, no sales pitch — just a genuine conversation about your project.</p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}} className="wow fadeInUp d2">
            <Link href="/contact" className="btn-primary">Book Free Consultation</Link>
            <Link href="/pricing" className="btn-outline">View Pricing</Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

function FaqItem({q,a,i}){
  const [open,setOpen]=useState(false);
  return(
    <div className={`wow fadeInUp d${(i%3)+1}`}
      style={{borderRadius:"12px",background:"rgba(255,255,255,0.03)",border:`1px solid ${open?"rgba(99,102,241,0.3)":"rgba(255,255,255,0.07)"}`,overflow:"hidden",transition:"border-color .3s"}}>
      <button onClick={()=>setOpen(!open)}
        style={{width:"100%",padding:"20px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",cursor:"pointer",textAlign:"left",gap:"16px"}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:"15px",fontWeight:600,color:"#f8fafc"}}>{q}</span>
        <span style={{fontSize:"20px",color:"var(--accent)",flexShrink:0,transition:"transform .3s",transform:open?"rotate(45deg)":"none",fontWeight:300}}>+</span>
      </button>
      {open&&<div style={{padding:"0 24px 20px",fontSize:"14px",color:"var(--muted)",lineHeight:1.8}}>{a}</div>}
    </div>
  );
}
