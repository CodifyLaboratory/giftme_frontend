import ColorPicker from './colorPicker'
import css from '../assets/holiday.module.css'
import AddModal from './addButonModal';
import settings from '../../../Images/settings.svg'



function ListOfHoliday() {
  return (
    <div class={css.holiday_scene}>
      <div class={css.upper_scene}>
        <h3 class={css.upper_scene_label}>Ваши праздники</h3>
        <AddModal />
      </div>

      <div class={css.list_scene}>
        <div class={css.holiday_block}>
          <h4 class={css.holiday_date}> 23 фераля </h4>
          <h4 class={css.holiday_name}> День защитника Отечества</h4>
          <div class={css.holiday_block_button}>
            <ColorPicker />
            <button class={css.settings_button}>
              <img src={settings} class={css.settings} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListOfHoliday;