"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Ship, Car, Tent, MapPin } from "lucide-react";
import styles from "./ItineraryExplorer.module.css";
import Lightbox from "./Lightbox";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useEffect : useEffect;

const ITINERARIES = {
  galapagos: {
    id: "galapagos",
    title: "GALAPAGOS",
    color: "#00BCD4",
    icon: Ship,
    bg: "linear-gradient(to right, rgba(0, 188, 212, 0.05), rgba(0, 188, 212, 0.15))",
    days: [
      { day: 1, title: "San Cristobal", desc: "Arrival at San Cristobal airport and transfer to the harbour. In the afternoon, visit the Interpretation Centre to learn about the unique archipelago and its fascinating history, then hike to Frigatebird Hill for a panoramic view and to observe magnificent frigatebirds nesting.", img: "/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Exterior_view_1.jpg" },
      { day: 2, title: "Santa Fe & South Plaza", desc: "Morning visit to Santa Fe, home to endemic species like the Galapagos hawk and sea lion colonies. Hike through the giant prickly pear cactus forest. Afternoon at South Plaza to observe hybrid land iguanas and swallow-tailed gulls nesting in rugged cliffs.", img: "/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sitting_area_3.jpg" },
      { day: 3, title: "North Seymour & Chinese Hat", desc: "Explore North Seymour, an important nesting ground for blue-footed boobies and frigate birds. Later, approach the volcanic cone of Chinese Hat to observe Galapagos penguins and pioneer species sprouting on the unique lava fields.", img: "/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sun_deck_4.jpg" },
      { day: 4, title: "Twin Craters & Departure", desc: "Visit the lush scalesia forest of El Chato Tortoise Reserve and the impressive Twin Craters on Santa Cruz Island. See giant tortoises roaming in the wild before transferring to Baltra airport for your departure flight.", img: "/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Dining_area_3.jpg" }
    ]
  },
  andes: {
    id: "andes",
    title: "ANDES",
    color: "#D17B40",
    icon: Car,
    bg: "linear-gradient(to right, rgba(209, 123, 64, 0.05), rgba(209, 123, 64, 0.15))",
    days: [
      { day: 1, title: "Colonial Quito & Middle of the World", desc: "A full-day exploration of Ecuador's capital. Visit Quito's beautifully preserved Historic Center with its colonial churches, then stand on the Equator at the Middle of the World Monument.", img: "/ANDES-20260720T162513Z-1-001/ANDES/Basilica.jpg" },
      { day: 2, title: "Cotopaxi & Historic Hacienda", desc: "Enjoy a scenic drive to Cotopaxi National Park. Explore the Limpiopungo Lagoon observing wild horses and unique páramo vegetation, before relaxing at a traditional Andean hacienda.", img: "/ANDES-20260720T162513Z-1-001/ANDES/Cotopaxi volcano eruption in Ecuador, South America.jpg" },
      { day: 3, title: "Andes Horseback Riding", desc: "A memorable horseback riding experience through the beautiful highlands. Return to Quito in the evening to experience vibrant LGBTQ+ nightlife with a lively local drag show.", img: "/ANDES-20260720T162513Z-1-001/ANDES/Carretera vista al Cotopaxi.jpg" },
      { day: 4, title: "Papallacta Hot Springs", desc: "Travel east across the Andes to relax in the famous natural thermal pools of Papallacta, surrounded by spectacular mountain scenery and fresh air.", img: "/ANDES-20260720T162513Z-1-001/ANDES/Papallacta.jpg" }
    ]
  },
  amazonia: {
    id: "amazonia",
    title: "AMAZONIA",
    color: "#4CAF50",
    icon: Tent,
    bg: "linear-gradient(to right, rgba(76, 175, 80, 0.05), rgba(76, 175, 80, 0.15))",
    days: [
      { day: 1, title: "Journey to the Rainforest", desc: "Arrive at Cuyabeno Bridge and embark on a motorized canoe journey down the narrow river to your lodge, amazed by the incredible flora and fauna along the way.", img: "/AMAZON-20260720T162515Z-1-001/AMAZON/DSC08527.jpg" },
      { day: 2, title: "Laguna Grande Exploration", desc: "Journey to Laguna Grande, a scenic blackwater lake, followed by a guided hike along the Palma Roja Trail to spot monkeys, toucans, and macaws.", img: "/AMAZON-20260720T162515Z-1-001/AMAZON/DSC_0051.jpg" },
      { day: 3, title: "Dawn to Sunset Adventure", desc: "Early morning expedition through the flooded forest to witness the sunrise and active wildlife. Afternoon canoe journey to La Bocana.", img: "/AMAZON-20260720T162515Z-1-001/AMAZON/DSC_0121.jpg" },
      { day: 4, title: "Goodbye Amazon", desc: "Enjoy a final breakfast at the lodge before journeying back up the river by motorized canoe, taking in the last sights and sounds of the Amazon.", img: "/AMAZON-20260720T162515Z-1-001/AMAZON/DSC_0001.jpg" }
    ]
  }
};

type ItineraryKey = keyof typeof ITINERARIES;

interface Props {
  initialTab: ItineraryKey;
}

// Helper to group days into chunks of 2
const chunkDays = (days: any[], size: number) => {
  const result = [];
  for (let i = 0; i < days.length; i += size) {
    result.push(days.slice(i, i + size));
  }
  return result;
};

export default function ItineraryExplorer({ initialTab }: Props) {
  const [lightboxData, setLightboxData] = useState<{isOpen: boolean, src: string, alt: string}>({ isOpen: false, src: "", alt: "" });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const activeData = ITINERARIES[initialTab];
  const ActiveIcon = activeData.icon;
  const dayChunks = chunkDays(activeData.days, 2); // 2 days per slide

  useIsomorphicLayoutEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current || !iconRef.current) return;

    ScrollTrigger.refresh();

    const scrollWidth = scrollWrapperRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const amountToScroll = scrollWidth - windowWidth;

    let ctx = gsap.context(() => {
      
      // Pin and Scroll Horizontally
      gsap.to(scrollWrapperRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top", // Pin immediately when the container hits the top
          end: () => "+=" + amountToScroll * 1.5, // Extend scroll duration to feel slower and more deliberate
          invalidateOnRefresh: true,
        }
      });

      // Animate Map Icon across the bottom line physically representing the journey
      gsap.to(iconRef.current, {
        left: "calc(100% - 40px)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          start: "top top",
          end: () => "+=" + amountToScroll * 1.5,
          invalidateOnRefresh: true,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [initialTab]);

  const openLightbox = (src: string, alt: string) => {
    setLightboxData({ isOpen: true, src, alt });
  };

  return (
    <div className={styles.explorerSection} style={{ background: activeData.bg, height: '100vh', overflow: 'hidden' }}>
      
      <div ref={containerRef} className={styles.pinContainer}>
        
        <div ref={scrollWrapperRef} className={styles.horizontalWrapper}>
          
          {/* Day Chunks (100vw each) */}
          {dayChunks.map((chunk, index) => (
            <div key={index} className={styles.slideScreen}>
              
              {/* Left Side: Collage */}
              <div className={styles.collageColumn}>
                {chunk.map((day: any, i: number) => (
                  <div 
                    key={`img-${i}`} 
                    className={`${styles.collageItem} ${styles[`collagePos${i + 1}`]}`}
                    onClick={() => openLightbox(day.img, day.title)}
                  >
                    <Image src={day.img} alt={day.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className={styles.hoverOverlay}><span>Ver pantalla completa</span></div>
                  </div>
                ))}
              </div>

              {/* Right Side: Text Information */}
              <div className={styles.textColumn}>
                {chunk.map((day: any, i: number) => (
                  <div key={`text-${i}`} className={styles.dayTextItem}>
                    <div className={styles.dayBadge} style={{ backgroundColor: activeData.color }}>
                      Day {day.day}
                    </div>
                    <h3 className={styles.dayTitle} style={{ color: activeData.color }}>{day.title}</h3>
                    <p className={styles.dayDesc}>{day.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
          
          {/* Final Journey End Screen */}
          <div className={styles.slideScreen} style={{ justifyContent: 'center' }}>
            <div className={styles.endCard}>
              <h3 style={{ color: activeData.color, fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>Journey Complete</h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Ready for your next adventure?</p>
              <button className={styles.btnPrimary} style={{ backgroundColor: activeData.color }}>
                REQUEST YOUR CABIN
              </button>
            </div>
          </div>

        </div>

        {/* Global Journey Map / Progress Indicator fixed at bottom of screen */}
        <div className={styles.mapContainer}>
          <div className={styles.mapLine} style={{ backgroundColor: `${activeData.color}40` }}>
            <div 
              ref={iconRef} 
              className={styles.mapIconWrapper}
              style={{ backgroundColor: activeData.color }}
            >
              <ActiveIcon color="white" size={20} />
            </div>
            
            {/* Stops for each day chunk to mark checkpoints visually */}
            {dayChunks.map((_, i) => (
              <div 
                key={i} 
                className={styles.mapPin} 
                style={{ 
                  left: `${(i / dayChunks.length) * 100}%`,
                  color: activeData.color 
                }}
              >
                <MapPin size={16} />
              </div>
            ))}
            {/* Final pin for End Card */}
            <div className={styles.mapPin} style={{ left: '100%', color: activeData.color }}><MapPin size={16} /></div>
          </div>
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
