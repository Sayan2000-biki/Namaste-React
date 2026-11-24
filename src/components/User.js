import { useEffect, useState } from "react"

const User = () => {

    const [user,setUser] = useState();

    useEffect(() => {
        getDetail();

        return() => {
            console.log("This place is for code clean up in Functional Componenent")
        }

    }, [])

    const getDetail = async () => {

         const data = await fetch("https://api.github.com/users/Sayan2000-biki");
         const jsonData = await data.json();
         console.log(jsonData);

          setUser(jsonData.name)
    }
   



    return(
        <div>
            <h1>Name : {user}</h1>
        </div>
    )
}


export default User;