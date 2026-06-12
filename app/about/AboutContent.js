"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";
import { IMGS } from "@/lib/images";

const VALUES=[
  {icon:"🎯",title:"Purpose-Driven",desc:"Every project starts with a clear understanding of your goals. We don't just build — we build for a reason."},
  {icon:"🔬",title:"Research-First",desc:"We never assume. Deep discovery, user research, and competitive analysis inform every design and development decision."},
  {icon:"🤝",title:"True Partnership",desc:"You're not a client number. We work alongside you as a committed partner, invested in your long-term success."},
  {icon:"⚡",title:"Bias to Action",desc:"Ideas are worthless without execution. We move fast, iterate quickly, and deliver with precision."},
  {icon:"📐",title:"Craft Obsessed",desc:"We sweat the details others ignore — from micro-interactions to load times to the perfect font pairing."},
  {icon:"🌱",title:"Always Evolving",desc:"The digital world never stops changing. Neither do we. We invest heavily in staying ahead of every curve."},
];

const TIMELINE=[
  {year:"2017",title:"Founded in Brooklyn",desc:"Two designers and a developer in a shared office space — with a big idea and very little budget. The beginning of everything."},
  {year:"2018",title:"First Enterprise Client",desc:"Landed our first Fortune 500 brand identity project. Proved that boutique agencies can compete at the highest level."},
  {year:"2019",title:"Team of 10",desc:"Grew to a team of 10 across design, development and strategy. Moved to our first proper studio in New York."},
  {year:"2020",title:"Went Remote-First",desc:"Built robust remote infrastructure and expanded globally. Our talent pool grew from New York to the world."},
  {year:"2022",title:"Agency of the Year",desc:"Recognised as Digital Agency of the Year by the New York Design Awards. 60+ active clients across 12 countries."},
  {year:"2024",title:"120+ Projects Delivered",desc:"Crossed the 120-project milestone with a 94% client retention rate and 14 industry awards. The journey continues."},
];

const TEAM=[
  {img:IMGS.team1,name:"Alex Morgan",role:"Creative Director & Co-Founder",bio:"15 years in brand strategy and visual design. Previously at Pentagram and Wieden+Kennedy. Obsessed with typography and the intersection of art and commerce.",skills:["Brand Strategy","Visual Design","Creative Direction"]},
  {img:IMGS.team2,name:"Jordan Chen",role:"Technical Lead & Co-Founder",bio:"Full-stack engineer with a focus on performance and scalability. Built products used by millions. Believes great code is invisible — you only notice it when it's missing.",skills:["React","Node.js","System Architecture"]},
  {img:IMGS.team3,name:"Sam Williams",role:"Head of Strategy",bio:"Growth strategist who has helped companies from early-stage to IPO. Former consultant at McKinsey. Translates complex business goals into clear digital roadmaps.",skills:["Digital Strategy","Analytics","Growth Marketing"]},
];

const AWARDS=[
  {year:"2024",award:"Best Digital Agency — NY Design Awards"},
  {year:"2023",award:"Agency of the Year — Awwwards"},
  {year:"2023",award:"FWA Site of the Day"},
  {year:"2022",award:"CSS Design Awards — Special Kudos"},
  {year:"2022",award:"Webby Award — Best Agency Website"},
  {year:"2021",award:"Communication Arts Interactive Award"},
];

export default function AboutContent(){
  useAnimateOnScroll(150);
  return(
    <>
      {/* Story */}
      <section className="ax-section dark">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="wow fadeInLeft">
              <div style={{position:"relative",borderRadius:"16px",overflow:"hidden"}}>
                <Image unoptimized src={IMGS.about} alt="About Axiom" width={580} height={680} style={{width:"100%",height:"auto"}}/>
                <div style={{position:"absolute",bottom:"24px",right:"24px",background:"var(--grad)",borderRadius:"12px",padding:"20px 24px",textAlign:"center"}}>
                  <div style={{fontFamily:"'Inter',sans-serif",fontSize:"36px",fontWeight:800,color:"#fff",lineHeight:1}}>8+</div>
                  <div style={{fontSize:"11px",fontWeight:600,color:"rgba(255,255,255,0.85)",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:"4px"}}>Years Strong</div>
                </div>
              </div>
            </div>
            <div className="wow fadeInRight">
              <div className="tag" style={{display:"inline-block",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px",background:"rgba(99,102,241,0.1)",padding:"4px 14px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Our Story</div>
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(28px,3.5vw,40px)",fontWeight:800,color:"#f8fafc",marginBottom:"20px"}}>We started small.<br/>We think big.</h2>
              <div className="separator"/>
              <p style={{color:"var(--muted)",fontSize:"15px",lineHeight:1.8,marginBottom:"16px"}}>Axiom Studio was founded in 2017 by two designers and a developer who believed that great digital work requires equal parts craft and strategy — and that boutique agencies could outperform large networks when it counts.</p>
              <p style={{color:"var(--muted)",fontSize:"15px",lineHeight:1.8,marginBottom:"16px"}}>We've grown from a 3-person team in Brooklyn to an 18-person studio with clients across North America, Europe and Asia Pacific. Our team includes award-winning designers, full-stack engineers, brand strategists, and growth marketers.</p>
              <p style={{color:"var(--muted)",fontSize:"15px",lineHeight:1.8,marginBottom:"32px"}}>What hasn't changed is our core belief: exceptional work comes from exceptional people who care deeply about the outcome. We don't do cookie-cutter. We don't do average. And we never stop at "good enough."</p>
              <div style={{display:"flex",gap:"32px",flexWrap:"wrap"}}>
                {[["120+","Projects"],["95%","Retention Rate"],["4","Continents"]].map(([n,l])=>(
                  <div key={l}>
                    <div style={{fontFamily:"'Inter',sans-serif",fontSize:"32px",fontWeight:800,background:"var(--grad)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{n}</div>
                    <div style={{fontSize:"12px",color:"var(--muted)",letterSpacing:"0.1em",textTransform:"uppercase"}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="ax-section dark2">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">What Drives Us</div>
            <h2>Our Core Values</h2>
            <p>These aren't wall posters. They're the principles that guide every decision we make, every project we take on.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v,i)=>(
              <div key={v.title} className={`feat-card wow fadeInUp d${(i%3)+1}`}>
                <div className="feat-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="ax-section dark">
        <div style={{maxWidth:"960px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">Our Journey</div>
            <h2>How We Got Here</h2>
          </div>
          <div style={{position:"relative"}}>
            <div style={{position:"absolute",left:"50%",top:0,bottom:0,width:"1px",background:"rgba(99,102,241,0.2)",transform:"translateX(-50%)"}}/>
            {TIMELINE.map((item,i)=>{
              const isLeft=i%2===0;
              const panel=<div style={{padding:"24px",background:"rgba(99,102,241,0.05)",border:"1px solid rgba(99,102,241,0.15)",borderRadius:"12px"}}><div style={{fontSize:"11px",fontWeight:800,letterSpacing:"0.2em",color:"var(--accent)",marginBottom:"8px",fontFamily:"'Inter',sans-serif"}}>{item.year}</div><h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"18px",fontWeight:700,color:"#f8fafc",marginBottom:"8px"}}>{item.title}</h3><p style={{color:"var(--muted)",fontSize:"14px",lineHeight:1.7,margin:0}}>{item.desc}</p></div>;
              return(
                <div key={item.year} className="wow fadeInUp" style={{display:"flex",marginBottom:"32px",alignItems:"flex-start"}}>
                  <div style={{flex:1,paddingRight:"36px",textAlign:"right"}}>{isLeft&&panel}</div>
                  <div style={{width:"44px",flexShrink:0,display:"flex",justifyContent:"center",paddingTop:"8px",position:"relative",zIndex:1}}>
                    <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:800,color:"#fff",fontFamily:"'Inter',sans-serif"}}>{i+1}</div>
                  </div>
                  <div style={{flex:1,paddingLeft:"36px"}}>{!isLeft&&panel}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="ax-section dark2">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="wow fadeInLeft">
              <div className="tag" style={{display:"inline-block",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px",background:"rgba(99,102,241,0.1)",padding:"4px 14px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Our Culture</div>
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(28px,3.5vw,40px)",fontWeight:800,color:"#f8fafc",marginBottom:"20px"}}>A place where<br/>craft thrives</h2>
              <div className="separator"/>
              <p style={{color:"var(--muted)",fontSize:"15px",lineHeight:1.8,marginBottom:"16px"}}>We believe that the best work comes from people who feel trusted, energised and genuinely excited about what they're building. Our studio is built on respect, creative freedom, and a shared hunger to do excellent work.</p>
              <p style={{color:"var(--muted)",fontSize:"15px",lineHeight:1.8,marginBottom:"28px"}}>We're fully remote-friendly, results-oriented (not hours-oriented), and deeply committed to continuous learning. Quarterly team retreats, a generous learning budget, and a culture of open feedback keep us sharp and aligned.</p>
              <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
                {["Remote-friendly with quarterly retreats","Unlimited learning & conference budget","Results-focused culture — no micromanagement","Collaborative creative environment"].map(b=>(
                  <div key={b} style={{display:"flex",alignItems:"center",gap:"12px",fontSize:"14px",color:"var(--muted)"}}>
                    <span style={{width:"20px",height:"20px",borderRadius:"6px",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:900,color:"#fff",flexShrink:0}}>✓</span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="wow fadeInRight">
              <div style={{borderRadius:"16px",overflow:"hidden"}}>
                <Image unoptimized src={IMGS.teamCulture} alt="Team culture" width={580} height={420} style={{width:"100%",height:"auto"}}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="ax-section dark">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">The Founders</div>
            <h2>Meet the Leadership</h2>
            <p>The people who started it all — and still do the work every day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((m,i)=>(
              <div key={m.name} className={`wow fadeInUp d${i+1}`} style={{borderRadius:"16px",overflow:"hidden",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",transition:"all .3s"}}
                onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(99,102,241,0.3)"}
                onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"}>
                <Image unoptimized src={m.img} alt={m.name} width={380} height={260} style={{width:"100%",height:"260px",objectFit:"cover",display:"block"}}/>
                <div style={{padding:"24px"}}>
                  <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"18px",fontWeight:700,color:"#f8fafc",marginBottom:"4px"}}>{m.name}</h3>
                  <p style={{fontSize:"12px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"}}>{m.role}</p>
                  <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.7,marginBottom:"16px"}}>{m.bio}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                    {m.skills.map(s=>(
                      <span key={s} style={{fontSize:"11px",fontWeight:600,color:"var(--accent)",background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.15)",padding:"3px 10px",borderRadius:"20px"}}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="ax-section dark2">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">Recognition</div>
            <h2>Awards & Accolades</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {AWARDS.map((a,i)=>(
              <div key={a.award} className={`wow fadeInUp d${(i%2)+1}`}
                style={{display:"flex",alignItems:"center",gap:"16px",padding:"20px 24px",borderRadius:"12px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",transition:"all .3s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(99,102,241,0.3)";e.currentTarget.style.background="rgba(99,102,241,0.05)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.background="rgba(255,255,255,0.03)";}}>
                <div style={{width:"44px",height:"44px",borderRadius:"10px",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",flexShrink:0}}>🏆</div>
                <div>
                  <div style={{fontSize:"11px",fontWeight:700,color:"var(--accent)",letterSpacing:"0.1em",marginBottom:"4px"}}>{a.year}</div>
                  <div style={{fontFamily:"'Inter',sans-serif",fontSize:"15px",fontWeight:600,color:"#f8fafc"}}>{a.award}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section wow fadeIn" style={{backgroundImage:`url(${IMGS.ctaBg})`}}>
        <div className="overlay"/>
        <div style={{maxWidth:"600px",margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1,textAlign:"center"}}>
          <h2 className="wow fadeInUp" style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(28px,4vw,44px)",fontWeight:800,color:"#f8fafc",marginBottom:"16px"}}>Like What You See?</h2>
          <p className="wow fadeInUp d1" style={{fontSize:"16px",color:"rgba(248,250,252,0.7)",marginBottom:"28px",lineHeight:1.7}}>Let's build something great together. We'd love to hear about your project.</p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}} className="wow fadeInUp d2">
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
            <Link href="/portfolio" className="btn-outline">See Our Work</Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
