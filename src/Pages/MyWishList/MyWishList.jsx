import React from 'react'
import css from '../MyWishList/MyWishList.module.css'
import MyWishContent from '../../components/MyWishContent/MyWishContent'
import { Link } from 'react-router-dom'
import plus from '../../Images/plus.png'
import Modal from 'react-awesome-modal';
import Pencil from '../../Images/pencil.png'
import plus2 from '../../Images/plus2.png'






function MyWishList() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={css.wrapper}>
            <div className={css.title}>Мой список желаний</div>
            <button onClick={handleOpen} className={css.btn}>
                <img src={plus} alt="plus" />
                <div>Добавь подарок</div>
            </button>
            <Modal
                visible={open}
                onClickAway={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={css.modal}>
                    <div className={css.content}>
                        <label htmlFor="nameOfProduct" className={css.label}>
                            <div>Название подарка</div>
                            <input type="text" id="nameOfProduct" />
                            <img src={Pencil} alt="Pencil" />
                        </label>
                        <label htmlFor="description" className={css.label}>
                            <div>Описание подарка</div>
                            <input type="text" id="description" />
                            <img src={Pencil} alt="Pencil" />
                            <div className={css.symbol}>40 символов</div>
                        </label>
                        <label htmlFor="date" className={css.label}>
                            <div>Дата</div>
                            <input type="text" id="date" />
                            <img src={Pencil} alt="Pencil" />
                        </label>
                        <label htmlFor="link" className={css.labelLink}>
                            <div>Ссылка</div>
                            <input type="text" id="link" />
                            <img src={Pencil} alt="Pencil" />
                        </label>
                        <label htmlFor="foto" className={css.foto}>
                            <div>Фото</div>
                            <input type="file" id="foto" />
                            <div className={css.inputFoto}>
                                <img src={plus2} alt="plus" />
                            </div>
                        </label>
                        <div className={css.btns}>
                            <button>Сохранить</button>
                            <button>Изменить</button>
                        </div>

                    </div>
                </div>
            </Modal>
            <MyWishContent />
            <MyWishContent />
            <MyWishContent />
            <MyWishContent />
            <MyWishContent />
            <Link className={css.more}>Показать еще...</Link>
        </div>

    )
}

export default MyWishList;