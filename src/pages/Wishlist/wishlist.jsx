import React from 'react'
import css from './wishlist.module.css'
import WishlistContent from './../../Components/wishlistContent/wishlistContent'


const Wishlist = () => {
    return (
        <div className={css.Wishlist_content}>
            <div>
                <h2 className={css.wishlist_title}>Список желаний</h2>
                <WishlistContent />
                <WishlistContent />
                <WishlistContent />
                <WishlistContent />
                <WishlistContent />
            </div>

            <a className={css.moreWish}>Показать еще...</a>

        </div>
    )
}

export default Wishlist;