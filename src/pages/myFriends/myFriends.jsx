import React from 'react'
import css from './myFriends.css'
import search from './../../img/search.png'
import FriendsInfo from './../../Components/friendsInfo/friendsInfo'

const MyFriend = () => {
    return (
        <div>
            <div className='search'>
                <label>
                <input className='input-search' type="search" ></input>
                <img className='search-img' src={search} alt="search" />
                </label>
            </div>

            <div className='friends-title'>
                <h1>Мои Друзья</h1>
            </div>

            <div className='Friends-info'>
                <FriendsInfo />
                <FriendsInfo />
                <FriendsInfo />
                <FriendsInfo />
                <FriendsInfo />
                <FriendsInfo />
                <FriendsInfo />
                <FriendsInfo />
            </div>

            <div className='more'>Показать еще...</div>

            

        </div>

    )
}

export default MyFriend

