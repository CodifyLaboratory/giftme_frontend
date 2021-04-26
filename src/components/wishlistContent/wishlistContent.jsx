import React , {useState} from 'react'
import wish from './../../img/wish.png'
import css from './wishlistContent.module.css'
import {Link} from 'react-router-dom'
import Modal from 'react-awesome-modal'
import star from './../../img/star.png'
import cancel from './../../img/cancel.png'




   

const WishlistContent = (props) => {

    const [visible,setVisible] = useState (false)
    const [visible2,setVisible2] = useState (false)
    const [visible3,setVisible3] = useState (false)

    const openModal = () => {
        setVisible(true)
           
        };
    

   const closeModal = () => {
        setVisible(false)
           
        };
    const openStar = () => {
        setVisible2(true)
        closeModal()
    };
    
    const openModal2 = () => {
        setVisible3(true)
    }

    const closeModal2 = () => {
        setVisible3(false)
    }




    
    return(
        <div className={css.wishlist}>
            <img src={wish} alt="wish"/>
            
           <div className={css.wish}>
            
            <h3>{props.wish.name}</h3>
            <p>{props.wish.description} </p>
            <Link>{props.wish.link}</Link>
            <br/>
            
            <span>Дата</span>
        
           </div>
           <div className={css.input_wish} onClick={() => visible2 ?  openModal2() : openModal()}  >
               
               {visible2 ? <img className = {css.star} src={star} alt="star"/> : null}
            
           </div>
         
                <Modal 
                    visible={visible}
                    width="400"
                    height="179"
                    effect="fadeInUp"
                    onClickAway={() => closeModal()}
                    
                >
                    <div className={css.modal}>
                        <h1 className={css.modal_title}>Подтвердите свой выбор</h1>
                        <div className={css.button}>
                        <button onClick= {() => closeModal()} className={css.undo}>Отменить</button>
                        <button className={css.submit} onClick= {() => openStar()}>Подтвердить</button>
                        </div>
                        
                    </div>
                </Modal>

                <Modal
                visible={visible3}
                width="400"
                height="100"
                effect="fadeInUp"
                onClickAway={() => closeModal()}
                >

                    <h1 className={css.h1} onClick={() => openModal2()}>Кто-то забронировал этот подарок</h1>
                    <img className={css.cancel} src={cancel} onClick= {() => closeModal2()} alt="cancel"/>


                </Modal>
          
           </div>
    )
    }

export default WishlistContent;