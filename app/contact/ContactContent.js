"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";
import { IMGS } from "@/lib/images";

const G="#6366f1";
const INPUT={display:"block",width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",padding:"13px 16px",fontSize:"14px",color:"#f8fafc",outline:"none",fontFamily:"'Source Sans 3',sans-serif",boxSizing:"border-box",transition:"border-color .25s, background .25s"};

const SERVICES_LIST=["UI/UX Design","Web Development","App Development","Brand Identity","Digital Marketing","SEO & Performance","Full Package","Not Sure Yet"];

const FAQS=[
  {q:"How quickly can you start?",a:"We typically begin new projects within 1–2 weeks. For urgent requests, we can often accommodate faster start dates — just let us know in your message."},
  {q:"Do you work with clients outside the US?",a:"Absolutely. Around 40% of our clients are based outside North America. We're fully remote-capable with clients in Europe, Asia Pacific, and the Middle East."},
  {q:"What's the minimum project budget?",a:"Our smallest engagements start at around $999. For full branding + web development projects, budgets typically start at $2,500–$5,000 depending on scope."},
  {q:"Do you offer retainer/ongoing relationships?",a:"Yes — and we encourage it. Ongoing retainer clients get priority access to our team, faster turnaround times, and consistent strategic support. Retainers start from $1,500/month."},
];

export default function ContactContent(){
  useAnimateOnScroll(150);
  const [form,setForm]=useState({name:"",email:"",company:"",service:"",budget:"",message:""});
  const [sent,setSent]=useState(false);
  const f=k=>e=>setForm(p=>({...p,[k]:e.target.value}));

  return(
    <>
      {/* Contact section */}
      <section className="ax-section dark">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>

          {/* Info cards */}
          <div className="grid md:grid-cols-4 gap-4" style={{marginBottom:"64px"}}>
            {[
              {icon:"📍",label:"Office",val:"42 Design Street, Suite 300\nNew York, NY 10012",fx:"fadeInLeft"},
              {icon:"📞",label:"Phone",val:"+1 (212) 555-0178\n+1 (212) 555-0179",fx:"fadeInLeft"},
              {icon:"✉", label:"Email",val:"hello@axiomstudio.co\nnew-projects@axiomstudio.co",fx:"fadeInRight"},
              {icon:"🕐",label:"Office Hours",val:"Mon–Fri: 9am – 6pm EST\nWeekends by appointment",fx:"fadeInRight"},
            ].map(c=>(
              <div key={c.label} className={`wow ${c.fx}`}
                style={{textAlign:"center",padding:"28px 20px",borderRadius:"14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",transition:"all .3s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(99,102,241,0.3)";e.currentTarget.style.background="rgba(99,102,241,0.05)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.background="rgba(255,255,255,0.03)";}}>
                <div style={{width:"52px",height:"52px",borderRadius:"12px",border:`1px solid rgba(99,102,241,0.3)`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:"22px",color:G}}>{c.icon}</div>
                <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"12px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"8px",color:"#f8fafc"}}>{c.label}</h3>
                <p style={{fontSize:"13px",lineHeight:1.7,color:"var(--muted)",whiteSpace:"pre-line"}}>{c.val}</p>
              </div>
            ))}
          </div>

          {/* Main form area */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: info */}
            <div className="wow fadeInLeft">
              <div className="tag" style={{display:"inline-block",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:G,marginBottom:"16px",background:"rgba(99,102,241,0.1)",padding:"4px 14px",borderRadius:"20px",border:`1px solid rgba(99,102,241,0.2)`}}>Start a Project</div>
              <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(26px,3.5vw,38px)",fontWeight:800,color:"#f8fafc",marginBottom:"20px"}}>Let's build something<br/>great together</h2>
              <div className="separator"/>
              <p style={{color:"var(--muted)",fontSize:"15px",lineHeight:1.8,marginBottom:"24px"}}>Tell us about your project. The more context you share, the better our initial response. We typically come back with a brief assessment, estimated timeline, and ballpark budget within 24 hours.</p>

              {/* What to expect */}
              <div style={{marginBottom:"28px"}}>
                <h4 style={{fontFamily:"'Inter',sans-serif",fontSize:"13px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:G,marginBottom:"16px"}}>What to Expect</h4>
                {[
                  {step:"01",title:"We reply within 24 hours",desc:"A human response — not a bot. We'll ask smart questions to understand your project."},
                  {step:"02",title:"Free 30-min discovery call",desc:"We get on a call to align on goals, timeline, and budget. No sales pressure."},
                  {step:"03",title:"Detailed proposal",desc:"A scoped proposal with timeline, deliverables, and fixed pricing. No surprises."},
                  {step:"04",title:"Project kick-off",desc:"Once approved, we start within 1–2 weeks. Your journey with Axiom begins."},
                ].map(item=>(
                  <div key={item.step} style={{display:"flex",gap:"14px",marginBottom:"16px"}}>
                    <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:800,color:"#fff",fontFamily:"'Inter',sans-serif",flexShrink:0}}>{item.step}</div>
                    <div>
                      <div style={{fontFamily:"'Inter',sans-serif",fontSize:"14px",fontWeight:700,color:"#f8fafc",marginBottom:"2px"}}>{item.title}</div>
                      <div style={{fontSize:"13px",color:"var(--muted)"}}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{padding:"20px 24px",borderRadius:"12px",background:"rgba(99,102,241,0.06)",border:`1px solid rgba(99,102,241,0.15)`}}>
                <p style={{fontSize:"13px",color:"var(--muted)",lineHeight:1.7,marginBottom:"12px"}}>Prefer to talk directly? Book a call at a time that suits you.</p>
                <a href="#" onClick={e=>e.preventDefault()} style={{fontSize:"12px",fontWeight:700,color:G,letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none"}}>Schedule a Call →</a>
              </div>
            </div>

            {/* Right: form */}
            <div className="wow fadeInRight">
              {sent?(
                <div style={{textAlign:"center",padding:"60px 0"}}>
                  <div style={{width:"64px",height:"64px",borderRadius:"14px",background:"var(--grad)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:"24px"}}>✓</div>
                  <h3 style={{fontFamily:"'Inter',sans-serif",fontSize:"26px",fontWeight:800,color:"#f8fafc",marginBottom:"12px"}}>Message sent!</h3>
                  <p style={{color:"var(--muted)",marginBottom:"28px",lineHeight:1.7}}>Thanks for reaching out. We'll review your project brief and get back to you within 24 hours with an initial response.</p>
                  <button onClick={()=>setSent(false)} className="btn-outline">Send Another</button>
                </div>
              ):(
                <form onSubmit={e=>{e.preventDefault();setSent(true);}}>
                  <div className="grid md:grid-cols-2 gap-x-6">
                    {[
                      {k:"name",    l:"Full Name",    ph:"Your name",     type:"text",  req:true},
                      {k:"email",   l:"Work Email",   ph:"you@company.co",type:"email", req:true},
                    ].map(fi=>(
                      <div key={fi.k} style={{marginBottom:"20px"}}>
                        <label style={{display:"block",fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:G,marginBottom:"8px",fontFamily:"'Inter',sans-serif"}}>{fi.l}</label>
                        <input required={fi.req} type={fi.type} placeholder={fi.ph} value={form[fi.k]} onChange={f(fi.k)} style={{...INPUT,colorScheme:"dark"}}
                          onFocus={e=>{e.target.style.borderColor=G;e.target.style.background="rgba(99,102,241,0.05)";}}
                          onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.background="rgba(255,255,255,0.05)";}}/>
                      </div>
                    ))}
                  </div>

                  <div style={{marginBottom:"20px"}}>
                    <label style={{display:"block",fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:G,marginBottom:"8px",fontFamily:"'Inter',sans-serif"}}>Company / Project Name</label>
                    <input type="text" placeholder="Acme Corp" value={form.company} onChange={f("company")} style={{...INPUT,colorScheme:"dark"}}
                      onFocus={e=>{e.target.style.borderColor=G;e.target.style.background="rgba(99,102,241,0.05)";}}
                      onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.background="rgba(255,255,255,0.05)";}}/>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-6">
                    <div style={{marginBottom:"20px"}}>
                      <label style={{display:"block",fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:G,marginBottom:"8px",fontFamily:"'Inter',sans-serif"}}>Service Needed</label>
                      <select value={form.service} onChange={f("service")} style={{...INPUT,cursor:"pointer",appearance:"none",colorScheme:"dark"}}
                        onFocus={e=>e.target.style.borderColor=G} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"}>
                        <option value="" style={{background:"#111827"}}>Select a service</option>
                        {SERVICES_LIST.map(s=><option key={s} value={s} style={{background:"#111827"}}>{s}</option>)}
                      </select>
                    </div>
                    <div style={{marginBottom:"20px"}}>
                      <label style={{display:"block",fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:G,marginBottom:"8px",fontFamily:"'Inter',sans-serif"}}>Budget Range</label>
                      <select value={form.budget} onChange={f("budget")} style={{...INPUT,cursor:"pointer",appearance:"none",colorScheme:"dark"}}
                        onFocus={e=>e.target.style.borderColor=G} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"}>
                        <option value="" style={{background:"#111827"}}>Select range</option>
                        {["Under $1,000","$1,000–$2,500","$2,500–$5,000","$5,000–$10,000","$10,000+","Not Sure"].map(b=>(
                          <option key={b} value={b} style={{background:"#111827"}}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{marginBottom:"28px"}}>
                    <label style={{display:"block",fontSize:"10px",fontWeight:700,letterSpacing:".2em",textTransform:"uppercase",color:G,marginBottom:"8px",fontFamily:"'Inter',sans-serif"}}>Tell Us About Your Project</label>
                    <textarea required rows={5} placeholder="What are you building? What's the timeline? What does success look like for you?" value={form.message} onChange={f("message")} style={{...INPUT,resize:"none",lineHeight:1.7,colorScheme:"dark"}}
                      onFocus={e=>{e.target.style.borderColor=G;e.target.style.background="rgba(99,102,241,0.05)";}}
                      onBlur={e=>{e.target.style.borderColor="rgba(255,255,255,0.1)";e.target.style.background="rgba(255,255,255,0.05)";}}/>
                  </div>

                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
                    <p style={{fontSize:"12px",color:"rgba(248,250,252,0.3)",fontFamily:"'Inter',sans-serif"}}>✓ Reply within 24 hours · No spam</p>
                    <button type="submit" className="btn-primary" style={{padding:"14px 36px",fontSize:"11px"}}>Send Message →</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ax-section dark2">
        <div style={{maxWidth:"800px",margin:"0 auto",padding:"0 24px"}}>
          <div className="section-header wow fadeInUp">
            <div className="tag">Before You Reach Out</div>
            <h2>Common Questions</h2>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            {FAQS.map((item,i)=><FaqItem key={i} q={item.q} a={item.a} i={i}/>)}
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
    <div className={`wow fadeInUp d${(i%3)+1}`} style={{borderRadius:"12px",background:"rgba(255,255,255,0.03)",border:`1px solid ${open?"rgba(99,102,241,0.3)":"rgba(255,255,255,0.07)"}`,overflow:"hidden",transition:"border-color .3s"}}>
      <button onClick={()=>setOpen(!open)} style={{width:"100%",padding:"20px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"none",border:"none",cursor:"pointer",textAlign:"left",gap:"16px"}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:"15px",fontWeight:600,color:"#f8fafc"}}>{q}</span>
        <span style={{fontSize:"20px",color:"var(--accent)",flexShrink:0,transition:"transform .3s",transform:open?"rotate(45deg)":"none",fontWeight:300}}>+</span>
      </button>
      {open&&<div style={{padding:"0 24px 20px",fontSize:"14px",color:"var(--muted)",lineHeight:1.8}}>{a}</div>}
    </div>
  );
}
