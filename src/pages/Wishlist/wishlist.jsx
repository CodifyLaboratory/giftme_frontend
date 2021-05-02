import React, { useState , useEffect} from 'react'
import css from './wishlist.module.css'
import WishlistContent from '../../Components/wishlistContent/wishlistContent'
import WishlistSidebar from '../../Components/wishlistSidebar/wishlistSidebar';
import { Link } from 'react-router-dom'


const Wishlist = () => {
    const [wish, setWish] = useState([])
    console.log(wish)
    useEffect (() => {
        fetch ('http://167.99.46.0/wishes/')
        .then((res)=> res.json())
        .then((data) => {
            setWish(data) 
        })

    }, [])
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
            <br></br>
        </div>
    )
}

export default Wishlist;