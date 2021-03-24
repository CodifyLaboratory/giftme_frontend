import React from 'react'
import CssF from '../Footer/Footer'
import Instagram from '../../Images/instagram.png'
import Facebook from '../../Images/facebook.png'
import Telegram from '../../Images/telegram.png'

function Footer() {
    return (
        <footer>
            <div>
                <div>О нас</div>
                <div>Лента</div>
                <div>Контакты(номер,почта)</div>
            </div>
            <div>
                <div>Условия конфиденциальности</div>
                <div className={CssF.smm}>
                    <img src={Instagram} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Telegram} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;