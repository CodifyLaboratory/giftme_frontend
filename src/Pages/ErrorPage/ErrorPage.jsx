import React from 'react'
import Css from '../ErrorPage/ErrorPage.module.css'



function ErrorPage() {
    return (
        <div className={Css.ErrorPage}>
            <div>UUPS!</div>
            <div>Page not found</div>
            <div>Ошибка 404. Такая страница не существует или она была удалена.</div>
            <button>На главную</button>
        </div>
    )
}

export default ErrorPage;


