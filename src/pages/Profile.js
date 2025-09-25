import { useParams } from "react-router-dom"
export const Profile=()=>{
    const {name,id}=useParams()
    return <div> this is profile page {name } _{id}</div>
}