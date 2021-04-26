import React from "react";
import Css from '../assets/holiday.module.css'
import css from '../assets/modal.module.css'
import plusButton from '../../../Images/plusButton.svg'

class AddModal extends React.Component {
  state = {
    display: false
  }

  handleClick = () => {
    this.setState({ display: !this.state.display })
  };

  handleClose = () => {
    this.setState({ display: false })
  };

  render() {
    return (
      <>
        <button class={Css.upper_scene_button} onClick={() => this.handleClick()}>
          <img src={plusButton} class={Css.button_image} />
          <h4 class={Css.button_text}>
            Добавь праздник
        </h4>
        </button>
        {this.state.display ? <div class={css.modal_block}>
          <div class={css.holiday_modal_form}>

            <div class={css.modal_gift_name}>
              <h4 class={css.gift_label}>Название праздника</h4>
              <input class={css.modal_input} />
            </div>

            <div class={css.modal_gift_date}>
              <h4 class={css.gift_label}>Дата</h4>
              <input class={css.modal_date_input} placeholder='День' />
              <select placeholder='Месяц' class={css.modal_date_selector}>
                <option value='january'>Январь</option>
                <option value='february'>Февраль</option>
                <option value='match'>Март</option>
                <option value='april'>Апрель</option>
                <option value='may'>Май</option>
                <option value='june'>Июнь</option>
                <option value='jule'>Июль</option>
                <option value='august'>Август</option>
                <option value='september'>Сентябрь</option>
                <option value='october'>Октябрь</option>
                <option value='november'>Ноябрь</option>
                <option value='december'>Декабрь</option>
              </select>
            </div>

            <div class={css.modal_button_block}>
              <div class={css.modal_close_button}>
                <span class={css.save_button_style}>Сохранить</span>
              </div>
              <div class={css.modal_save_button} onClick={this.handleClose}>
                <h4 class={css.close_button_style}>Закрыть</h4>
              </div>
            </div>

          </div>
        </div> : null}
      </>
    )
  }
}


export default AddModal;