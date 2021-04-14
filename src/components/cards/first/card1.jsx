import React from 'react'
import ava from '../../../Images/ava.png'
import done from '../../../Images/done.png'
import points from '../../../Images/points.png'
import css from '../../../Pages/cartPage/cartPage.module.css'
import Modal from 'react-awesome-modal'
import cancel from '../../../Images/cancel.png'



function FirstCard() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={css.card}>
                <img src={ava} className={css.ava} alt="avatar" />
                <div className={css.text}>
                    <div>Курманова Айгерим</div>
                    <div>Книга</div>
                    <div>This is the very beginning of your direct message history
                    withOnly the two of you are in this conversation,
                        and no one else can join it. Learn more......</div>
                </div>
                <img src={done} className={css.done} alt="done" />
                <img src={points} className={css.points} onClick={handleOpen} alt="points" />
                <Modal
                    visible={open}
                    onClickAway={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={css.modal}>
                        <div>Подарено</div>
                        <div>В ожидании</div>
                        <img src={cancel} onClick={handleClose} alt="cancel" />
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default FirstCard;