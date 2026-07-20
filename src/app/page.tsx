"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("galapagos");

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

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
          <a href="#">About Us</a>
          <a href="#">FAQ</a>
        </div>
        <button className={styles.btnPrimary} style={{backgroundColor: '#E35E54'}}>REQUEST YOUR CABIN</button>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: "url('/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Exterior_view_1.jpg')" }}>
        <div className={styles.heroOverlay}></div>
        <div className={`${styles.heroContent} fade-in`}>
          <h1 className={styles.heroTitle} style={{textAlign: 'center'}}>
            Sail Galapagos<br/>with Pride
            <svg style={{display: 'inline-block', width: '0.8em', height: '0.8em', marginLeft: '12px'}} viewBox="0 0 24 24" fill="url(#rainbowGradient)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </h1>
          <p className={styles.heroSubtitle}>
            An intimate LGBT+ cruise through the Galapagos Islands, where nature, freedom and connection come together at sea.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary} style={{backgroundColor: '#E35E54'}}>REQUEST YOUR CABIN</button>
            <button className={styles.btnOutline}>VIEW ITINERARY</button>
          </div>
        </div>
        
        {/* Curvature exactly replicating the original Image 1 */}
        <div className={styles.heroCurve}>
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Teal Swoop (Left) */}
            <path d="M 0,40 C 150,80 300,140 450,200 L 0,200 Z" fill="#00BCD4" />
            
            {/* Rainbow Swoops (Right) - 5 separate overlapping colored bands */}
            <path d="M 700,200 C 900,150 1100,60 1440,40 L 1440,200 L 700,200 Z" fill="#F44336" />
            <path d="M 730,200 C 920,160 1110,75 1440,60 L 1440,200 L 730,200 Z" fill="#FF9800" />
            <path d="M 760,200 C 940,170 1120,90 1440,80 L 1440,200 L 760,200 Z" fill="#FFEB3B" />
            <path d="M 790,200 C 960,180 1130,105 1440,100 L 1440,200 L 790,200 Z" fill="#4CAF50" />
            <path d="M 820,200 C 980,190 1140,120 1440,120 L 1440,200 L 820,200 Z" fill="#2196F3" />
            
            {/* White Background Curve (Front) */}
            <path d="M 0,100 C 300,220 700,220 1100,140 C 1250,110 1350,120 1440,140 L 1440,200 L 0,200 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statBar}>
        <div className={`container ${styles.statGrid}`}>
          {/* Duration: Coral */}
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#E35E54" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div className={styles.statTextContainer}>
              <div className={styles.statTitle}>4 Days / 3 Nights</div>
              <div className={styles.statDesc}>Unforgettable journey</div>
            </div>
          </div>
          {/* Ship: Turquoise */}
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#00BCD4" strokeWidth="1.5"><path d="M22 21.05V15a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6.05"/><path d="M4 13L2.5 5.5A2 2 0 0 1 4.5 3h15a2 2 0 0 1 2 2.5L20 13"/><path d="M2 21h20"/></svg>
            </div>
            <div className={styles.statTextContainer}>
              <div className={styles.statTitle}>ARCHIPEL I</div>
              <div className={styles.statDesc}>Intimate & Comfortable</div>
            </div>
          </div>
          {/* Group: Blue/Purple */}
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#5E35B1" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div className={styles.statTextContainer}>
              <div className={styles.statTitle}>SMALL GROUP</div>
              <div className={styles.statDesc}>Max 16 Guests</div>
            </div>
          </div>
          {/* LGBT+ Friendly: Rainbow Heart */}
          <div className={styles.statItem}>
            <div className={styles.statIcon}>
              <svg viewBox="0 0 24 24" fill="url(#thinRainbowGradient)" stroke="none" strokeWidth="0"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <div className={styles.statTextContainer}>
              <div className={styles.statTitle}>LGBT+ FRIENDLY</div>
              <div className={styles.statDesc}>Inclusive & Welcoming</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutContent}>
            <h2>A journey where you<br/>can be fully yourself</h2>
            <p style={{borderTop: "2px solid #E35E54", paddingTop: "20px", display: "inline-block", marginTop: "10px"}}>
              This is more than a cruise. It&apos;s a space to explore Galapagos with freedom, respect and joy. Meaningful travels, genuine connections and unforgettable moments—always with pride.
            </p>
            <div className={styles.aboutFeatures} style={{marginTop: "20px"}}>
              <div>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#E35E54" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <div className={styles.featureText} style={{color: '#E35E54'}}>Feel<br/>Welcomed</div>
              </div>
              <div>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#4DB6AC" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <div className={styles.featureText} style={{color: '#4DB6AC'}}>Connect<br/>with nature</div>
              </div>
              <div>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9C27B0" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className={styles.featureText} style={{color: '#9C27B0'}}>Share<br/>the Journey</div>
              </div>
              <div>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                </div>
                <div className={styles.featureText} style={{color: '#FF9800'}}>Travel<br/>with pride</div>
              </div>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1516685304081-de7947d419d5?auto=format&fit=crop&q=80&w=800" alt="Couple enjoying the cruise" className={styles.aboutImage} />
          </div>
        </div>
      </section>

      {/* Your Home At Sea: Archipel I */}
      <section className={styles.shipSection}>
        <div className={`container ${styles.shipGrid}`}>
          <img src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&q=80&w=800" alt="Galapagos Sea Turtle" className={styles.shipImageBig} />
          
          <div className={styles.shipContent}>
            <h2>Your home at sea: Archipel I</h2>
            <p>A refined motorized catamaran designed for small-group exploration, with spacious social areas, cozy cabins and large decks to enjoy the beauty of Galapagos from sunrise to sunset.</p>
            <div className={styles.shipFeatures}>
              <div className={styles.shipFeatureItem}>
                <svg className={styles.shipFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="18" height="12" rx="2" ry="2"/><path d="M3 12h18"/><path d="M12 8v12"/><path d="M7 4h10"/></svg>
                Comfortable cabins<br/>with private bathrooms
              </div>
              <div className={styles.shipFeatureItem}>
                <svg className={styles.shipFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
                Spacious lounge<br/>& sun deck
              </div>
              <div className={styles.shipFeatureItem}>
                <svg className={styles.shipFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                Indoor-outdoor<br/>living
              </div>
              <div className={styles.shipFeatureItem}>
                <svg className={styles.shipFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Small group<br/>experience
              </div>
              <div className={styles.shipFeatureItem}>
                <svg className={styles.shipFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Al fresco dining
              </div>
              <div className={styles.shipFeatureItem}>
                <svg className={styles.shipFeatureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                Knowledgeable<br/>guides on board
              </div>
            </div>
          </div>
          
          <div className={styles.shipImagesSmall}>
            <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800" alt="Cabin" className={styles.shipImageSmall} />
            <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800" alt="Dining" className={styles.shipImageSmall} />
          </div>
        </div>
      </section>

      {/* Horizontal Itineraries Section (From Image 2) as requested */}
      <section className={styles.itinerariesSection}>
        <div className="container">
          <h2 className={styles.aboutContent} style={{fontSize: "2.5rem", color: "var(--primary)", marginBottom: "40px", textAlign: "left"}}>
            <span style={{color: "#E35E54"}}>4 days of Unforgettable journeys</span> through<br/>Galapagos, Andes & Amazonia
          </h2>
          
          <div className={styles.accordionContainer}>
            {/* Galapagos */}
            <div className={`${styles.accordionItem} ${activeAccordion === 'galapagos' ? styles.active : ''}`}>
              {activeAccordion === 'galapagos' ? (
                <div className={styles.accordionHeaderThin} onClick={() => toggleAccordion('galapagos')}>
                  <div className={styles.accordionTitleThin}>
                    <div className={styles.accordionIconThin} style={{backgroundColor: '#00838F'}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <span style={{color: '#00838F'}}>GALAPAGOS</span>
                  </div>
                  <svg className={styles.accordionChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              ) : (
                <div className={styles.accordionHeader} onClick={() => toggleAccordion('galapagos')}>
                  <div className={styles.itineraryImageContainer}>
                    <img src="/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Exterior_view_1.jpg" alt="Galapagos" className={styles.itineraryImage} />
                  </div>
                  <div className={styles.itineraryContent} style={{paddingLeft: '15px'}}>
                    <div className={styles.itineraryHeader}>
                      <h3 className={styles.itineraryTitle} style={{color: '#00838F'}}>GALAPAGOS</h3>
                    </div>
                    <p className={styles.itineraryDesc}>Sail through living landscapes in a luxury cruise. Encounter rare wildlife, pristine beaches, and volcanic islands like no other. Experience the ultimate adventure in one of the most unique ecosystems on the planet, where every day brings a new discovery.</p>
                    
                    <svg className={styles.itineraryIconGiant} viewBox="0 0 24 24" fill="none" stroke="#00838F" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    
                    <button className={styles.btnToggleItinerary} style={{borderColor: '#00838F', color: '#00838F'}}>
                      VIEW ITINERARY
                    </button>
                  </div>
                </div>
              )}
              
              <div className={styles.accordionContent}>
                <div className={styles.accordionBody}>
                  <p className={styles.programIntro}>Sail through living landscapes in a luxury cruise. Encounter rare wildlife, pristine beaches, and volcanic islands like no other.</p>
                  
                  <div className={styles.dayRow}>
                    <img src="/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Exterior_view_1.jpg" alt="Arrival" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#00838F'}}>Day 1</span> San Cristobal</div>
                      <p className={styles.dayDesc}>Arrival at San Cristobal airport and transfer to the harbour. In the afternoon, visit the Interpretation Centre to learn about the unique archipelago and its fascinating history, then hike to Frigatebird Hill for a panoramic view and to observe magnificent frigatebirds nesting. Enjoy a welcoming dinner aboard.</p>
                    </div>
                  </div>
                  <div className={`${styles.dayRow} ${styles.reverse}`}>
                    <img src="/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sitting_area_3.jpg" alt="Santa Fe" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#00838F'}}>Day 2</span> Santa Fe & South Plaza</div>
                      <p className={styles.dayDesc}>Morning visit to Santa Fe, home to endemic species like the Galapagos hawk and sea lion colonies. Hike through the giant prickly pear cactus forest. Afternoon at South Plaza to observe hybrid land iguanas and swallow-tailed gulls nesting in rugged cliffs. A day full of unique wildlife encounters.</p>
                    </div>
                  </div>
                  <div className={styles.dayRow}>
                    <img src="/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Sun_deck_4.jpg" alt="North Seymour" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#00838F'}}>Day 3</span> North Seymour & Chinese Hat</div>
                      <p className={styles.dayDesc}>Explore North Seymour, an important nesting ground for blue-footed boobies and frigate birds. Later, approach the volcanic cone of Chinese Hat to observe Galapagos penguins and pioneer species sprouting on the unique lava fields. Snorkel in crystal-clear waters full of marine life.</p>
                    </div>
                  </div>
                  <div className={`${styles.dayRow} ${styles.reverse}`}>
                    <img src="/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Dining_area_3.jpg" alt="Twin Craters" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#00838F'}}>Day 4</span> Twin Craters & Departure</div>
                      <p className={styles.dayDesc}>Visit the lush scalesia forest of El Chato Tortoise Reserve and the impressive Twin Craters on Santa Cruz Island. See giant tortoises roaming in the wild before transferring to Baltra airport for your departure flight. Farewell to the enchanted islands.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Andes */}
            <div className={`${styles.accordionItem} ${activeAccordion === 'andes' ? styles.active : ''}`}>
              {activeAccordion === 'andes' ? (
                <div className={styles.accordionHeaderThin} onClick={() => toggleAccordion('andes')}>
                  <div className={styles.accordionTitleThin}>
                    <div className={styles.accordionIconThin} style={{backgroundColor: '#D17B40'}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <span style={{color: '#D17B40'}}>ANDES</span>
                  </div>
                  <svg className={styles.accordionChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              ) : (
                <div className={`${styles.accordionHeader} ${styles.reverse}`} onClick={() => toggleAccordion('andes')}>
                  <div className={styles.itineraryImageContainer}>
                    <img src="/ANDES-20260720T162513Z-1-001/ANDES/Cotopaxi volcano eruption in Ecuador, South America.jpg" alt="Andes" className={styles.itineraryImage} />
                  </div>
                  <div className={styles.itineraryContent} style={{paddingLeft: '15px'}}>
                    <div className={styles.itineraryHeader}>
                      <h3 className={styles.itineraryTitle} style={{color: '#D17B40'}}>ANDES</h3>
                    </div>
                    <p className={styles.itineraryDesc}>Discover majestic mountains, colonial towns, and vibrant culture. A perfect blend of adventure and tradition. Immerse yourself in the rich history and breathtaking landscapes of the Ecuadorian highlands.</p>
                    
                    <svg className={styles.itineraryIconGiant} viewBox="0 0 24 24" fill="none" stroke="#D17B40" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    
                    <button className={styles.btnToggleItinerary} style={{borderColor: '#D17B40', color: '#D17B40'}}>
                      VIEW ITINERARY
                    </button>
                  </div>
                </div>
              )}
              
              <div className={styles.accordionContent}>
                <div className={styles.accordionBody}>
                  <p className={styles.programIntro}>Discover majestic mountains, colonial towns, and vibrant culture. A perfect blend of adventure and tradition with private transportation and personalized service.</p>
                  
                  <div className={styles.dayRow}>
                    <img src="/ANDES-20260720T162513Z-1-001/ANDES/Basilica.jpg" alt="Quito" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#D17B40'}}>Day 1</span> Colonial Quito & Middle of the World</div>
                      <p className={styles.dayDesc}>A full-day exploration of Ecuador's capital. Visit Quito's beautifully preserved Historic Center with its colonial churches, then stand on the Equator at the Middle of the World Monument. Enjoy stunning views of the city from the Teleferico and immerse in local history.</p>
                    </div>
                  </div>
                  <div className={`${styles.dayRow} ${styles.reverse}`}>
                    <img src="/ANDES-20260720T162513Z-1-001/ANDES/Cotopaxi volcano eruption in Ecuador, South America.jpg" alt="Cotopaxi" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#D17B40'}}>Day 2</span> Cotopaxi & Historic Hacienda</div>
                      <p className={styles.dayDesc}>Enjoy a scenic drive to Cotopaxi National Park. Explore the Limpiopungo Lagoon observing wild horses and unique páramo vegetation, before relaxing at a traditional Andean hacienda surrounded by breathtaking mountain views. A truly spectacular alpine experience.</p>
                    </div>
                  </div>
                  <div className={styles.dayRow}>
                    <img src="/ANDES-20260720T162513Z-1-001/ANDES/Carretera vista al Cotopaxi.jpg" alt="Horseback Riding" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#D17B40'}}>Day 3</span> Andes Horseback Riding & Drag Show</div>
                      <p className={styles.dayDesc}>A memorable horseback riding experience through the beautiful highlands. Return to Quito in the evening to experience vibrant LGBTQ+ nightlife with a lively local drag show that celebrates diversity and inclusion in the capital.</p>
                    </div>
                  </div>
                  <div className={`${styles.dayRow} ${styles.reverse}`}>
                    <img src="/ANDES-20260720T162513Z-1-001/ANDES/Papallacta.jpg" alt="Papallacta" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#D17B40'}}>Day 4</span> Papallacta Hot Springs</div>
                      <p className={styles.dayDesc}>Travel east across the Andes to relax in the famous natural thermal pools of Papallacta, surrounded by spectacular mountain scenery and fresh air. A perfect, rejuvenating end to your Andean adventure before returning home.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amazonia */}
            <div className={`${styles.accordionItem} ${activeAccordion === 'amazonia' ? styles.active : ''}`}>
              {activeAccordion === 'amazonia' ? (
                <div className={styles.accordionHeaderThin} onClick={() => toggleAccordion('amazonia')}>
                  <div className={styles.accordionTitleThin}>
                    <div className={styles.accordionIconThin} style={{backgroundColor: '#4CAF50'}}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <span style={{color: '#4CAF50'}}>AMAZONIA</span>
                  </div>
                  <svg className={styles.accordionChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              ) : (
                <div className={styles.accordionHeader} onClick={() => toggleAccordion('amazonia')}>
                  <div className={styles.itineraryImageContainer}>
                    <img src="/AMAZON-20260720T162515Z-1-001/AMAZON/DSC08527.jpg" alt="Amazonia" className={styles.itineraryImage} />
                  </div>
                  <div className={styles.itineraryContent} style={{paddingLeft: '15px'}}>
                    <div className={styles.itineraryHeader}>
                      <h3 className={styles.itineraryTitle} style={{color: '#4CAF50'}}>AMAZONIA</h3>
                    </div>
                    <p className={styles.itineraryDesc}>Dive into the Amazon rainforest. Cruise rivers, spot exotic wildlife, and connect with rich plant life and local communities. Wake up to the sounds of the jungle and explore one of the most biodiverse regions on Earth.</p>
                    
                    <svg className={styles.itineraryIconGiant} viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    
                    <button className={styles.btnToggleItinerary} style={{borderColor: '#4CAF50', color: '#4CAF50'}}>
                      VIEW ITINERARY
                    </button>
                  </div>
                </div>
              )}
              
              <div className={styles.accordionContent}>
                <div className={styles.accordionBody}>
                  <p className={styles.programIntro}>Experience the Lower Cuyabeno aboard traditional dugout canoes, exploring pristine blackwater forests, spotting diverse wildlife, and witnessing the rainforest waking up at dawn.</p>
                  
                  <div className={styles.dayRow}>
                    <img src="/AMAZON-20260720T162515Z-1-001/AMAZON/DSC08527.jpg" alt="Rainforest Journey" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#4CAF50'}}>Day 1</span> Journey to the Rainforest</div>
                      <p className={styles.dayDesc}>Arrive at Cuyabeno Bridge and embark on a motorized canoe journey down the narrow river to your lodge, amazed by the incredible flora and fauna along the way. Settle in and enjoy the peaceful sounds of the rainforest as night falls.</p>
                    </div>
                  </div>
                  <div className={`${styles.dayRow} ${styles.reverse}`}>
                    <img src="/AMAZON-20260720T162515Z-1-001/AMAZON/DSC_0051.jpg" alt="Laguna Grande" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#4CAF50'}}>Day 2</span> Laguna Grande Exploration</div>
                      <p className={styles.dayDesc}>Journey to Laguna Grande, a scenic blackwater lake, followed by a guided hike along the Palma Roja Trail to spot monkeys, toucans, and macaws. Complete the day with a thrilling night walk to see nocturnal creatures in their natural habitat.</p>
                    </div>
                  </div>
                  <div className={styles.dayRow}>
                    <img src="/AMAZON-20260720T162515Z-1-001/AMAZON/DSC_0121.jpg" alt="Amazon Expedition" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#4CAF50'}}>Day 3</span> Dawn to Sunset Adventure</div>
                      <p className={styles.dayDesc}>Early morning expedition through the flooded forest to witness the sunrise and active wildlife. Afternoon canoe journey to La Bocana, where you may spot playful pink river dolphins and exotic birds soaring overhead.</p>
                    </div>
                  </div>
                  <div className={`${styles.dayRow} ${styles.reverse}`}>
                    <img src="/AMAZON-20260720T162515Z-1-001/AMAZON/DSC_0001.jpg" alt="Departure" className={styles.dayImage} />
                    <div className={styles.dayInfo}>
                      <div className={styles.dayTitle}><span className={styles.dayBadge} style={{backgroundColor: '#4CAF50'}}>Day 4</span> Goodbye Amazon</div>
                      <p className={styles.dayDesc}>Enjoy a final breakfast at the lodge before journeying back up the river by motorized canoe, taking in the last sights and sounds of the Amazon, to meet your transportation for the return trip to Quito with unforgettable memories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Encounters & Welcoming Box */}
      <section className={styles.wildlifeSection}>
        <div className={`container ${styles.wildlifeGrid}`}>
          <div className={styles.wildlifeLeft}>
            <h3>Wildlife encounters<br/>that stay with you</h3>
            <p>From giant tortoises to marine iguanas and blue-footed boobies, every day brings unique moments in nature.</p>
            <div className={styles.animalsList}>
              <div className={styles.animalItem}>
                <img src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80&w=200" className={styles.animalCircle} alt="Giant Tortoise" />
                <div className={styles.animalName}>Giant Tortoise</div>
              </div>
              <div className={styles.animalItem}>
                <img src="https://images.unsplash.com/photo-1615099352684-250811e5fc23?auto=format&fit=crop&q=80&w=200" className={styles.animalCircle} alt="Blue-footed Booby" />
                <div className={styles.animalName}>Blue-footed Booby</div>
              </div>
              <div className={styles.animalItem}>
                <img src="https://images.unsplash.com/photo-1558231589-9851601a0528?auto=format&fit=crop&q=80&w=200" className={styles.animalCircle} alt="Marine Iguana" />
                <div className={styles.animalName}>Marine Iguana</div>
              </div>
              <div className={styles.animalItem}>
                <img src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&q=80&w=200" className={styles.animalCircle} alt="Sea Turtle" />
                <div className={styles.animalName}>Sea Turtle</div>
              </div>
              <div className={styles.animalItem}>
                <img src="https://images.unsplash.com/photo-1615099352684-250811e5fc23?auto=format&fit=crop&q=80&w=200" className={styles.animalCircle} alt="Galapagos Finch" />
                <div className={styles.animalName}>Galapagos Finch</div>
              </div>
            </div>
          </div>
          
          <div className={styles.welcomingBox}>
            <div className={styles.welcomingContent}>
              <h3>A welcoming space<br/>for LGBT+ travelers</h3>
              <p>You&apos;ll travel, feel safe, and be YOU—just as you are.</p>
              <ul className={styles.welcomeList}>
                <li><svg className={styles.checkIcon} viewBox="0 0 24 24" fill="#E35E54"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> LGBT+ friendly experience</li>
                <li><svg className={styles.checkIcon} viewBox="0 0 24 24" fill="#E35E54"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Respectful and inclusive environment</li>
                <li><svg className={styles.checkIcon} viewBox="0 0 24 24" fill="#E35E54"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Like-minded travelers, real connections</li>
                <li><svg className={styles.checkIcon} viewBox="0 0 24 24" fill="#E35E54"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Shared moments, not mass tourism</li>
              </ul>
            </div>
            <img src="https://images.unsplash.com/photo-1520697920379-3baec16ec221?auto=format&fit=crop&q=80&w=800" alt="Happy LGBT Couple" className={styles.welcomingImage} />
            <div className={styles.rainbowCorner}>
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                 <path d="M0 40 L100 40 L100 0 C50 0 0 20 0 40 Z" fill="url(#rainbowGradient)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Life on Board */}
      <section className={styles.lifeOnBoard}>
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
      <section className={styles.bookingSection}>
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
      <footer className={styles.footer}>
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
    </main>
  );
}
