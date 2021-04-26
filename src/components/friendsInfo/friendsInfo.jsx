import React from 'react'
import css from './friendsInfo.module.css'
import image from './../../img/image.png'

const FriendsInfo = ({first_name, last_name, description}) => {

    return (

        <div className={css.friends}>
            <div className={css.spans}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img src={image} alt="image" />
            <p>{`${first_name} ${last_name}`}</p>
            <div className={css.description}>{description}</div>

        </div>

    )
}


export default FriendsInfo 