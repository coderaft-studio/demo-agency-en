import Link from "next/link";

const SERVICES = ["UI/UX Design","Web Development","App Development","Brand Identity","Digital Marketing","SEO & Performance"];
const COMPANY  = [["about","About Us"],["portfolio","Portfolio"],["services","Services"],["blog","Blog"],["pricing","Pricing"],["contact","Contact"]];

export default function Footer() {
  return (
    <footer className="ax-footer">
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 24px" }}>
        <div className="grid md:grid-cols-4 gap-8" style={{ marginBottom:"40px" }}>
          <div>
            <div className="footer-logo">Axiom<span>.</span>Studio</div>
            <p style={{ fontSize:"13px", color:"var(--muted)", lineHeight:1.7, marginBottom:"20px" }}>
              A full-service digital agency crafting experiences that move people and move businesses forward since 2017.
            </p>
            <div style={{ display:"flex", gap:"8px" }}>
              {["𝕏","in","drib","gh","ig"].map(s=>(
                <a key={s} href="#" onClick={e=>e.preventDefault()}
                  style={{ width:"32px", height:"32px", borderRadius:"6px", background:"rgba(255,255,255,0.05)", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--muted)", fontSize:"12px", textDecoration:"none", transition:"all .25s" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="var(--accent)";e.currentTarget.style.color="#fff";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.color="var(--muted)";}}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-head">Services</div>
            <ul className="footer-links">
              {SERVICES.map(s=><li key={s}><Link href="/services" style={{ textDecoration:"none", color:"inherit" }}>{s}</Link></li>)}
            </ul>
          </div>

          <div>
            <div className="footer-head">Company</div>
            <ul className="footer-links">
              {COMPANY.map(([slug,label])=>(
                <li key={slug}><Link href={`/${slug}`} style={{ textDecoration:"none", color:"inherit" }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-head">Get in Touch</div>
            <p style={{ fontSize:"13px", color:"var(--muted)", lineHeight:1.7, marginBottom:"10px" }}>42 Design Street, Suite 300<br/>New York, NY 10012</p>
            <p style={{ fontSize:"13px", color:"var(--muted)", marginBottom:"4px" }}>hello@axiomstudio.co</p>
            <p style={{ fontSize:"13px", color:"var(--muted)", marginBottom:"16px" }}>+1 (212) 555-0178</p>
            <Link href="/contact" className="btn-outline" style={{ fontSize:"11px", padding:"10px 20px", textDecoration:"none" }}>
              Start a Project
            </Link>
          </div>
        </div>

        <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:"24px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"12px" }}>
          <p style={{ fontSize:"12px", color:"rgba(248,250,252,0.3)" }}>© {new Date().getFullYear()} Axiom Studio. All rights reserved.</p>
          <div style={{ display:"flex", gap:"20px" }}>
            {[["Privacy Policy","#"],["Terms of Service","#"],["Sitemap","#"]].map(([label,href])=>(
              <a key={label} href={href} style={{ fontSize:"12px", color:"rgba(248,250,252,0.3)", textDecoration:"none", transition:"color .2s" }}
                onMouseEnter={e=>e.currentTarget.style.color="#f8fafc"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(248,250,252,0.3)"}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
