// components/Lineup.tsx
'use client';

import React, { useState } from 'react';
import FlipCard from '../FlipCard/FlipCard';
import styles from './LineUp.module.css'; // We'll create this CSS module

const Lineup = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');

  // Sample shows data
  const shows = [
    {
      image: 'https://images.unsplash.com/photo-1683189400209-a076d6c375b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm18ZW58MHx8MHx8fDA%3D',
      name: 'Morning Jazz',
      day: 'Monday',
      time: '9:00 AM - 11:00 AM',
      description: 'Smooth jazz to start your week right'
    },
    {
      image: 'https://images.unsplash.com/photo-1614520518990-f29fe1932eb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZtfGVufDB8fDB8fHww',
      name: 'Rock Hour',    
      day: 'Monday',
      time: '5:00 PM - 6:00 PM',
      description: 'The best classic rock hits'
    },
    {
        image: 'https://images.unsplash.com/photo-1673427079629-418917214ffc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxyYWRpbyUyMHNob3clMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Morning Jazz',
        day: 'Monday',
        time: '9:00 AM - 11:00 AM',
        description: 'Smooth jazz to start your week right'
      },
      {
        image: 'https://images.unsplash.com/photo-1575863591437-58b22055bdca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxyYWRpbyUyMHNob3clMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Rock Hour',    
        day: 'Monday',
        time: '5:00 PM - 6:00 PM',
        description: 'The best classic rock hits'
      },    {
        image: 'https://images.unsplash.com/photo-1550755375-73584cff528c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZtfGVufDB8fDB8fHww',
        name: 'Morning Jazz',
        day: 'Tuesday',
        time: '9:00 AM - 11:00 AM',
        description: 'Smooth jazz to start your week right'
      },
      {
        image: 'https://images.unsplash.com/photo-1550751464-57982110c246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGZtfGVufDB8fDB8fHww',
        name: 'Rock Hour',    
        day: 'Tuesday',
        time: '5:00 PM - 6:00 PM',
        description: 'The best classic rock hits'
      },    {
        image: 'https://images.unsplash.com/photo-1542793836-8227da569070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxmbXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Morning Jazz',
        day: 'Tuesday',
        time: '9:00 AM - 11:00 AM',
        description: 'Smooth jazz to start your week right'
      },
      {
        image: 'https://images.unsplash.com/photo-1653171128213-fc44c44a987b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxmbXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Rock Hour',    
        day: 'Tuesday',
        time: '5:00 PM - 6:00 PM',
        description: 'The best classic rock hits'
      }
  ];

  // Days of the week
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Filter shows for the selected day
  const dayShows = shows.filter(show => show.day === selectedDay);

  return (
    <div className={styles.lineupContainer}>
      {/* Days navigation */}
      <div className={styles.daysNavigation}>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`${styles.dayButton} ${
              selectedDay === day ? styles.activeDay : ''
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Shows for the selected day */}
      <div className={styles.showsSection}>
        <h2 className={styles.dayTitle}>{selectedDay}</h2>
        
        {dayShows.length > 0 ? (
          <div className={styles.showsGrid}>
            {dayShows.map((show, index) => (
              <FlipCard 
                key={`${selectedDay}-${index}`}
                data={show}
              />
            ))}
          </div>
        ) : (
          <p className={styles.noShows}>No shows scheduled for {selectedDay}</p>
        )}
      </div>
    </div>
  );
};

export default Lineup;