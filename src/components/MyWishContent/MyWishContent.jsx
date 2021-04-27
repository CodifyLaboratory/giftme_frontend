import React from 'react'
import wish from './../../img/wish.png'
import css from '../MyWishContent/MyWishContent.module.css'
import pencil from '../../Images/pencil.png'



const MyWishContent = ({img, name, description, date, link}) => {
    return (
        <div className={css.wishlist}>
            <img src={img || wish} width="60" height="70" alt="wish" />
            <div className={css.wish}>
                <h3>{name}</h3>
                <p>{description}</p>
                <a>{link}</a>
                <div>{date}</div>
            </div>
            <img className={css.pencil} src={pencil} alt="pencil"/>
        </div>
    )
}

export default MyWishContent;