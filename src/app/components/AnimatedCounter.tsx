"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (triggerRef.current) {
      const obj = { val: 0 };
      const tween = gsap.to(obj, {
        val: end,
        duration: duration,
        ease: "power2.out",
        paused: true,
        onUpdate: () => {
          setCount(Math.round(obj.val));
        }
      });

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top 90%",
        animation: tween,
        toggleActions: "play none none reverse",
      });
    }
  }, [end, duration]);

  return (
    <span ref={triggerRef}>
      {count}{suffix}
    </span>
  );
}
