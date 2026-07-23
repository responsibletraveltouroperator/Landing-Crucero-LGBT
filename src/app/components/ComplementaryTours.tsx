"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ItineraryCovers.module.css"; // Reuse the GTA style covers CSS
import ItineraryExplorer from "./ItineraryExplorer";

const COMPLEMENTARY_TOURS = [
  {
    id: "andes",
    title: "Andes",
    subtitle: "Journey through the Highlands",
    image: "/ANDES-20260720T162513Z-1-001/ANDES/Cotopaxi volcano eruption in Ecuador, South America.jpg",
    color: "#D17B40"
  },
  {
    id: "amazonia",
    title: "Amazonia",
    subtitle: "Dive into the Rainforest",
    image: "/AMAZON-20260720T162515Z-1-001/AMAZON/DSC08527.jpg",
    color: "#4CAF50"
  }
];

export default function ComplementaryTours() {
  const [activeItinerary, setActiveItinerary] = useState<string | null>(null);

  return (
    <section className={styles.coversSection} style={{ position: 'relative', zIndex: 10, backgroundColor: 'var(--light-bg)', paddingBottom: '80px' }}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span style={{color: "#E35E54"}}>Complement your trip</span><br/>and discover more of Ecuador
        </h2>
        
        <div className={styles.coversGrid} style={{ justifyContent: 'center', gap: '40px' }}>
          {COMPLEMENTARY_TOURS.map((cover) => (
            <div 
              key={cover.id} 
              className={styles.coverCard} 
              onClick={() => setActiveItinerary(cover.id)}
            >
              <Image src={cover.image} alt={cover.title} className={styles.coverImage} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              <div className={styles.coverOverlay}></div>
              <div className={styles.coverContent}>
                <h3 className={styles.coverTitle}>{cover.title}</h3>
                <p className={styles.coverSubtitle}>{cover.subtitle}</p>
                <button className={styles.btnDiscover} style={{ color: cover.color }}>
                  Discover {cover.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal for the GSAP Horizontal Experience */}
      {activeItinerary && (
        <div className={styles.modalOverlay}>
          <button className={styles.btnClose} onClick={() => setActiveItinerary(null)}>
            Volver a la página principal ✕
          </button>
          <div className={styles.modalContent}>
            <ItineraryExplorer initialTab={activeItinerary as any} />
          </div>
        </div>
      )}
    </section>
  );
}
