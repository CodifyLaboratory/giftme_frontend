import React from 'react'
import css from './footer.module.css'
import Instagram from './../../img/instagram.png'
import Facebook from './../../img/fb.png'
import Telegram from './../../img/telegram.png'

const Footer = () => {
    return (
      <div className={css.footer}>
          <div className={css.footer_content}>
            <a>О нас</a>
            <a>Лента</a>
            <a>Контакты(номер,почта)</a>
         </div>
        <div className={css.footer_content2}>
          <p>Условия конфиденциальности</p>
          
          <img src={Instagram} alt="Instagram"/>
          <img src={Facebook} alt="Facebook"/>
          <img src={Telegram} alt="Telegram"/>
          </div>
      </div>



    )
}

export  default Footer