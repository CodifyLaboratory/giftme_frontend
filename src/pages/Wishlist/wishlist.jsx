import React, { useState , useEffect} from 'react'
import css from './wishlist.module.css'
<<<<<<< HEAD
import WishlistContent from './../../components/wishlistContent/wishlistContent'
import WishlistSidebar from './../../components/wishlistSidebar/wishlistSidebar';
=======
import WishlistContent from '../../Components/wishlistContent/wishlistContent'
import WishlistSidebar from '../../Components/wishlistSidebar/wishlistSidebar';
>>>>>>> 0e27be12cd0365c2ef58743fb7f3b82b0a46ae18
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
<<<<<<< HEAD
                    {
                     wish.length ? wish?.map((item)=> <WishlistContent wish={item}/>) : 'some text'
                    }

                </div>

            </div>
            <Link className={css.more_Wish}>Показать еще...</Link>
=======
                    <WishlistContent />
                    <WishlistContent />
                    <WishlistContent />
                    <WishlistContent />
                    <WishlistContent />
                </div>

            </div>
            <Link className={css.more_Wish}>Показать еще...</Link>
            <br></br>
>>>>>>> 0e27be12cd0365c2ef58743fb7f3b82b0a46ae18
        </div>
    )
}

export default Wishlist;