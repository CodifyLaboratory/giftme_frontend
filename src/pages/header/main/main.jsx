import React from 'react'
import photo from '../../../img/photo.png'
import photo1 from '../../../img/photo1.png'
import photo2 from '../../../img/photo2.png'
import note from '../../../img/note.png'
import rocket from '../../../img/rocket.png'
import gift from '../../../img/gift.png'
import tree from '../../../img/tree.png'
import screen from '../../../img/screen.png'
import css from './main.css'

const MainPage = () => {
    return (
        <div>
            <div className='content'>
            <div className='textContent'>
            <h1>Gift me</h1>
            <p>Gift.me – это сайт, где пользователи могут размещать свои желаемые подарки, даже указать ссылку на этот подарок.
Возможность делиться вещами.</p>
        <button className='content-button'>Создать WishList</button>
            </div>
        <div className='photoContent'>
        <img src={photo} alt="photo"/>
        </div>
        </div>
        <div className='content2'>
            <div>
            <img src={photo1} alt="photo1"/>
            </div>
            <div className='content2-text'>
            <p>Vestibulum augue tortor, condimentum et neque quis, bibendum dignissim neque. Pellentesque at eleifend lacus. Curabitur sodales odio sit amet lectus.</p>
            </div>
        </div>
        <div className='content3'>
            <div className='content3-text'>  
                <p>Vestibulum augue tortor, condimentum et neque quis, bibendum dignissim neque. Pellentesque at eleifend lacus. Curabitur sodales odio sit amet lectus.</p>
            </div> 
            <div className='content3-photo'>
             <img src={photo2} alt="photo2"/>
            </div>
        </div>
        <div className='product'>
        <div className='row'>
                <div className='blog'>
                <img src={note} alt="note"/>
                <h1>Создавай</h1>
                </div>
                <div className='blog'>
                <img src={rocket} alt="rocket"/>
                <h1>Делись</h1>
                </div>
                <div className='blog'>
                <img src={gift} alt="gift"/>
                <h1>Получай</h1>
                </div>   
        </div>
        </div>
        <div className='content4'>
            <div className='content4-text'>
            <p>Хочешь в команду супер героев?! Дари крутые вещи из своего арсенала которыми ты уже не пользуешься  своим друзьям, тем самым уменьшив экологический след стань частью защитников природы :) </p>
            </div>
            <div>
            <img src={tree} alt="tree"/>
            </div>

        </div>
             
            <div className='screen-img'>
                <img src={screen} alt="screen"/>
            </div>

        </div>
    )
}

export default MainPage