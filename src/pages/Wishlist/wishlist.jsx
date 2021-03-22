import React from 'react'
import css from './wishlist.css'
import WishlistContent from './../../components/wishlistContent/wishlistContent'


const Wishlist = () => {
    return (
        <div className='Wishlist-content'>
            <div>
            <h2 className='wishlist-title'>Список желаний</h2>
            <WishlistContent/>
            <WishlistContent/>
            <WishlistContent/>
            <WishlistContent/>
            <WishlistContent/>
            </div>

            <a className='moreWish'>Показать еще...</a>
            
        </div>
    )
}

export default Wishlist