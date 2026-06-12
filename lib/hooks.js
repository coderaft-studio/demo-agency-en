"use client";
import { useEffect } from "react";

export function useAnimateOnScroll(delay = 0) {
  useEffect(()=>{
    const timer = setTimeout(()=>{
      const observer = new IntersectionObserver(
        (entries)=>{
          entries.forEach(entry=>{
            if(entry.isIntersecting){
              const el = entry.target;
              const fx = el.dataset.animateEffect || "";
              if(fx) el.classList.add(fx);
              el.classList.add("animated");
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1 }
      );
      document.querySelectorAll(".wow:not(.animated)").forEach(el=>observer.observe(el));
      return ()=>observer.disconnect();
    }, delay);
    return ()=>clearTimeout(timer);
  },[delay]);
}
