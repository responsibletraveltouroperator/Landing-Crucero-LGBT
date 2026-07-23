"use client";
import { useState } from "react";
import ItineraryExplorer from "./ItineraryExplorer";
import styles from "./ItineraryCovers.module.css";

const COVERS = [
  {
    id: "galapagos",
    title: "Galapagos",
    subtitle: "Explore the Enchanted Isles",
    image: "/Archipel I-20260720T160845Z-1-001/Archipel I/Archipel_I_2017_Exterior_view_1.jpg",
    color: "#00BCD4"
  },
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

export default function ItineraryCovers() {
  const [activeItinerary, setActiveItinerary] = useState<string | null>(null);

  return (
    <section className={styles.coversSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span style={{color: "#E35E54"}}>Select your journey</span> and discover<br/>the experience
        </h2>
        
        <div className={styles.coversGrid}>
          {COVERS.map((cover) => (
            <div 
              key={cover.id} 
              className={styles.coverCard} 
              onClick={() => setActiveItinerary(cover.id)}
            >
              <img src={cover.image} alt={cover.title} className={styles.coverImage} />
              <div className={styles.coverOverlay}></div>
              <div className={styles.coverContent}>
                <h3 className={styles.coverTitle}>{cover.title}</h3>
                <p className={styles.coverSubtitle}>{cover.subtitle}</p>
                <button className={styles.btnDiscover} style={{ color: cover.color }}>
                  Descubre {cover.title}
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
