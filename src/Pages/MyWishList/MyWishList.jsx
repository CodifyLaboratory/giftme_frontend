import React from 'react'
import WishlistContent from '../../components/wishlistContent/wishlistContent'
import css from '../MyWishList/MyWishList.module.css'
import {Link} from 'react-router-dom' 



function MyWishList() {
    return (
        <div className={css.wrapper}>
            <div>Мой список желаний</div>
            <button>Добавь подарок</button>
            <WishlistContent />
            <WishlistContent />
            <WishlistContent />
            <WishlistContent />
            <WishlistContent />
            <Link className={css.more_Wish}>Показать еще...</Link>

        </div>

    )
}

export default MyWishList;