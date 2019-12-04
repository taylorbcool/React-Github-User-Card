import React from 'react'
// import Followers from './Followers'


const Card = props => {

    return(
        <>
            <div className="card">
                <img src={props.user.avatar_url} alt='user avatar' />
                <div className="card-info">
                    <h3 className="name">{props.user.name}</h3>
                    <p className="username">{props.user.login}</p>
                    <p>Location: {props.user.location}</p>
                    <p>Profile:  
                    <a href={props.user.url}>{props.user.html_url}</a>
                    </p>
                    <p>Followers: {props.user.followers}</p>
                    <p>Following: {props.user.following}</p>
                    <p>Bio: {props.user.bio}</p>
                </div>
            </div>
        </>
    )
}

export default Card;