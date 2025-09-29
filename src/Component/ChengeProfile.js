
import { useContext, useState } from "react"
import { profileContext } from "../App"

export const ChangeProfile = () => {
  const { setUsername } = useContext(profileContext)
  const [newUsername, setnewUserName] = useState("")
  return (
    <div>
      <input onChange={(event) => { setnewUserName(event.target.value) }} />
      <button onClick={() => { setUsername(newUsername) }}> chenge user name</button>
    </div>
  )
}