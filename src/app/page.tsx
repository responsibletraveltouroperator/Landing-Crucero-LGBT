"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import ItineraryCovers from "./components/ItineraryCovers";
import GalapagosScroll from "./components/GalapagosScroll";
import ComplementaryTours from "./components/ComplementaryTours";
import Lightbox from "./components/Lightbox";
import { ZoomIn, Users, Ship, Compass, Heart } from "lucide-react";
import AnimatedCounter from "./components/AnimatedCounter";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useEffect : useEffect;

export default function Home() {
  const curveRef = useRef<HTMLDivElement>(null);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, src: "", alt: "" });

  const openLightbox = (src: string, alt: string) => {
    setLightboxState({ isOpen: true, src, alt });
  };

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      let ctx = gsap.context(() => {
        // Per-container staggered parallax
        // Each section resets the stagger index so images rise one by one within their own section
        const containers = document.querySelectorAll('[data-parallax-container]');
        containers.forEach((container) => {
          let sectionNegativeIdx = 0;
          const els = container.querySelectorAll('[data-parallax-speed]');
          els.forEach((el: any) => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.1');
            const absSpeed = Math.abs(speed);
            // Use explicit stagger attribute if provided, otherwise auto-increment
            const explicitStagger = el.getAttribute('data-parallax-stagger');
            
            if (speed < 0) {
              const staggerPct = explicitStagger !== null 
                ? parseFloat(explicitStagger)
                : sectionNegativeIdx * 6;
              sectionNegativeIdx++;
              gsap.fromTo(el,
                { y: () => window.innerHeight * absSpeed * 0.3 },
                {
                  y: () => -window.innerHeight * absSpeed * 1.6,
                  ease: "none",
                  scrollTrigger: {
                    trigger: container,
                    start: `top+=${staggerPct}% 90%`,
                    end: "bottom top",
                    scrub: 2,
                    invalidateOnRefresh: true,
                  }
                }
              );
            } else {
              gsap.fromTo(el,
                { y: () => -window.innerHeight * absSpeed * 0.4 },
                {
                  y: () => window.innerHeight * absSpeed * 0.4,
                  ease: "none",
                  scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                  }
                }
              );
            }
          });
        });

        // Wave animation
        if (curveRef.current) {
          const svg = curveRef.current.querySelector('svg');
          if (svg) {
            gsap.to(svg, {
              xPercent: -50,
              ease: "none",
              scrollTrigger: {
                trigger: `.${styles.hero}`,
                start: "top top",
                end: "bottom top",
                scrub: true,
              }
            });
          }
          
          gsap.set(curveRef.current, { transformOrigin: "bottom center", scaleY: 0.1 });
          gsap.to(curveRef.current, {
            scaleY: 4,
            ease: "power1.in",
            scrollTrigger: {
              trigger: `.${styles.hero}`,
              start: "top top",
              end: "bottom top",
              scrub: true,
            }
          });
        }
        
        // Foam animation
        if (curveRef.current) {
          const foamPaths = curveRef.current.querySelectorAll('.foam-wave');
          if (foamPaths.length > 0) {
            gsap.to(foamPaths, {
              x: "-80px",
              ease: "none",
              scrollTrigger: {
                trigger: `.${styles.hero}`,
                start: "top top",
                end: "bottom top",
                scrub: true,
              }
            });
          }
        }

      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <main>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          LGBT+ <span>GALAPAGOS</span> EXPERIENCE
        </div>
        <div className={styles.navLinks}>
          <a href="#">The Cruise</a>
          <a href="#">Itinerary</a>
          <a href="#">Experience</a>
        </div>
        <button className={styles.btnPrimary} style={{backgroundColor: '#E35E54'}}>REQUEST CABIN</button>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} data-parallax-container>
        <div 
          className={styles.heroBgParallax}
          style={{ backgroundImage: "url('/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Exterior_view_1.jpg')" }}
          data-parallax-speed="0.15"
        ></div>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent} data-parallax-speed="-0.1">
          <h1 className={styles.heroTitle}>
            Sail Galapagos<br/>with <span className={styles.prideText}>Pride</span>
          </h1>
          <p className={styles.heroSubtitle}>
            An intimate LGBT+ cruise through the Galapagos Islands, where nature, freedom and connection come together at sea.
          </p>

        </div>

        {/* Rainbow Curve */}
        <div className={styles.heroCurve} ref={curveRef}>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '200%' }}>
            <defs>
              <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF0018"/>
                <stop offset="16.6%" stopColor="#FFA52C"/>
                <stop offset="33.3%" stopColor="#FFFF41"/>
                <stop offset="50%" stopColor="#008018"/>
                <stop offset="66.6%" stopColor="#0000F9"/>
                <stop offset="83.3%" stopColor="#86007D"/>
              </linearGradient>
            </defs>
            {/* Foam 1 */}
            <path className="foam-wave" fill="rgba(255,255,255,0.7)" d="M0,224L48,229.3C96,235,192,245,288,213.3C384,181,480,107,576,96C672,85,768,139,864,170.7C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" transform="translate(15, -15)"></path>
            {/* White 1 */}
            <path fill="var(--light-bg)" d="M0,224L48,229.3C96,235,192,245,288,213.3C384,181,480,107,576,96C672,85,768,139,864,170.7C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            {/* Rainbow 1 */}
            <path fill="url(#rainbowGradient)" opacity="0.5" d="M-200,256L-152,245.3C-104,235,-8,213,88,181.3C184,149,280,107,376,106.7C472,107,568,149,664,181.3C760,213,856,235,952,229.3C1048,224,1144,192,1192,176L1240,160L1240,320L1192,320C1144,320,1048,320,952,320C856,320,760,320,664,320C568,320,472,320,376,320C280,320,184,320,88,320L-200,320Z"></path>
            {/* Foam 2 */}
            <path className="foam-wave" fill="rgba(255,255,255,0.7)" d="M1440,224L1488,229.3C1536,235,1632,245,1728,213.3C1824,181,1920,107,2016,96C2112,85,2208,139,2304,170.7C2400,203,2496,213,2592,192C2688,171,2784,117,2832,90.7L2880,64L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1488,320L1440,320Z" transform="translate(15, -15)"></path>
            {/* White 2 */}
            <path fill="var(--light-bg)" d="M1440,224L1488,229.3C1536,235,1632,245,1728,213.3C1824,181,1920,107,2016,96C2112,85,2208,139,2304,170.7C2400,203,2496,213,2592,192C2688,171,2784,117,2832,90.7L2880,64L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1488,320L1440,320Z"></path>
            {/* Rainbow 2 */}
            <path fill="url(#rainbowGradient)" opacity="0.5" d="M1240,256L1288,245.3C1336,235,1432,213,1528,181.3C1624,149,1720,107,1816,106.7C1912,107,2008,149,2104,181.3C2200,213,2296,235,2392,229.3C2488,224,2584,192,2632,176L2680,160L2680,320L2632,320C2584,320,2488,320,2392,320C2296,320,2200,320,2104,320C2008,320,1912,320,1816,320C1720,320,1624,320,1528,320C1432,320,1336,320,1288,320L1240,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statBar} style={{ position: 'relative', zIndex: 10 }}>
        <div className={`container ${styles.statGrid}`}>
          <div className={styles.statItem}>
            <Users className={styles.statIcon} />
            <h4><AnimatedCounter end={16} /></h4>
            <p>Exclusive<br/>Guests</p>
          </div>
          <div className={styles.statItem}>
            <Ship className={styles.statIcon} />
            <h4><AnimatedCounter end={8} /></h4>
            <p>Spacious<br/>Cabins</p>
          </div>
          <div className={styles.statItem}>
            <Compass className={styles.statIcon} />
            <h4><AnimatedCounter end={2} /></h4>
            <p>Expert<br/>Guides</p>
          </div>
          <div className={styles.statItem}>
            <Heart className={styles.statIcon} />
            <h4><AnimatedCounter end={100} suffix="%" /></h4>
            <p>LGBT+<br/>Experience</p>
          </div>
        </div>
      </section>

      {/* The Ship Section - First Content Block */}
      <section className={styles.shipSection} data-parallax-container style={{ position: 'relative', zIndex: 10, minHeight: '750px', display: 'flex', alignItems: 'center', padding: '100px 0', overflow: 'hidden' }}>
        <div 
          className={styles.heroBgParallax}
          style={{ backgroundImage: "url('/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Shaded_deck_3.jpg')", top: '-15%' }}
          data-parallax-speed="0.1"
        ></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>

        <div className={`container ${styles.shipGrid}`} style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px' }}>
          <div className={styles.shipContent}>
            <h2 style={{color: "#E35E54", fontSize: "3.5rem", marginBottom: "20px", textShadow: "0 2px 4px rgba(0,0,0,0.8)"}}>Your home at sea: Archipel I</h2>
            <p style={{fontSize: "1.2rem", color: "#fff", lineHeight: 1.6, marginBottom: "20px", textShadow: "0 1px 3px rgba(0,0,0,0.8)"}}>
              A refined motorized catamaran designed for small-group exploration. With spacious social areas, cozy cabins and large decks to enjoy the beauty of Galapagos from sunrise to sunset.
            </p>
            <p style={{fontSize: "1.2rem", color: "#fff", lineHeight: 1.6, marginBottom: "30px", textShadow: "0 1px 3px rgba(0,0,0,0.8)"}}>
              Share the journey with friends or a partner in an environment where you can truly be yourself, creating unforgettable memories both on land and at sea.
            </p>
            <div className={styles.shipFeatures} style={{ color: "white", textShadow: "0 1px 2px rgba(0,0,0,0.8)", fontSize: "1.1rem" }}>
              <span>✓ Private Balconies</span>
              <span>✓ Panoramic Dining</span>
              <span>✓ Jacuzzi on deck</span>
              <span>✓ Stability & Comfort</span>
            </div>
          </div>
          <div className={styles.shipDynamicImages} style={{ position: 'relative', height: '440px' }}>
            {/* Photo 3 (bottom-RIGHT below ship) rises FIRST */}
            {/* Photo 3 (bottom-center) rises FIRST */}
            <div className={`${styles.shipImgCard} ${styles.shipImgOverlap2}`}
              style={{ width: '55%', height: '220px', bottom: '-225px', left: '30%', right: 'auto', cursor: 'pointer' }}
              onClick={() => openLightbox("/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sitting_area_3.jpg", "Sitting Area")}
              data-parallax-speed="-0.22" data-parallax-stagger="0">
              <div className={styles.shipImgWrapper}><img src="/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sitting_area_3.jpg" alt="Sitting Area" /></div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '50%', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ZoomIn size={18} color="white" />
              </div>
            </div>
            {/* Photo 2 (bottom-left, girls) rises SECOND */}
            {/* Photo 2 (bottom-left) rises SECOND */}
            <div className={`${styles.shipImgCard} ${styles.shipImgOverlap1}`} 
              style={{ bottom: '10px', left: '5%', width: '52%', height: '230px', zIndex: 2, transform: 'rotate(-4deg)', cursor: 'pointer' }}
              onClick={() => openLightbox("/LGBT/cute two young women having fun on the sunset beach, queer non-binary gender identity, gay lesbian love romance, boho summer vacation style wearing jeans.jpg", "LGBT Couple")}
              data-parallax-speed="-0.16" data-parallax-stagger="5">
              <div className={styles.shipImgWrapper}><img src="/LGBT/cute two young women having fun on the sunset beach, queer non-binary gender identity, gay lesbian love romance, boho summer vacation style wearing jeans.jpg" alt="LGBT Couple" /></div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '50%', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ZoomIn size={18} color="white" />
              </div>
            </div>
            {/* Photo 1 (top-right, ship) rises LAST */}
            {/* Photo 1 (top-right) rises LAST */}
            <div className={`${styles.shipImgCard} ${styles.shipImgMain}`} 
              style={{ top: '-10%', right: '10%', left: 'auto', width: '65%', height: '280px', zIndex: 1, transform: 'rotate(3deg)', cursor: 'pointer' }}
              onClick={() => openLightbox("/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Exterior_view_1.jpg", "Cruise View")}
              data-parallax-speed="-0.1" data-parallax-stagger="10">
              <div className={styles.shipImgWrapper}><img src="/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Exterior_view_1.jpg" alt="Cruise View" /></div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '50%', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ZoomIn size={18} color="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Second Content Block */}
      <section className={styles.aboutSection} data-parallax-container style={{ backgroundColor: 'var(--light-bg)', position: 'relative', zIndex: 10, overflow: 'hidden', padding: '120px 0', minHeight: '750px' }}>
        <div 
          className={styles.heroBgParallax}
          style={{ backgroundImage: "url('/LGBT/Caucasian men friend drinking champagne while having party in yacht. Attractive handsome male tourist hanging out celebrate holiday vacation trip while catamaran boat sailing during summer sunset..jpg')", top: '0%', backgroundPosition: '100% 30%', backgroundSize: 'auto 100%' }}
          data-parallax-speed="0.08"
        ></div>
        {/* Gradient exactly as before — white on left fading to transparent on right */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 65%)', zIndex: 1 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 0.7fr', gap: '80px', alignItems: 'center', marginLeft: '0', paddingLeft: '36px' }}>
          {/* 3 PHOTOS — left column */}
          <div className={styles.shipDynamicImages} style={{ height: '440px', transform: 'translateX(-20px)' }}>
            {/* Photo 3 bottom-leftish — bigger, lower, RISES FIRST */}
            <div className={`${styles.shipImgCard} ${styles.shipImgOverlap2}`}
              style={{ background: '#00838F', width: '55%', height: '220px', bottom: '-210px', left: '10%', right: 'auto', transform: 'rotate(-2deg)', cursor: 'pointer' }}
              onClick={() => openLightbox("/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Dining_area_3.jpg", "Dining")}
              data-parallax-speed="-0.22" data-parallax-stagger="0">
              <div className={styles.shipImgWrapper}><img src="/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Dining_area_3.jpg" alt="Dining" /></div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '50%', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ZoomIn size={18} color="white" />
              </div>
            </div>
            {/* Photo 2 bottom-rightish — rises SECOND */}
            <div className={`${styles.shipImgCard} ${styles.shipImgOverlap1}`}
              style={{ background: '#00838F', bottom: '10px', left: '45%', width: '52%', height: '230px', zIndex: 2, transform: 'rotate(4deg)', cursor: 'pointer' }}
              onClick={() => openLightbox("/LGBT/cute two young women having fun on the sunset beach, queer non-binary gender identity, gay lesbian love romance, boho summer vacation style wearing jeans.jpg", "LGBT Couple")}
              data-parallax-speed="-0.16" data-parallax-stagger="5">
              <div className={styles.shipImgWrapper}><img src="/LGBT/cute two young women having fun on the sunset beach, queer non-binary gender identity, gay lesbian love romance, boho summer vacation style wearing jeans.jpg" alt="LGBT Couple" /></div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '50%', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ZoomIn size={18} color="white" />
              </div>
            </div>
            {/* Photo 1 top-leftish — rises LAST */}
            <div className={`${styles.shipImgCard} ${styles.shipImgMain}`}
              style={{ background: '#00838F', top: '-9%', left: '10%', right: 'auto', width: '65%', height: '280px', zIndex: 1, transform: 'rotate(-3deg)', cursor: 'pointer' }}
              onClick={() => openLightbox("/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sun_deck_4.jpg", "Sun Deck")}
              data-parallax-speed="-0.1" data-parallax-stagger="10">
              <div className={styles.shipImgWrapper}><img src="/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sun_deck_4.jpg" alt="Sun Deck" /></div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', borderRadius: '50%', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ZoomIn size={18} color="white" />
              </div>
            </div>
          </div>

          {/* TEXT — right column */}
          <div data-parallax-speed="-0.08" data-parallax-stagger="0" style={{ textAlign: 'center', marginTop: '60px' }}>
            <h2 style={{fontSize: "3.5rem", color: "var(--primary)", lineHeight: 1.1, marginBottom: "30px"}}>
              A journey where you can be <span style={{color: "#E35E54"}}>fully yourself</span>
            </h2>
            <p style={{fontSize: "1.2rem", color: "#444", marginBottom: "20px", lineHeight: 1.6, fontWeight: 500}}>
              This is more than a cruise. It&apos;s a space to explore one of the world&apos;s most pristine ecosystems with freedom, respect and joy.
            </p>
            <p style={{fontSize: "1.1rem", color: "#555", lineHeight: 1.6, marginBottom: "30px"}}>
              We believe travel should be an authentic expression of who you are. Join like-minded travelers for meaningful conversations, genuine connections and unforgettable moments—always with pride.
            </p>
          </div>
        </div>
      </section>

      {/* Main Galapagos Experience Scroll */}
      <section style={{ position: 'relative', zIndex: 20 }}>
        <GalapagosScroll />
      </section>

      {/* Life on Board */}
      <section className={styles.lifeOnBoard} style={{ position: 'relative', zIndex: 10, backgroundColor: 'white' }}>
        <div className="container">
          <div className={styles.lifeOnBoardTitle}>Life on board</div>
          <div className={styles.lifeIcons}>
            <div className={styles.lifeIconItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              All-inclusive<br/>ocean views
            </div>
            <div className={styles.lifeIconItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Sun deck &<br/>relaxation
            </div>
            <div className={styles.lifeIconItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              Lounge &<br/>indoor bar
            </div>
            <div className={styles.lifeIconItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Snorkeling &<br/>kayaking
            </div>
            <div className={styles.lifeIconItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="18" height="12" rx="2" ry="2"/><path d="M3 12h18"/><path d="M12 8v12"/><path d="M7 4h10"/></svg>
              Private cabins<br/>& daily service
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Form Section */}
      <section className={styles.bookingSection} style={{ position: 'relative', zIndex: 10, backgroundColor: 'var(--light-bg)' }}>
        <div className={`container ${styles.bookingGrid}`}>
          <div className={styles.formBox}>
            <h3 style={{color: '#E35E54'}}>Ready to sail Galapagos with pride?</h3>
            <p>Tell us a bit about you and we&apos;ll help you plan the perfect journey.</p>
            <form>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Full name" className={styles.inputField} />
                <input type="email" placeholder="Email address" className={styles.inputField} />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Dates" className={styles.inputField} />
                <input type="text" placeholder="Traveling companions" className={styles.inputField} />
              </div>
              <div className={styles.inputGroup}>
                <select className={styles.inputField}>
                  <option>Cabin preference</option>
                  <option>Standard</option>
                  <option>Suite</option>
                </select>
                <input type="text" placeholder="Group / Interested" className={styles.inputField} />
              </div>
              <button type="submit" className={styles.submitBtn} style={{backgroundColor: '#E35E54'}}>REQUEST AVAILABILITY</button>
            </form>
          </div>
          <div className={styles.formBox}>
            <h3>FAQ</h3>
            <div style={{marginTop: "20px"}}>
              <div style={{padding: "15px 0", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#444"}}>
                Is this cruise only for LGBT+ travelers? <span>+</span>
              </div>
              <div style={{padding: "15px 0", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#444"}}>
                How many guests are on board? <span>+</span>
              </div>
              <div style={{padding: "15px 0", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#444"}}>
                What is included in the cruise fee? <span>+</span>
              </div>
              <div style={{padding: "15px 0", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#444"}}>
                Is the itinerary suitable for all? <span>+</span>
              </div>
              <div style={{padding: "15px 0", display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#444"}}>
                How do I get to Galapagos? <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.logo}>
              LGBT+ <span>GALAPAGOS</span> EXPERIENCE
            </div>
            <div className={styles.footerLinks}>
              <a href="#">The Cruise</a>
              <a href="#">Itinerary</a>
              <a href="#">Experience</a>
              <a href="#">About Us</a>
              <a href="#">FAQ</a>
            </div>
            <div style={{textAlign: "right", fontSize: "0.85rem", opacity: 0.8}}>
              info@galapagosexperience.travel<br/>
              +593 99 123 4567
            </div>
          </div>
        </div>
      </footer>
      <Lightbox isOpen={lightboxState.isOpen} imageSrc={lightboxState.src} imageAlt={lightboxState.alt} onClose={() => setLightboxState({ ...lightboxState, isOpen: false })} />
    </main>
  );
}
