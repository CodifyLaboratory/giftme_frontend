import Pathes from "../../../Utils/Pathes"
import requester from "../../../Utils/Requester"
import css from '../signUp.module.css'



export function AddNewUser ({onAdd, nameValue, passwordValue}) {
  const addNewUser = async () => {
    await requester.put(Pathes.signUp(), {
      name: nameValue,
      password: passwordValue,
    })
    onAdd && onAdd()
  }

  return (
    <div class={css.button_block}>
      <button class={css.save_button}
              onClick={addNewUser(nameValue, passwordValue)}
              >
        <span class={css.save_button_label}>Сохранить</span>
      </button>
      <a href="#" class={css.login_link}>Есть аккаунт?</a>
    </div>
  )
}