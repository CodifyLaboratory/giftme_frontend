
import ColorPicker from './colorPicker'
import css from '../assets/holiday.module.css'
import settings from '../../../Images/settings.svg'



function ListOfHoliday({name, day, month}) {
  return (


      <div className={css.list_scene}>
        <div className={css.holiday_block}>
          <h4 className={css.holiday_date}>{`${day} ${month}`} </h4>
          <h4 className={css.holiday_name}>{name}</h4>
          <div className={css.holiday_block_button}>
              <ColorPicker/>              
              <button className={css.settings_button}> 
                <img src={settings} className={css.settings} alt="ololo"/>
              </button>
          </div>
        </div>
      </div>
  )
}

export default ListOfHoliday;