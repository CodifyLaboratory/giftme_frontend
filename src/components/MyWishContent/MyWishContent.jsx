import React from 'react'
import wish from './../../img/wish.png'
import css from '../MyWishContent/MyWishContent.module.css'
import pencil from '../../Images/pencil.png'



const MyWishContent = () => {
    return (
        <div className={css.wishlist}>
            <img src={wish} alt="wish" />
            <div className={css.wish}>
                <h3>Книга</h3>
                <p> Hello, it's time to start your today's standup for cm_lab_giftme.
                    Please answer following questions (reply skip to not report today)</p>
                <a>https://giftwhale.com/</a>
                <div>Дата</div>
            </div>
            <img className={css.pencil} src={pencil} alt="pencil"/>
        </div>
    )
}

export default MyWishContent;