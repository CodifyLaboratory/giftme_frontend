import React from 'react'
import css from './myFriends.module.css'
import search from './../../img/search.png'
import FriendsInfo from './../../Components/friendsInfo/friendsInfo'

const MyFriend = () => {
    return (
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

    )
}

export default MyFriend

