import React from 'react'
import css from './signUp.module.css'
import Modal from 'react-awesome-modal';
import {useDispatch, useSelector} from "react-redux";
import {removeError, signUpFetch} from "../../store/actions/authAction";
import { useForm } from "react-hook-form";
import {NavLink, useHistory} from "react-router-dom";


function SignUp() {
  const history = useHistory();

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const signError = useSelector(state => state.auth.error)
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false)


  const submitHandler = (data) => {
    const user = {
      email: data.email,
      password: data.password
    }
    dispatch(signUpFetch(user))
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
    if(token) {
      history.push("/AboutMe")
    }
  }, [token])


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
        <div className={css.registration_form}>
          <div className={css.title}>Регистрация</div>
          <div className={css.title_description}>регистрация через 
            <span className={css.inner_title_description}>Gmail</span>
          </div>
          <div className={css.registration_body}>
            <div className={css.input_field_email}>
              <div className={css.require_mark_email}>*</div>
              <input
                  {...register("email",{required: true})}
                  type="email"
                  className={css.inner_input_email}
                  placeholder="Email"
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
            <div className={css.input_field_re_password}>
              <div className={css.require_mark_re_password}>*</div>
              <input
                {...register("confirmPassword",{required: true, validate: (value) => value === watch('password')})}
                  type="password"
                  className={css.inner_input_re_password}
                  placeholder="Подтвердить пароль"
              />
              {errors.confirmPassword && <p className={css.input_error2}>Пароли не совпадают</p>}
            </div>
            <input type="checkbox" id='confirmBox' className={css.check_field}
                   required/>
            <label className={css.check_field_label}>я принимаю условия пользовательского соглашения</label>

            <div className={css.button_block}>
              <button
                  type="submit"
                  className={css.save_button}
              >
                <span className={css.save_button_label}>Сохранить</span>
              </button>

              <NavLink to="/login" className={css.login_link}>Есть аккаунт?</NavLink>
            </div>

          </div>
        </div>
        </form>

      </div>
    </div>
  </div>
  );
}


export default SignUp;