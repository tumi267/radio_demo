'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FlipCard.module.css';

function FlipCard({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    if (!isAnimating) {
      setIsAnimating(true);
     
    }
  };

  return (
    <div className={`${styles.container} ${isFlipped ? styles.flipped : ''}`}>
      <div 
        className={`${styles.card} ${isFlipped ? styles.flipped : ''} ${isAnimating ? styles.animating : ''}`}
        onAnimationEnd={() => setIsAnimating(false)}
      >
        <div className={styles.front} onClick={flipCard}>
          {data?.image && (
            <div className={styles.imageWrapper}>
              <Image
                src={data.image}
                alt="Card content"
                fill
                className={styles.image}
                sizes="100vw"
                priority
              />
            </div>
          )}
          <div className={styles.content}>
            <p>Click to flip</p>
          </div>
        </div>
        <div className={styles.back}>
          <button 
            className={styles.flipBackButton}
            onClick={(e) => {
              e.stopPropagation();
              flipCard();
            }}
            aria-label="Flip back"
          >
            ×
          </button>
          <div className={styles.backContent}>
            {data?.backContent || <p>Card Back Content</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;