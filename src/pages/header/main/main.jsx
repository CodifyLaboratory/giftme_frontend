import React from 'react'
import photo from '../../../img/photo.png'
import photo1 from '../../../img/photo1.png'
import photo2 from '../../../img/photo2.png'
import note from '../../../img/note.png'
import rocket from '../../../img/rocket.png'
import gift from '../../../img/gift.png'
import tree from '../../../img/tree.png'
import screen from '../../../img/screen.png'
import Css from './main.module.css'
import MainHeader from './../MainHeader'
import {Link} from 'react-router-dom'

const MainPage = () => {
    return (
        <div>
            <MainHeader />
            <div className={Css.content}>
                <div className={Css.textContent}>
                    <h1>Gift me</h1>
                    <p>Gift.me – это сайт, где пользователи могут размещать свои желаемые подарки, даже указать ссылку на этот подарок.
Возможность делиться вещами.</p>
                   <Link to = '/wishlist'><button className={Css.content_button}>Создать WishList</button></Link>
                </div>
                <div className={Css.photoContent}>
                    <img src={photo} alt="photo" />
                </div>
            </div>
            <div className={Css.content2}>
                <div>
                    <img src={photo1} alt="photo1" />
                </div>
                <div className={Css.content2_text}>
                    <p>Vestibulum augue tortor, condimentum et neque quis, bibendum dignissim neque. Pellentesque at eleifend lacus. Curabitur sodales odio sit amet lectus.</p>
                </div>
            </div>
            <div className={Css.content3}>
                <div className={Css.content3_text}>
                    <p>Vestibulum augue tortor, condimentum et neque quis, bibendum dignissim neque. Pellentesque at eleifend lacus. Curabitur sodales odio sit amet lectus.</p>
                </div>
                <div className={Css.content3_photo}>
                    <img src={photo2} alt="photo2" />
                </div>
            </div>
            <div className={Css.product}>
                <div className={Css.row}>
                    <div className={Css.blog}>
                        <img src={note} alt="note" />
                        <h1>Создавай</h1>
                    </div>
                    <div className={Css.blog}>
                        <img src={rocket} alt="rocket" />
                        <h1>Делись</h1>
                    </div>
                    <div className={Css.blog}>
                        <img src={gift} alt="gift" />
                        <h1>Получай</h1>
                    </div>
                </div>
            </div>
            <div className={Css.content4}>
                <div className={Css.content4_text}>
                    <p>Хочешь в команду супер героев?! Дари крутые вещи из своего арсенала которыми ты уже не пользуешься  своим друзьям, тем самым уменьшив экологический след стань частью защитников природы :) </p>
                </div>
                <div>
                    <img src={tree} alt="tree" />
                </div>

            </div>

            <div className={Css.screen_img}>
                <img src={screen} alt="screen" />
            </div>

        </div>
    )
}

export default MainPage;