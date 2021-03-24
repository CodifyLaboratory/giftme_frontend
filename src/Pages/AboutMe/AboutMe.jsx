import React, { useState } from 'react';
import Style from '../AboutMe/AboutMe.module.css'
import Modal from 'react-awesome-modal';
import Cancel from '../../Images/cancel.png'
import Pencil from '../../Images/pencil.png'


const days = [];
for (let i = 1; i <= 31; i++) {
    days.push(i);
}

function AboutMe() {
    const [visible, setVisible] = useState(false);
    const onOpen = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }


    const [izmenit, setIzmenit] = useState(false);
    const parol = () => {
        setIzmenit(!izmenit)
    }

    const password = () => {
        setIzmenit(false)
    }


    return (
        <div className={Style.page}>
            <form>
                <label htmlFor="name" className={Style.label}>
                    <div>Имя</div>
                    <input type="text" id="name" />
                    <img src={Pencil} alt="Pencil" />
                </label>
                <label htmlFor="lastName" className={Style.label}>
                    <div>Фамилия</div>
                    <input type="text" id="lastName" />
                    <img src={Pencil} alt="Pencil" />
                </label>
                <div>Дата рождения</div>
                <div className={Style.date}>
                    <select className={Style.sct}>
                        <option value="" selected disabled>день</option>
                        {days.map(i => (
                            <option value={i}>{i}</option>
                        ))}
                    </select>
                    <select className={Style.sct}>
                        <option value="" selected disabled>месяц</option>
                        <option value="1">Январь</option>
                        <option value="2">Февраль</option>
                        <option value="3">Март</option>
                        <option value="4">Апрель</option>
                        <option value="5">Май</option>
                        <option value="6">Июнь</option>
                        <option value="7">Июль</option>
                        <option value="8">Август</option>
                        <option value="9">Сентябрь</option>
                        <option value="10">Октябрь</option>
                        <option value="11">Ноябрь</option>
                        <option value="12">Декабрь</option>
                    </select>
                    <label htmlFor="year" className={Style.year} >
                        <input type="text" id="year" placeholder="год" />
                        <img src={Pencil} alt="Pencil" />
                    </label>
                </div>
                <label htmlFor="AboutMe" className={Style.label}>
                    <div className={Style.about}>О себе</div>
                    <textarea className={Style.aboutMe} id="AboutMe" maxLength="140"></textarea>
                    <div className={Style.symbol}>140 символов</div>
                </label>

                <label htmlFor="Facebook" className={Style.label}>
                    <div>Facebook</div>
                    <input type="text" id="Facebook" />
                    <img src={Pencil} alt="Pencil" />
                </label>

                <label htmlFor="Instagram" className={Style.label}>
                    <div>Instagram</div>
                    <input type="text" id="Instagram" />
                    <img src={Pencil} alt="Pencil" />
                </label>
                <br />
                <div className={Style.btnSave}>
                    <button>Выйти</button>
                    <button>Сохранить</button>
                </div>



            </form>
            <div className={Style.btnBlock}>
                <span type="button" onClick={parol}>Изменить пароль</span>
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
                        <a href="" onClick={() => onClose()}>
                            <img src={Cancel} alt="Cancel" />
                        </a>
                    </div>
                </Modal>
            </div>

        </div >

    )
}

export default AboutMe;

