import React from 'react'
import Card from './Card'

const Followers = props => {

    return (
        <div className="list">
        {props.users.map(user => (
            <Card user={user} />
        ))}
        </div>
    )
}
        
    


export default Followers