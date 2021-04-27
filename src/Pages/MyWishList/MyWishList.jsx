import React from 'react'
import css from '../MyWishList/MyWishList.module.css'
import MyWishContent from '../../components/MyWishContent/MyWishContent'
import plus from '../../Images/plus.png'
import Modal from 'react-awesome-modal';
import Pencil from '../../Images/pencil.png'
import plus2 from '../../Images/plus2.png'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {getWishesFetch, setWishesFetch} from "../../store/actions/userAction";






function MyWishList() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const wishes = useSelector(state=>state.user.wishes)
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitHandler = (data) => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('date', data.date)
        formData.append('link', data.link)
        if(data.image[0]) {
            formData.append('image',data.image[0], data.image[0].name)
            dispatch(setWishesFetch(formData))
        } else {
            dispatch(setWishesFetch(formData))
        }
        setOpen(false)
        reset()
    }


    React.useEffect(()=>{
        dispatch(getWishesFetch())
    }, [])


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
                <form action="" onSubmit={handleSubmit(submitHandler)}>
                <div className={css.modal}>
                    <div className={css.content}>
                        <label htmlFor="nameOfProduct" className={css.label}>
                            <div>Название подарка</div>
                            <input
                                type="text"
                                {...register("name",{required:true})}
                            />
                            <img src={Pencil} alt="Pencil" />
                        </label>
                        <label htmlFor="description" className={css.label}>
                            <div>Описание подарка</div>
                            <input
                                type="text"
                                {...register("description",{})}
                            />
                            <img src={Pencil} alt="Pencil" />
                            <div className={css.symbol}>40 символов</div>
                        </label>
                        <label htmlFor="link" className={css.labelLink}>
                            <div>Ссылка</div>
                            <input
                                type="text"
                                {...register("link",{})}
                            />
                            <img src={Pencil} alt="Pencil" />
                        </label>
                        <label htmlFor="foto" className={css.foto}>
                            <div>Фото</div>
                            <input
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                {...register("image",{})}
                            />
                            <div className={css.inputFoto}>
                                <img src={plus2} alt="plus" />
                            </div>
                        </label>
                        <div className={css.btns}>
                            <button type="submit">Сохранить</button>
                            <button>Изменить</button>
                        </div>
                    </div>
                </div>
                </form>
            </Modal>






            {
                wishes && wishes.map(item=>(
                    <MyWishContent
                        key={item.id}
                        name={item.name}
                        date={item.date}
                        link={item.link}
                        description={item.description}
                        img={item.image}
                    />
                ))
            }

            {
                !wishes.length && <div className={css.no_wishes}>Желаний пока нет</div>
            }






            <a href="#" className={css.more}>Показать еще...</a>
        </div>

    )
}

export default MyWishList;