export default function Loading() {
  return (
    <div style={{ display:"flex", height:"100vh", background:"#0a0f1e", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"20px" }}>
      <div style={{ fontSize:"28px", fontWeight:800, fontFamily:"'Inter',sans-serif", letterSpacing:"0.05em", color:"#fff" }}>
        Axiom<span style={{ background:"linear-gradient(90deg,#6366f1,#8b5cf6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>.</span>Studio
      </div>
      <div style={{ width:"40px", height:"3px", background:"linear-gradient(90deg,#6366f1,#8b5cf6)", animation:"axload 1.2s ease-in-out infinite alternate", borderRadius:"3px" }}/>
      <style>{`@keyframes axload{to{width:80px}}`}</style>
    </div>
  );
}
