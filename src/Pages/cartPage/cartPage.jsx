import React from 'react'
import SecondCard from '../../components/cards/second/card2'
import FirstCard from '../../components/cards/first/card1'
import css from '../cartPage/cartPage.module.css'


function Cart() {
    return (
        <div>
            <h5 className={css.title}>
                Корзина
            </h5>
            <FirstCard />
            <SecondCard />
            <FirstCard />
            <SecondCard />
            <FirstCard />
        </div>
    )
}

export default Cart;