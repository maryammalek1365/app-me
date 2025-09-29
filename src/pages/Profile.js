import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { profileContext } from "../App"
import { ChangeProfile } from "../Component/ChengeProfile"
export const Profile = () => {
    const { username } = useContext(profileContext)
    return <div> profile page - user name is  {username}
        <ChangeProfile />
    </div>
}