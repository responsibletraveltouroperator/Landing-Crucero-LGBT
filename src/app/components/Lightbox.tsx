"use client";
import { X } from "lucide-react";
import { useEffect } from "react";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export default function Lightbox({ isOpen, imageSrc, imageAlt, onClose }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <button className={styles.closeBtn} onClick={onClose} aria-label="Close Lightbox">
        <X size={32} color="white" />
      </button>
      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt={imageAlt} className={styles.lightboxImage} />
      </div>
    </div>
  );
}
