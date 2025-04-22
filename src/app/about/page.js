// ========== VARIABLES (Easy to find and modify) ==========
const PAGE_TITLE = "About Our Station";
const PAGE_DESCRIPTION = "Learn about our history, values, and team.";

// Hero Section
const HERO_TITLE = "Our Story";
const HERO_DESCRIPTION = "We've been serving the community with quality content since our founding. Our journey reflects our commitment to excellence and innovation.";
const HERO_BUTTON_TEXT = "Contact Us";
const HERO_BUTTON_LINK = "/contact";

// Photo Gallery
const GALLERY_TITLE = "Our Team in Action";
const GALLERY_IMAGES = [
  {
    src: "/images/team1.jpg",
    alt: "Our team at the annual conference",
    caption: "Annual Conference 2023",
    width: 800,
    height: 600
  },
  {
    src: "/images/studio.jpg",
    alt: "Our state-of-the-art studio",
    caption: "Broadcasting Studio",
    width: 800,
    height: 600
  },
  {
    src: "/images/community.jpg",
    alt: "Team volunteering in community",
    caption: "Community Service Day",
    width: 800,
    height: 600
  },
];

// Station History
const HISTORY_TITLE = "Our Journey Through the Years";
const HISTORY_TIMELINE = [
  {
    year: "2005",
    title: "Station Founded",
    description: "Established with a small team and a vision to provide quality local content."
  },
  {
    year: "2010",
    title: "First Expansion",
    description: "Upgraded our facilities and doubled our broadcasting range."
  },
  {
    year: "2018",
    title: "Digital Transition",
    description: "Fully transitioned to digital broadcasting and launched our streaming platform."
  },
  {
    year: "2023",
    title: "Community Award",
    description: "Recognized as the best local station for community engagement."
  }
];

// ========== COMPONENT ==========
import Image from 'next/image';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{HERO_TITLE}</h1>
          <p className={styles.heroDescription}>{HERO_DESCRIPTION}</p>
          <a 
            href={HERO_BUTTON_LINK} 
            className={styles.heroButton}
          >
            {HERO_BUTTON_TEXT}
          </a>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <h2 className={styles.sectionTitle}>{GALLERY_TITLE}</h2>
          <div className={styles.galleryGrid}>
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} className={styles.galleryCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className={styles.galleryImage}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.jpg"
                  />
                </div>
                <div className={styles.imageCaption}>
                  <p>{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Station History */}
      <section className={styles.historySection}>
        <div className={styles.historyContainer}>
          <h2 className={styles.sectionTitle}>{HISTORY_TITLE}</h2>
          <div className={styles.timeline}>
            {HISTORY_TIMELINE.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarkerContainer}>
                  <div className={styles.timelineMarker}>
                    {item.year}
                  </div>
                  {index !== HISTORY_TIMELINE.length - 1 && (
                    <div className={styles.timelineConnector}></div>
                  )}
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
