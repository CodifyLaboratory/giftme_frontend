import React from "react";
import Css from '../assets/holiday.module.css'
import css from '../assets/modal.module.css'
import plusButton from '../../../Images/plusButton.svg'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {setHolidaysFetch} from "../../../store/actions/userAction";

const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}

const AddModal = () => {
  const dispatch = useDispatch()
  const [visible, setVisible] = React.useState(false)
  const { register, handleSubmit, reset } = useForm();

  const handleClick = () => {
    setVisible(true)
  };

 const handleClose = () => {
    setVisible(false )
  };



    const submitHandler = (data) => {
      dispatch(setHolidaysFetch(data))
      reset()
      setVisible(false)
    }

    return (
      <>
      <button className={Css.upper_scene_button} onClick={handleClick}>
        <img src={plusButton} className={Css.button_image} alt="+"/>
        <h4 className={Css.button_text}>
          Добавь праздник
        </h4>
      </button>
      {visible ?
          <div className={css.modal_popup} onClick={handleClose}>
          <div className={css.modal_block} onClick={e => e.stopPropagation()}>
        <form action="" onSubmit={handleSubmit(submitHandler)}>
          <div className={css.holiday_modal_form}>
            <div className={css.modal_gift_name}>
              <h4 className={css.gift_label}>Название подарка</h4>
              <input
                  {...register("name",{required: true})}
                  className={css.modal_input}/>
            </div>

            <div className={css.modal_gift_date}>
              <h4 className={css.gift_label}>Дата</h4>
              <select
                  defaultValue=""
                  {...register("day",{required: true})}
                  className={css.modal_date_input}
              >
                <option value="0"  disabled>день</option>
                {days.map(i => (
                    <option key={i} value={i}>{i}</option>
                ))}
              </select>
                <select
                    {...register("month",{required: true})}
                    className={css.modal_date_selector}
                    defaultValue='0'
                >
                  <option value="0" disabled>месяц</option>
                  <option value="Января">Январь</option>
                  <option value="Февраля">Февраль</option>
                  <option value="Марта">Март</option>
                  <option value="Апреля">Апрель</option>
                  <option value="Мая">Май</option>
                  <option value="Июня">Июнь</option>
                  <option value="Июля">Июль</option>
                  <option value="Августа">Август</option>
                  <option value="Сентяря">Сентябрь</option>
                  <option value="Октября">Октябрь</option>
                  <option value="Ньября">Ноябрь</option>
                  <option value="Декабря">Декабрь</option>
                </select>
            </div>

            <div className={css.modal_button_block}>
              <button type="submit" className={css.modal_close_button}>
                <span className={css.save_button_style}>Сохранить</span>
              </button >
              <div className={css.modal_save_button} onClick={handleClose}>
                <h4 className={css.close_button_style}>Закрыть</h4>
              </div>
            </div>

          </div>
        </form>
        </div>
          </div>
          : null }
      </>
    )
}


export default AddModal;