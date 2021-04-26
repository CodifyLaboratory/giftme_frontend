import React from 'react'
import css from './login.module.css'
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {loginFetch, removeError} from "../../store/actions/authAction";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-awesome-modal";

function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const signError = useSelector(state => state.auth.error)
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false)

  const submitHandler = (data) => {
    const user = {
      email: data.email,
      password: data.password
    }
    dispatch(loginFetch(user))
    reset()

  }


  const closeHandler = () => {
    setVisible(false)
    dispatch(removeError())
  }

  React.useEffect(()=>{
    if (signError) {
      setVisible(true)
    }
  }, [signError])




  return (
  <div>

    {
      signError &&
      <Modal visible={visible} onClickAway={closeHandler}>
        <p className={css.modal_text}>{signError}</p>
      </Modal>
    }

    <div className={css.Scene}>
      <div className={css.page_container}>

        <form action="" onSubmit={handleSubmit(submitHandler)}>

        <div className={css.login_form}>

        <div className={css.title}>Авторизация</div>
          <div className={css.title_description}>авторизация через 
            <span className={css.inner_title_description}>Gmail</span>
          </div>
          <div className={css.login_body}>
            <div className={css.input_field_email}>
              <div className={css.require_mark_email}>*</div>
              <input
                  {...register("email",{required: true})}
                  type="email"
                  className={css.inner_input_email}
                  placeholder='Email'
              />
            </div>
            <div className={css.input_field_password}>
              <div className={css.require_mark_password}>*</div>
              <input
                  {...register("password",{required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[a-zA-Z0-9])(?!.*\s).*$/})}
                  type="password"
                  className={css.inner_input_password}
                  placeholder="Пароль"
              />
              {errors.password && <p className={css.input_error}>Пароль должен содержать цифры и буквы</p>}
              <div className={css.input_password_description}>Не менее 8 символов.</div>              
            </div>
            <div className={css.forgot_password}>Забыли пароль?</div>
            <div className={css.button_block}>
              <button
                  type="submit"
                  className={css.save_button}
              >
                <span className={css.save_button_label}>Войти</span>
              </button>
              <div className={css.button_block_description}>У вас еще нет аккаунта?</div>
              <NavLink to="/SignUp" className={css.registration_link}>Зарегистрироваться</NavLink>
            </div>
          </div>

        </div>

          </form>
  
      </div>
    </div>
    
  </div>
  );
}

export default Login;