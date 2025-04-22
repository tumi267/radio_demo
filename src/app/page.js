import Image from 'next/image'
import styles from './page.module.css'
import OnAir from './components/OnAir/OnAir'
import Upcoming from './components/upcoming/Upcoming'
import DJ from './components/DJ/Dj'
import Lineup from './components/shows/LineUp'
export default function Home() {
  return (
    <main className={styles.main}>
      <OnAir/>
      <Upcoming/>
      <DJ/>
      <Lineup/>
    </main>
  )
}
