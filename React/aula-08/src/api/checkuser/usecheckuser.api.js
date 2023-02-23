import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobalUser } from "../../context/user.context"
import { getUser } from "../user/login.api"

export function useCheckUser() {
  const [userDetails, setUserDetails] = useState("")
  const [, setUser] = useGlobalUser()
  const navigate = useNavigate()

  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await getUser()
        setUserDetails(response.data)
      } catch (error) {
        if (error.response.status == 401) {
          setUser(null);
          localStorage.removeItem("user")
          navigate("/");
        }
      }
    }
    getUserDetails()
  })
  return { userDetails }
}
