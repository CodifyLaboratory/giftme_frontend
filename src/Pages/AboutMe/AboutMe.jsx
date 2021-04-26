import React, { useState } from 'react';
import Style from '../AboutMe/AboutMe.module.css'
import Modal from 'react-awesome-modal';
import Cancel from '../../Images/cancel.png'
import Pencil from '../../Images/pencil.png'
import {useForm} from "react-hook-form";
import css from "../signUp/signUp.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getDataFetch, userDataFetch} from "../../store/actions/userAction";
import {useHistory} from "react-router-dom";



const days = [];
for (let i = 1; i <= 31; i++) {
    days.push(i);
}

function AboutMe() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const userData = useSelector(state=>state.user)
    const history = useHistory();
    const id = useSelector(state=>state.auth.id)
    const date = userData.birth_date.split('-')

    const [visible, setVisible] = useState(false);
    const onOpen = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }




    const submitHandler = (data) => {
        const user = {
            first_name: data.first_name,
            last_name: data.last_name,
            description: data.about,
            birth_date: `${data.year}-${data.month}-${data.day}`,
            facebook_link: data.facebook,
            instagram_link: data.instagram
        }
        dispatch(userDataFetch(user))
        reset()
        history.push("/Personal")
    }


    const [izmenit, setIzmenit] = useState(false);
    const parol = () => {
        setIzmenit(!izmenit)
    }

    const password = () => {
        setIzmenit(false)
    }

    React.useEffect( () => {
        dispatch(getDataFetch())
    }, [id] )


    return (
        <div className={Style.page}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor="name" className={Style.label}>
                    <div>Имя</div>
                    <input
                        defaultValue={userData.first_name}
                        {...register("first_name",{})}
                        type="text"
                    />
                    <img src={Pencil} alt="Pencil" />
                </label>
                <label htmlFor="lastName" className={Style.label}>
                    <div>Фамилия</div>
                    <input
                        defaultValue={userData.last_name}
                        {...register("last_name",{})}
                        type="text"
                    />
                    <img src={Pencil} alt="Pencil" />
                </label>
                <div>Дата рождения</div>
                <div className={Style.date}>
                    <select
                        {...register("day",{})}
                        defaultValue={date[2] !== "0" ? date[2] : "0"}
                        className={Style.sct}
                    >
                        <option value="0" disabled>день</option>
                        {days.map(i => (
                            <option key={i} value={i < 10 ? `0${i}`: i}>{i}</option>
                        ))}
                    </select>
                    <select
                        {...register("month",{})}
                        className={Style.sct}
                        defaultValue={date[1] !== "0" ? date[1] : "0"}
                    >
                        <option value="0" disabled>месяц</option>
                        <option value="01">Январь</option>
                        <option value="02">Февраль</option>
                        <option value="03">Март</option>
                        <option value="04">Апрель</option>
                        <option value="05">Май</option>
                        <option value="06">Июнь</option>
                        <option value="07">Июль</option>
                        <option value="08">Август</option>
                        <option value="09">Сентябрь</option>
                        <option value="10">Октябрь</option>
                        <option value="11">Ноябрь</option>
                        <option value="12">Декабрь</option>
                    </select>
                    <label htmlFor="year" className={Style.year} >
                        <input
                            defaultValue={date[0]}
                            {...register("year",{required: true, pattern: /^-?\d{4}$/})}
                            type="text"
                            placeholder="год" />
                        <img src={Pencil} alt="Pencil" />
                    </label>
                </div>
                {errors.year && <p className={css.input_error}>Неверный формат даты</p>}
                <label htmlFor="description" className={Style.label}>
                    <div className={Style.about}>О себе</div>
                    <textarea
                        defaultValue={userData.description}
                        {...register("about",{required:true, maxLength: 140})}
                        className={Style.aboutMe}
                        id="AboutMe"
                        maxLength="140"
                    />
                    <div className={Style.symbol}>140 символов</div>
                </label>

                <label htmlFor="Facebook" className={Style.label}>
                    <div>Facebook</div>
                    <input
                        defaultValue={userData.facebook_link === 'string' ? "" : userData.facebook_link}
                        {...register("facebook",{})}
                        type="text"

                    />
                    <img src={Pencil} alt="Pencil" />
                </label>

                <label htmlFor="Instagram" className={Style.label}>
                    <div>Instagram</div>
                    <input
                        defaultValue={userData.instagram_link === 'string' ? "" : userData.instagram_link}
                        {...register("instagram",{})}
                        type="text"

                    />
                    <img src={Pencil} alt="Pencil" />
                </label>
                <br />
                <div className={Style.btnSave}>
                    <button onClick={()=>history.push("/Personal")}>Выйти</button>
                    <button type="submit">Сохранить</button>
                </div>





            </form>

            <div className={Style.btnBlock}>
                <span  onClick={parol}>Изменить пароль</span>
                <Modal visible={izmenit} effect="fadeInUp" onClickAway={() => parol()}>
                    <div className={Style.modal}>
                        <label htmlFor="currentPassword">
                            <div>Текущий пароль</div>
                            <input type="password" id="currentPassword" />
                        </label>
                        <label htmlFor="newPassword">
                            <div>Новый пароль</div>
                            <input type="password" id="newPassword" />
                        </label>
                        <div>
                            <button>Изменить</button>
                            <button>Отменить</button>
                        </div>
                        <a href="" onClick={() => password()}>
                            <img src={Cancel} alt="Cancel" />
                        </a>
                    </div>

                </Modal>

                <div>
                    <div>Хотите удалить аккаунт?</div>
                    <button type="button" onClick={onOpen}>Удалить аккаунт</button>
                </div>
                <Modal visible={visible} effect="fadeInUp" onClickAway={() => onOpen()}>
                    <div className={Style.modal2}>
                        <label htmlFor="enterPassword">
                            <p>Введите пароль</p>
                            <input type="password" id="enterPassword" />
                            <div>
                                <button>Удалить</button>
                                <button>Отменить</button>
                            </div>
                        </label>
                        <a href="#" onClick={() => onClose()}>
                            <img src={Cancel} alt="Cancel" />
                        </a>
                    </div>
                </Modal>
            </div>

        </div >

    )
}

export default AboutMe;

