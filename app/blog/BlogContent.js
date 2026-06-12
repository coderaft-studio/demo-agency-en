"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useAnimateOnScroll } from "@/lib/hooks";
import { IMGS } from "@/lib/images";

const POSTS=[
  {
    img:IMGS.blog1,tag:"Design",slug:"psychology-of-colour",
    title:"The Psychology of Colour in Digital Branding",
    excerpt:"How strategic colour choices influence perception, trust, and conversion in modern digital products. A deep dive into the science behind colour decisions.",
    date:"June 5, 2025",read:"8 min read",featured:true,
    content:`Colour is perhaps the most immediate, visceral element of any brand. Before a user reads a single word, they've already formed an emotional response based on the colours they see. This isn't accidental — it's neuroscience.

Research consistently shows that up to 90% of snap judgements about products can be based on colour alone. For digital brands, this means that colour strategy isn't a design preference — it's a business decision.

**The Emotional Vocabulary of Colour**

Different colours carry deeply ingrained psychological associations that vary subtly across cultures but remain surprisingly consistent in core meaning:

- **Blue** signals trust, stability, and professionalism. It's why you'll find it across financial institutions and healthcare brands.
- **Orange and yellow** convey energy, optimism, and accessibility. Think Amazon, Snapchat, McDonald's.
- **Green** connects to growth, health, and sustainability — increasingly powerful as environmental consciousness rises.
- **Purple** suggests luxury, creativity, and imagination. Rare in nature, it still carries a regal quality.
- **Black and white** communicate sophistication, minimalism, and timelessness — the foundation of premium brands.

**Contrast and Conversion**

Colour contrast directly affects conversion rates. A/B tests consistently show that high-contrast CTAs outperform low-contrast ones. The key isn't just having a "standout" button colour — it's ensuring the contrast ratio meets accessibility standards (WCAG 2.1 AA: 4.5:1 for normal text) while remaining visually compelling.

**Building a Colour System**

At Axiom Studio, we approach colour as a system, not a single choice. A robust brand colour system includes:

1. **Primary palette** — your brand's core identity colours (typically 1–2)
2. **Neutral palette** — greys and whites for backgrounds, text, and structure
3. **Semantic colours** — success (green), warning (amber), error (red)
4. **Gradient strategy** — if applicable, how gradients are used and where

The discipline is knowing what to leave out. Brands that use too many colours dilute their identity. Brands that use too few can feel flat or cold.

**The Most Underrated Colour Decision**

Most designers obsess over choosing the "right" colour. The more important question is: right in what context? A colour that works beautifully in a logo will behave differently at 12px on a mobile screen, on a white background versus dark, in print versus digital.

Test your colours across every context where they'll live before committing. And remember: the best colour system is one your team can apply consistently without needing to reference the guidelines every time.`,
  },
  {
    img:IMGS.blog3,tag:"Strategy",slug:"brand-outlasts-algorithm",
    title:"Building a Brand That Outlasts the Algorithm",
    excerpt:"Trends come and go — but a clearly defined brand identity keeps you relevant regardless of platform changes. Here's how to build for longevity.",
    date:"May 22, 2025",read:"6 min read",featured:false,
    content:`Every few months, something changes in the algorithm. A new format, a new priority signal, a new organic reach cliff. Brands that built their entire identity around a platform's current rules scramble. Brands with a clear, distinctive identity simply adapt the format — and keep growing.

This is the compounding advantage of brand investment. It's also why the brands with the longest shelf lives — Apple, Nike, Patagonia — spend disproportionately on brand equity, not just performance channels.

**What "Brand" Actually Means**

Brand is not a logo. It's not a colour palette or a tagline. Brand is the complete set of associations people have with your business. It's what they think, feel, and believe — before, during, and after every interaction.

A strong brand has three qualities: it's distinctive (unmistakable in context), consistent (the same experience across every touchpoint), and meaningful (it stands for something people care about).

**The Algorithm-Proof Advantage**

When you have a strong brand, your marketing becomes inherently more efficient. People search for you by name. They share your content because it represents something they want to be associated with. They forgive occasional missteps. And they're significantly less price-sensitive.

Brands without equity compete purely on attention and price. They live and die by the algorithm, constantly chasing reach. Branded businesses build audiences they own.

**Where to Start**

If you're building a brand from scratch or repositioning an existing one, start with three foundational questions:

1. What do we stand for that no-one else can credibly claim?
2. What does our customer want to believe about themselves — and how do we reflect that?
3. What's the one thing we'd never compromise, regardless of business pressure?

The answers to those three questions — honestly answered — are the core of your brand strategy. Everything else (visual identity, tone of voice, content strategy) flows from that foundation.`,
  },
  {
    img:IMGS.blog2,tag:"Development",slug:"core-web-vitals-seo",
    title:"Why Core Web Vitals Are Your New SEO Priority",
    excerpt:"Google's user experience signals are now a direct ranking factor. Here's what every site owner needs to know — and what to actually do about it.",
    date:"May 8, 2025",read:"10 min read",featured:false,
    content:`In May 2021, Google officially made Core Web Vitals a ranking signal. Since then, hundreds of studies have confirmed what we suspected: sites that score well on user experience metrics rank higher, convert better, and retain users longer.

If you're not measuring and optimising for Core Web Vitals, you're leaving ranking positions and revenue on the table.

**The Three Core Web Vitals**

**Largest Contentful Paint (LCP)** measures loading performance — specifically, how quickly the largest visible element renders. Good LCP is under 2.5 seconds. Poor is over 4 seconds.

**Interaction to Next Paint (INP)** replaced First Input Delay in 2024 and measures overall interactivity responsiveness. Good INP is under 200ms. Poor is over 500ms.

**Cumulative Layout Shift (CLS)** measures visual stability — how much elements unexpectedly move as the page loads. Good CLS is under 0.1. Poor is over 0.25.

**Why These Metrics Matter Beyond SEO**

The correlation between Core Web Vitals and conversion rate is striking. Vodafone found that a 31% improvement in LCP led to an 8% increase in sales. NDTV saw a 55% improvement in page views after improving CLS. These aren't SEO metrics — they're business metrics.

**The Biggest Offenders**

In auditing hundreds of sites, we've found the same issues repeatedly:

*For LCP:* Unoptimised hero images (serve WebP, set explicit dimensions, preload the LCP image), render-blocking fonts (use "font-display: optional" or swap), and lack of CDN.

*For INP:* Heavy JavaScript execution on main thread, unnecessary third-party scripts (analytics, chat widgets, ad tags that load synchronously), and complex DOM updates triggered by user interaction.

*For CLS:* Images and embeds without explicit width/height attributes, dynamically injected content above existing content, and web fonts causing layout shift on load.

**Where to Start**

Run your site through PageSpeed Insights (pagespeed.web.dev) and the Chrome User Experience Report (CrUX). Focus on your real-user data (field data) — not just lab data — as that's what Google uses for ranking.

Then prioritise by business impact: fix your highest-traffic pages first, focus on mobile (where most users are), and tackle LCP before the other two.`,
  },
];

const TAGS=["Design","Development","Strategy","Branding","SEO","Marketing"];

export default function BlogContent(){
  useAnimateOnScroll(150);
  const [activeTag,setActiveTag]=useState("All");
  const [modalPost,setModalPost]=useState(null);
  const filtered=activeTag==="All"?POSTS:POSTS.filter(p=>p.tag===activeTag);

  return(
    <>
      <section className="ax-section dark2">
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px"}}>

          {/* Tag filter */}
          <div style={{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap",marginBottom:"48px"}} className="card-in">
            {["All",...TAGS].map(t=>(
              <button key={t} onClick={()=>setActiveTag(t)}
                style={{padding:"7px 18px",borderRadius:"50px",fontSize:"11px",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all .25s",
                  background:activeTag===t?"var(--grad)":"transparent",color:activeTag===t?"#fff":"rgba(248,250,252,0.5)",
                  border:activeTag===t?"none":"1px solid rgba(255,255,255,0.12)"}}>
                {t}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {activeTag==="All"&&(
            <div className="card-in" style={{marginBottom:"48px",cursor:"pointer"}} onClick={()=>setModalPost(POSTS[0])}>
              <div style={{borderRadius:"16px",overflow:"hidden",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",display:"grid",gridTemplateColumns:"1.4fr 1fr",transition:"all .3s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(99,102,241,0.3)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";}}>
                <div style={{position:"relative",minHeight:"320px",overflow:"hidden"}}>
                  <Image unoptimized src={POSTS[0].img} alt={POSTS[0].title} fill style={{objectFit:"cover",transition:"transform .5s"}}/>
                </div>
                <div style={{padding:"40px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"}}>
                    <span style={{fontSize:"10px",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--accent)",background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.2)",padding:"3px 10px",borderRadius:"20px"}}>{POSTS[0].tag}</span>
                    <span style={{fontSize:"12px",color:"rgba(248,250,252,0.35)"}}>Featured</span>
                  </div>
                  <h2 style={{fontFamily:"'Inter',sans-serif",fontSize:"24px",fontWeight:800,color:"#f8fafc",marginBottom:"14px",lineHeight:1.3}}>{POSTS[0].title}</h2>
                  <p style={{color:"var(--muted)",fontSize:"14px",lineHeight:1.7,marginBottom:"24px"}}>{POSTS[0].excerpt}</p>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div>
                      <span style={{fontSize:"12px",color:"rgba(248,250,252,0.4)"}}>{POSTS[0].date}</span>
                      <span style={{fontSize:"12px",color:"rgba(248,250,252,0.25)",margin:"0 8px"}}>·</span>
                      <span style={{fontSize:"12px",color:"rgba(248,250,252,0.4)"}}>{POSTS[0].read}</span>
                    </div>
                    <span style={{fontSize:"11px",fontWeight:700,color:"var(--accent)",letterSpacing:"0.1em",textTransform:"uppercase"}}>Read More →</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Post grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((post,i)=>(
              <div key={post.slug} className={`blog-card card-in card-in-d${(i%3)+1}`}
                style={{cursor:"pointer"}} onClick={()=>setModalPost(post)}>
                <div className="blog-img-wrap">
                  <Image unoptimized src={post.img} alt={post.title} width={400} height={220}
                    className="blog-img" style={{width:"100%",height:"200px",objectFit:"cover",display:"block"}}/>
                </div>
                <div className="blog-body">
                  <span className="blog-tag">{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <div className="blog-footer">
                  <span className="blog-date">{post.date} · {post.read}</span>
                  <span className="blog-read">Read →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="ax-section dark" style={{padding:"60px 0"}}>
        <div style={{maxWidth:"600px",margin:"0 auto",padding:"0 24px",textAlign:"center"}}>
          <div className="tag wow fadeIn" style={{display:"inline-block",fontSize:"11px",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px",background:"rgba(99,102,241,0.1)",padding:"4px 14px",borderRadius:"20px",border:"1px solid rgba(99,102,241,0.2)"}}>Newsletter</div>
          <h2 className="wow fadeIn d1" style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(24px,3vw,36px)",fontWeight:800,color:"#f8fafc",marginBottom:"12px"}}>Get insights in your inbox</h2>
          <p className="wow fadeIn d2" style={{color:"var(--muted)",fontSize:"14px",lineHeight:1.7,marginBottom:"24px"}}>Monthly articles on design, development and digital strategy. No spam, unsubscribe anytime.</p>
          <div className="wow fadeIn d3" style={{display:"flex",gap:"10px",maxWidth:"420px",margin:"0 auto"}}>
            <input type="email" placeholder="your@email.com" style={{flex:1,padding:"12px 16px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"8px",color:"#f8fafc",fontSize:"14px",outline:"none",fontFamily:"'Source Sans 3',sans-serif"}}
              onFocus={e=>e.target.style.borderColor="var(--accent)"} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.12)"}/>
            <button className="btn-primary" style={{flexShrink:0,padding:"12px 20px",fontSize:"11px"}}>Subscribe</button>
          </div>
        </div>
      </section>

      <Footer/>

      {/* Article Modal */}
      {modalPost&&(
        <div style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(6,8,15,0.97)",overflowY:"auto",padding:"24px"}} onClick={()=>setModalPost(null)}>
          <div style={{maxWidth:"760px",margin:"0 auto",background:"#111827",borderRadius:"20px",overflow:"hidden",border:"1px solid rgba(99,102,241,0.2)"}} onClick={e=>e.stopPropagation()}>
            <div style={{position:"relative",height:"320px"}}>
              <Image unoptimized src={modalPost.img} alt={modalPost.title} fill style={{objectFit:"cover"}}/>
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(17,24,39,1) 0%,transparent 60%)"}}/>
              <button onClick={()=>setModalPost(null)} style={{position:"absolute",top:"16px",right:"16px",background:"rgba(0,0,0,0.6)",border:"none",color:"#fff",width:"36px",height:"36px",borderRadius:"50%",cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
            </div>
            <div style={{padding:"36px"}}>
              <div style={{display:"flex",gap:"10px",marginBottom:"16px"}}>
                <span style={{fontSize:"10px",fontWeight:700,color:"var(--accent)",background:"rgba(99,102,241,0.1)",border:"1px solid rgba(99,102,241,0.2)",padding:"3px 10px",borderRadius:"20px",letterSpacing:"0.12em",textTransform:"uppercase"}}>{modalPost.tag}</span>
                <span style={{fontSize:"12px",color:"rgba(248,250,252,0.4)"}}>{modalPost.date}</span>
                <span style={{fontSize:"12px",color:"rgba(248,250,252,0.4)"}}>{modalPost.read}</span>
              </div>
              <h1 style={{fontFamily:"'Inter',sans-serif",fontSize:"28px",fontWeight:800,color:"#f8fafc",marginBottom:"20px",lineHeight:1.3}}>{modalPost.title}</h1>
              <div style={{fontSize:"15px",color:"var(--muted)",lineHeight:1.9}}>
                {modalPost.content.split('\n\n').map((para,i)=>(
                  <p key={i} style={{marginBottom:"16px",fontWeight:para.startsWith("**")?"600":"400",color:para.startsWith("**")?"#f8fafc":"var(--muted)"}}>
                    {para.replace(/\*\*/g,"")}
                  </p>
                ))}
              </div>
              <div style={{marginTop:"32px",paddingTop:"24px",borderTop:"1px solid rgba(255,255,255,0.08)"}}>
                <p style={{fontSize:"13px",color:"var(--muted)",marginBottom:"16px"}}>Enjoyed this article? Get more insights delivered to your inbox.</p>
                <Link href="/contact" className="btn-primary" style={{textDecoration:"none"}} onClick={()=>setModalPost(null)}>Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
