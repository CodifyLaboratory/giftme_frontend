import Header from "../../Components/Header/header";
import WishlistSidebar from "../../Components/wishlistSidebar/wishlistSidebar";
import Footer from "../footer/footer";
import ListOfHoliday from "./Components/listOfHoliday";
import css from './assets/scene.module.css'

const HolidayList = () => {
  return (
    <div class={css.scene}>
      <WishlistSidebar/>
      <ListOfHoliday/>
    </div>
  )
}


export default HolidayList;