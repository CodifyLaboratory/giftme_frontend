import React from 'react'
import css from './wishlist.module.css'
import WishlistContent from '../../components/wishlistContent/wishlistContent'
import WishlistSidebar from '../../components/wishlistSidebar/wishlistSidebar';
import {Link} from 'react-router-dom' 


const Wishlist = () => {
    return (
        <div>
        <div className={css.wishlist_content}>
            <WishlistSidebar />
            <div>
                <h2 className={css.wishlist_title}>Список желаний</h2>
                <WishlistContent />
                <WishlistContent />
                <WishlistContent />
                <WishlistContent />
                <WishlistContent />
            </div>

        </div>
        <Link className={css.more_Wish}>Показать еще...</Link>
        </div>
    )
}

export default Wishlist;