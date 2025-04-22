import React from 'react'
import Lineup from '../components/shows/LineUp'
import Upcoming from '../components/upcoming/Upcoming'
import OnAir from '../components/OnAir/OnAir'

function page() {
  return (
    <div>
    <OnAir/>
    <Upcoming/>
    <Lineup/>
    </div>
  )
}

export default page