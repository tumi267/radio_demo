'use client'
import React, { useRef, useState } from 'react'
import styles from './OnAir.module.css'

function OnAir() {
    let showtitle='Listen to the jazz hour'
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (!isPlaying) {
    //   audioRef.current.play()
      setIsPlaying(true)
    } else {
    //   audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.onAir}>On Air</div>
        <button className={styles.playButton} onClick={handlePlay}>
          {isPlaying ? 'Pause' : '▶️'}
        </button>
        <p className={styles.listen}>{showtitle}</p>
      </div>
      {/* Invisible audio from YouTube stream via relay */}
      {/* <audio ref={audioRef} src="https://streaming.radionomy.com/JazzRadio" preload="auto" /> */}
    </div>
  )
}

export default OnAir
