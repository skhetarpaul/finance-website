import React from 'react'
import Room from './Room'

export default function RoomsList({rooms}) {
    // return(
    //     <div className = "">
    //         hello from rooms list
    //     </div>
    // )
    if(rooms.length === 0) {
        return (
            <div className = "empty-search">
                <h3>Unfortunately, no rooms matched your search</h3>
            </div>
        )
    }
    return <section className = "roomslist">
        <div className = "roomslist-center">
            {
                rooms.map(item => {
                    return <Room key = {item.id} room = {item} /> //service is a prop here
                })
            }
        </div>
    </section>
}