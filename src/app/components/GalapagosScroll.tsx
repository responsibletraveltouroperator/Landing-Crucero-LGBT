"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import styles from "./GalapagosScroll.module.css";
import Lightbox from "./Lightbox";
import ComplementaryTours from "./ComplementaryTours";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useEffect : useEffect;

const GALAPAGOS_DAYS = [
  { 
    day: 1, 
    title: "San Cristobal", 
    desc: "Arrival at San Cristobal airport and transfer to the harbour. In the afternoon, visit the Interpretation Centre to learn about the unique archipelago and its fascinating history, then hike to Frigatebird Hill for a panoramic view and to observe magnificent frigatebirds nesting.", 
    bgImg: "/Galapagos fotos/San Cristobal/Copy of Galapagos, San Cristobal 2 (Large).jpg",
    animalImg: "/Galapagos fotos/San Cristobal/Fragata.jpg",
    cruiseImg: "/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Exterior_view_1.jpg"
  },
  { 
    day: 2, 
    title: "Santa Fe & South Plaza", 
    desc: "Morning visit to Santa Fe, home to endemic species like the Galapagos hawk and sea lion colonies. Hike through the giant prickly pear cactus forest. Afternoon at South Plaza to observe hybrid land iguanas and swallow-tailed gulls nesting in rugged cliffs.", 
    bgImg: "/Galapagos fotos/Plaza sur/Plaza sur copia.jpg",
    animalImg: "/Galapagos fotos/Plaza sur/South Plazas leon marino.jpg",
    cruiseImg: "/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sun_deck_4.jpg"
  },
  { 
    day: 3, 
    title: "North Seymour", 
    desc: "Explore North Seymour, an important nesting ground for blue-footed boobies and frigate birds. Later, approach the volcanic cone of Chinese Hat to observe Galapagos penguins and pioneer species sprouting on the unique lava fields.", 
    bgImg: "/Galapagos fotos/North Seymour/Galapagos, North Seymour Island 2 (Large).jpg",
    animalImg: "/Galapagos fotos/North Seymour/Galapagos Islands - Piquero Patas Azules.jpg",
    cruiseImg: "/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sitting_area_3.jpg"
  },
  { 
    day: 4, 
    title: "Twin Craters & Departure", 
    desc: "Visit the lush scalesia forest of El Chato Tortoise Reserve and the impressive Twin Craters on Santa Cruz Island. See giant tortoises roaming in the wild before transferring to Baltra airport for your departure flight.", 
    bgImg: "/Galapagos fotos/Twin Craters/ACTIVIDADES 16 (Large).jpg",
    animalImg: "/Galapagos fotos/Twin Craters/Tortoise 8.jpg",
    cruiseImg: "/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Dining_area_3.jpg"
  }
];

export default function GalapagosScroll() {
  const [lightboxData, setLightboxData] = useState<{isOpen: boolean, src: string, alt: string}>({ isOpen: false, src: "", alt: "" });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const boatRef = useRef<SVGGElement>(null);
  const boatImageRef = useRef<SVGImageElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current || !boatRef.current) return;

    ScrollTrigger.refresh();

    const scrollWidth = scrollWrapperRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const amountToScroll = scrollWidth - windowWidth;

    let ctx = gsap.context(() => {
      
      // Pin and Scroll Horizontally
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top", 
          end: () => "+=" + amountToScroll, 
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });

      tl.to(scrollWrapperRef.current, {
        x: -amountToScroll,
        ease: "none",
        duration: 1, // Total timeline length
      }, 0);

      // Animate boat along the SVG path for the first 3/4 of the scroll (4 days out of 5 total screens)
      const pathEl = document.getElementById("treasure-path") as any as SVGPathElement;
      if (pathEl) {
        const length = pathEl.getTotalLength();
        gsap.set(pathEl, { strokeDasharray: length, strokeDashoffset: length });
        
        tl.to(pathEl, {
          strokeDashoffset: 0,
          ease: "none",
          duration: 0.75,
        }, 0);

        // Animate boat accurately along the path
        tl.to(boatRef.current, {
          motionPath: {
            path: pathEl,
            align: pathEl,
            alignOrigin: [0.5, 0.5],
            autoRotate: false
          },
          ease: "none",
          duration: 0.75,
        }, 0);
      }

      // Flip boat if scrolling backwards (using onUpdate direction)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + amountToScroll,
        onUpdate: (self) => {
          if (boatImageRef.current) {
            if (self.direction === -1) {
              boatImageRef.current.setAttribute("href", "/Crucero 2.png");
            } else {
              boatImageRef.current.setAttribute("href", "/Crucero1.png");
            }
          }
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (src: string, alt: string) => {
    setLightboxData({ isOpen: true, src, alt });
  };

  return (
    <div className={styles.explorerSection}>
      
      <div ref={containerRef} className={styles.pinContainer}>
        
        <div ref={scrollWrapperRef} className={styles.horizontalWrapper}>
          
          {/* Day Screens (100vw each) */}
          {GALAPAGOS_DAYS.map((day, index) => (
            <div key={index} className={styles.slideScreen}>
              <div 
                className={styles.slideBg} 
                style={{ backgroundImage: `url('${day.bgImg}')` }}
              ></div>
              <div className={styles.slideOverlay}></div>
              
              <div className={styles.slideContent}>
                {/* Left Side: Collage (2 photos) */}
                <div className={styles.collageColumn}>
                  <div 
                    className={`${styles.collageItem} ${styles.collagePos1}`}
                    onClick={() => openLightbox(day.animalImg, day.title + " Wildlife")}
                  >
                    <img src={day.animalImg} alt={day.title + " Wildlife"} />
                    <div className={styles.hoverOverlay}><span>Enlarge</span></div>
                  </div>
                  <div 
                    className={`${styles.collageItem} ${styles.collagePos2}`}
                    onClick={() => openLightbox(day.cruiseImg, "Cruise View")}
                  >
                    <img src={day.cruiseImg} alt="Cruise View" />
                    <div className={styles.hoverOverlay}><span>Enlarge</span></div>
                  </div>
                </div>

                {/* Right Side: Text Information */}
                <div className={styles.textColumn}>
                  <div className={styles.dayBadge}>
                    Day {day.day}
                  </div>
                  <h3 className={styles.dayTitle}>{day.title}</h3>
                  <p className={styles.dayDesc}>{day.desc}</p>
                </div>
              </div>

            </div>
          ))}
          
          {/* Final Slide: Complementary Tours (Andes & Amazonia) inline */}
          <div className={styles.slideScreen} style={{ backgroundColor: 'var(--light-bg)' }}>
            <ComplementaryTours />
          </div>

        </div>

        {/* Global Journey Map / Treasure Map indicator fixed at bottom of screen */}
        <div className={styles.mapContainer}>
          <svg viewBox="0 0 1200 150" preserveAspectRatio="none" className={styles.treasureSvg}>
            {/* Curvy treasure map path (base dashed line) */}
            <path 
              d="M 50 100 Q 225 40, 400 100 T 750 100 T 1100 100" 
              fill="none" 
              stroke="rgba(255,255,255,0.6)" 
              strokeWidth="6" 
              strokeDasharray="8 12" 
            />
            {/* The active path that fills up behind the boat with water effect */}
            <path 
              id="treasure-path"
              d="M 50 100 Q 225 40, 400 100 T 750 100 T 1100 100" 
              fill="none" 
              stroke="#00BCD4" 
              strokeWidth="6" 
            />
            
            {/* Day nodes (Islands) and Arrival Points */}
            <image href="/san cristobal.png" x="5" y="5" width="90" height="90" />
            <circle cx="50" cy="100" r="6" fill="white" />
            <text x="50" y="130" fill="white" fontSize="16" textAnchor="middle">Day 1</text>
            
            <image href="/plaza sur.png" x="355" y="5" width="90" height="90" />
            <circle cx="400" cy="100" r="6" fill="white" />
            <text x="400" y="130" fill="white" fontSize="16" textAnchor="middle">Day 2</text>
            
            <image href="/North Seymour.png" x="705" y="5" width="90" height="90" />
            <circle cx="750" cy="100" r="6" fill="white" />
            <text x="750" y="130" fill="white" fontSize="16" textAnchor="middle">Day 3</text>
            
            <image href="/santa cruz.png" x="1055" y="5" width="90" height="90" />
            <circle cx="1100" cy="100" r="6" fill="white" />
            <text x="1100" y="130" fill="white" fontSize="16" textAnchor="middle">Day 4</text>
            
            {/* Boat Icon sliding along */}
            <g ref={boatRef}>
              <image ref={boatImageRef} href="/Crucero1.png" x="-45" y="-55" width="90" height="90" />
            </g>
          </svg>
        </div>

      </div>

      <Lightbox 
        isOpen={lightboxData.isOpen} 
        imageSrc={lightboxData.src} 
        imageAlt={lightboxData.alt} 
        onClose={() => setLightboxData({ ...lightboxData, isOpen: false })} 
      />
    </div>
  );
}
