// ========== VARIABLES (Easy to find and modify) ==========
const PAGE_TITLE = "Contact Us";
const PAGE_DESCRIPTION = "Get in touch with our team for inquiries, support, or partnership opportunities.";

// Hero Section
const HERO_TITLE = "Get In Touch";
const HERO_DESCRIPTION = "We'd love to hear from you! Reach out through any of the channels below.";
const SITE_LOGO = {
  src: "/images/logo.png",
  alt: "Our Station Logo",
  width: 200,
  height: 100
};

// Contact Information Table
const CONTACT_TITLE = "How to Reach Us:";
const CONTACT_INFO = [
  {
    category: "Address",
    value: "ORNER ANDRIES POTGIETER AND PLAYFAIR BLVD, VANDERBIJLPARK, 1900"
  },
  {
    category: "General Info",
    value: "016-110-0769"
  },
  {
    category: "General Fax",
    value: "016-950-6791"
  },

  {
    category: "General Email",
    value: "INFO@VUTFM.CO.ZA"
  },
  {
    category: "Press & Media Info",
    value: "PRESS@VUTFM.CO.ZA"
  },

];

// ========== COMPONENT ==========
import Image from 'next/image';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section with Logo */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <Image
              src={SITE_LOGO.src}
              alt={SITE_LOGO.alt}
              width={SITE_LOGO.width}
              height={SITE_LOGO.height}
              className={styles.logo}
              priority
            />
          </div>
          <h1 className={styles.heroTitle}>{HERO_TITLE}</h1>
          <p className={styles.heroDescription}>{HERO_DESCRIPTION}</p>
        </div>
      </section>

      {/* Contact Information Table */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2 className={styles.sectionTitle}>{CONTACT_TITLE}</h2>
          <div className={styles.contactTable}>
            {CONTACT_INFO.map((item, index) => (
              <div key={index} className={styles.contactRow}>
                <div className={styles.contactCategory}>{item.category}</div>
                <div className={styles.contactValue}>
                  {item.category.includes("Email") ? (
                    <a href={`mailto:${item.value}`} className={styles.contactLink}>
                      {item.value}
                    </a>
                  ) : item.category.includes("Address") ? (
                    <span>{item.value}</span>
                  ) : (
                    <a href={`tel:${item.value.replace(/\D/g, '')}`} className={styles.contactLink}>
                      {item.value}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
