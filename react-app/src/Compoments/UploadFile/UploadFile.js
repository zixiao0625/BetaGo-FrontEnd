import { useEffect } from "react"

const UpdateProfilePage = ()=>{
    useEffect(()=>{
        const api_call = "https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=7650dce2-32ed-4699-a643-32a4b78fa243";
        fetch(api_call).then((data) => {
            data.json().then((data)=>{
                console.log(data);
            })
        }).catch((err) => {
            console.log(err);
        });
    },[]);
    return(<div></div>)
}

export default UpdateProfilePage;