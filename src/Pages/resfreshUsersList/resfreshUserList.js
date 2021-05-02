// import { useEffect, useState } from "react"
// import Pathes from "../../Utils/Pathes"
// import requester from "../../Utils/Requester"


// export function userList(props) {
//   const [userList, setUserList] = useState([])

//   export const resfreshUserList = async () => {
//     const {userList} = await requester.get(Pathes.getUsers())
//     setUserList(userList)
//   }

//   useEffect(() => {
//     resfreshUserList()
//   }, [token])
// }