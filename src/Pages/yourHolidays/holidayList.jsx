import React from 'react'
import WishlistSidebar from "../../components/wishlistSidebar/wishlistSidebar";
import ListOfHoliday from "./Components/listOfHoliday";
import css from './assets/scene.module.css'
import AddModal from "./Components/addButonModal";
import {useDispatch, useSelector} from "react-redux";
import {getHolidaysFetch} from "../../store/actions/userAction";


const HolidayList = () => {

    const dispatch = useDispatch()
    const holidays = useSelector(state => state.user.holidays)

    React.useEffect(()=>{
        dispatch(getHolidaysFetch())
    }, [])


  return (
    <div className={css.scene}>
      <WishlistSidebar/>

        <div className={css.holiday_scene}>
            <div className={css.upper_scene}>
                <h3 className={css.upper_scene_label}>Ваши праздники</h3>
                <AddModal/>
            </div>

            {
                holidays && holidays.map(item=>(
                    <ListOfHoliday key={item.id} name={item.name} day={item.day} month={item.month}/>
                ))
            }

            {
                !holidays.length && <div className={css.no_holidays}>Праздников пока нет</div>
            }



        </div>


    </div>
  )
}


export default HolidayList;