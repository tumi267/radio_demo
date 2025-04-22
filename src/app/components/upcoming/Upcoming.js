import React from 'react';
import styles from './Upcoming.module.css';
import FlipCard from '../FlipCard/FlipCard';

function Upcoming() {
    const shows = [
        {
            image: 'https://images.unsplash.com/photo-1673427079629-418917214ffc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxyYWRpbyUyMHNob3clMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
            name: 'show1'
        },
        {
            image: 'https://images.unsplash.com/photo-1575863591437-58b22055bdca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxyYWRpbyUyMHNob3clMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
            name: 'show2'    
        },
        {
            image: 'https://images.unsplash.com/photo-1541095154993-ac1a512553fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxyYWRpbyUyMHNob3clMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
            name: 'show3'    
        }
    ];

    return (
        <div className={styles.container}>
        <h2>Upcoming Shows</h2>
        <div className={styles.cardcontainer}>
            {shows.map((show, index) => (
                <div key={index} className={styles.cardWrapper}>
                    <FlipCard data={show} />
                </div>
            ))}
        </div>
        </div>
    );
}

export default Upcoming;