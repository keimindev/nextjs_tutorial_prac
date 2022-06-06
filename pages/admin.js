import Axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useRouter } from "next/router"
import { Button, Form } from "semantic-ui-react";


export default function Admin() {
    const router = useRouter();
    const [isLogin, setLogin] = useState(false)

    const logout = () => {
        Axios.get('/api/logout').then((res) => {
            if (res.status === 200) {
                router.push('/')
            }
        })
    }
    useEffect(() => { 
        Axios.get(`/api/isLogin`).then((res) => {
            if (res.status === 200 && res.data.name) {
                //login
                setLogin(true)
            } else {
                //not login
                router.push("/login")
            }
        })
    }, [])
    
  return (
      <div>
          admin
          {isLogin && <Button onClick={logout}>Logout</Button>}
    </div>
  )
}
