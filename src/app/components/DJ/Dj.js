import React from 'react';
import styles from './DJ.module.css';
import FlipCard from '../FlipCard/FlipCard';

function Upcoming() {
    const shows = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1664267831315-03fbe2ba9f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHlvdXRofGVufDB8fDB8fHww',
            name: 'DJ1',
            bio:'',
            facbook: 'DJ1',
            instagram:'dj1',
            linkdenin:'dj1'
        },
        {
            image: 'https://images.unsplash.com/photo-1492462543947-040389c4a66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHlvdXRofGVufDB8fDB8fHww',
            name: 'DJ2',
            bio:'',
            facbook: 'DJ2',
            instagram:'dj2',
            linkdenin:'dj2'    
        },
        {
            image: 'https://images.unsplash.com/photo-1514471269849-fda3a4441307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHlvdXRofGVufDB8fDB8fHww',
            name: 'DJ3',
            bio:'',
            facbook: 'DJ3',
            instagram:'dj3',
            linkdenin:'dj3'  
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664868839960-bb0ca1944bef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHx5b3V0aHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'DJ4',
            bio:'',
            facbook: 'DJ4',
            instagram:'dj4',
            linkdenin:'dj4'  
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664267831315-03fbe2ba9f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHlvdXRofGVufDB8fDB8fHww',
            name: 'DJ1',
            bio:'',
            facbook: 'DJ1',
            instagram:'dj1',
            linkdenin:'dj1'
        },
        {
            image: 'https://images.unsplash.com/photo-1492462543947-040389c4a66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHlvdXRofGVufDB8fDB8fHww',
            name: 'DJ2',
            bio:'',
            facbook: 'DJ2',
            instagram:'dj2',
            linkdenin:'dj2'    
        },
        {
            image: 'https://images.unsplash.com/photo-1514471269849-fda3a4441307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHlvdXRofGVufDB8fDB8fHww',
            name: 'DJ3',
            bio:'',
            facbook: 'DJ3',
            instagram:'dj3',
            linkdenin:'dj3'  
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1664868839960-bb0ca1944bef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHx5b3V0aHxlbnwwfHwwfHx8MA%3D%3D',
            name: 'DJ4',
            bio:'',
            facbook: 'DJ4',
            instagram:'dj4',
            linkdenin:'dj4'  
        }
    ];

    return (
        <div className={styles.container}>
        <h2>your DJs</h2>
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