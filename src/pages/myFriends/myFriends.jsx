import React, {useState,useEffect} from 'react'
import css from './myFriends.module.css'
import search from './../../img/search.png'
import FriendsInfo from '../../Components/friendsInfo/friendsInfo'
import Sidebar from '../../Components/sidebar/sidebar'

const MyFriend = () => {
    const [friends, setFriends] = useState([])
    
    useEffect (() => {
        fetch ('http://167.99.46.0/users/')
        .then((res)=> res.json())
        .then((data) => {
            setFriends(data) 
        })

    }, [])
    return (
        <div className={css.wrapper}>
<<<<<<< HEAD
            <SideBar />
        
            <div className={css.search}>
            <div className={css.body}>
                <label>
                    <input className={css.input_search} type="search" ></input>
                    <img className={css.search_img} src={search} alt="search" />
                </label>
            </div>
            <br />
            <div className={css.friends_title}>
                <h1>Мои Друзья</h1>
            </div>

            <div className={css.Friends_info}>
            <FriendsInfo />
                {
                     friends.length ? friends?.map((item)=> <FriendsInfo user={item}/>) : 'X'
                }

            </div>

            {/* <div className={css.more}>Показать еще...</div> */}



        </div>
=======
            <Sidebar />
            <div>
                <div className={css.search}>
                    <label>
                        <input className={css.input_search} type="search" ></input>
                        <img className={css.search_img} src={search} alt="search" />
                    </label>
                </div>
                <div className={css.friends_title}>
                    <h1>Мои Друзья</h1>
                </div>
                <div className={css.Friends_info}>
                    <FriendsInfo />
                    <FriendsInfo />
                    <FriendsInfo />
                    <FriendsInfo />
                    <FriendsInfo />
                    <FriendsInfo />
                    <FriendsInfo />
                    <FriendsInfo />
                </div>
                <div className={css.more}>Показать еще...</div>
            </div>
>>>>>>> 0e27be12cd0365c2ef58743fb7f3b82b0a46ae18
        </div>


    )
}

export default MyFriend

