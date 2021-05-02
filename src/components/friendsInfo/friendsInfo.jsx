import React, { useState } from 'react'
import css from './friendsInfo.module.css'
import photo from './../../img/image.png'
import Modal from 'react-awesome-modal'
import { Link } from 'react-router-dom'


const FriendsInfo = () => {

    const [visible, setVisible] = useState(false)

    const openMod = () => {
        setVisible(true)

    };

    const closeMod = () => {
        setVisible(false)

    };

    return (


        <div className={css.friends}>
            <div className={css.spans}>
                <span onClick={() => openMod()}></span>
                <span onClick={() => openMod()}></span>
                <span onClick={() => openMod()}></span>
            </div>

            <img src={photo} alt="" />

            <p>Курманалиева Айгерим</p>
            <input type="text" placeholder="Описание о себе" />

            <Modal 
                style={{color: 'red'}}
                visible={visible}
                width="276"
                height="50"
                effect="fadeInUp"
                onClickAway={() => closeMod()}
            >
                <div className={css.modal}>
                    <Link>Удалить друга</Link>
                    <Link className={css.submit}>Добавить друга</Link>
                </div>



            </Modal>

        </div>


    )
}

    


export default FriendsInfo
