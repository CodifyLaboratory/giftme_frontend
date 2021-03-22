import React from 'react'
import wish from './../../img/wish.png'
import css from './wishlistContent.css'


const WishlistContent = () => {
    return(
        <div className='wishlist'>
            <img src={wish} alt="wish"/>
            
           <div className='wish'>
            
            <h3>Книга</h3>
            <p> Hello, it's time to start your today's standup for cm_lab_giftme. Please answer following questions (reply skip to not report today)</p>
            <a>https://giftwhale.com/</a>
            <br/>
            <br/>
            <br/>
            <span>Дата</span>
        
           </div>
           <input className='input-wish'></input>
           </div>
    )
}

export default WishlistContent