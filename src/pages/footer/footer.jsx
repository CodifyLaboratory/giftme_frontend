import React from 'react'
import css from './footer.css'
import Instagram from './../../img/instagram.png'
import Facebook from './../../img/fb.png'
import Telegram from './../../img/telegram.png'

const Footer = () => {
    return (
      <div className='footer'>
          <div className='footer-content'>
            <a>О нас</a>
            <a>Лента</a>
            <a>Контакты(номер,почта)</a>
         </div>
        <div className='footer-content2'>
          <p>Условия конфиденциальности</p>
          
          <img src={Instagram} alt="Instagram"/>
          <img src={Facebook} alt="Facebook"/>
          <img src={Telegram} alt="Telegram"/>
          </div>
      </div>



    )
}

export  default Footer