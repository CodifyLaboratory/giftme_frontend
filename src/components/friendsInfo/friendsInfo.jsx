import React from 'react'
import css from './friendsInfo.css'
import image from './../../img/image.png'

const FriendsInfo = () => {

return(

 <div className='friends'>
 <div className='spans'>
  <span></span>
  <span></span>
  <span></span>
 </div>
  <img src={image} alt="image"/>
  <p>Курманалиева Айгерим</p>
  <input type="text" placeholder="Описание о себе"/>
  
 </div>

)}


export  default FriendsInfo 