import React, { useState } from 'react'
import css from './friendsInfo.module.css'
import photo from './../../img/image.png'
import Modal from 'react-awesome-modal'
import { Link } from 'react-router-dom'


<<<<<<< HEAD
const FriendsInfo = (props) => {

    const [visible, setVisible] = useState(false)

    const openMod = () => {
        setVisible(true)

    };

    const closeMod = () => {
        setVisible(false)

    };

    const addFriend = () => {
        fetch (`http://167.99.46.0//auth/users/${props.user.id}/`)
                .then((res)=> res.json())
        .then((data) => {
           alert ('доработаю')
        })
    }

    

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
                    <div>Удалить друга</div>
                    <div  onClick = {addFriend} className={css.submit}>Добавить друга</div>
                </div>



            </Modal>

        </div>


    )
}


export default FriendsInfo
=======
    return (

        <div className={css.friends}>
            <div className={css.spans}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img src={image} alt="image" />
            <p>Курманалиева Айгерим</p>
            <input type="text" placeholder="Описание о себе" />

        </div>

    )
}


export default FriendsInfo 
>>>>>>> 0e27be12cd0365c2ef58743fb7f3b82b0a46ae18
