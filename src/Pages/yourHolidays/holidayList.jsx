import WishlistSidebar from '../../components/wishlistSidebar/wishlistSidebar'
import ListOfHoliday from "./Components/listOfHoliday";
import css from './assets/scene.module.css'

const HolidayList = () => {
  return (
    <div class={css.scene}>
      <WishlistSidebar />
      <ListOfHoliday />
    </div>
  )
}


export default HolidayList;