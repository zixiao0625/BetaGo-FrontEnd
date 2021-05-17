import { Button } from "react-bootstrap";
import { Auth } from 'aws-amplify';

const SignOut = (props) =>{
    async function handleClick() {
        let ws = props.websocket
        props.session.then(response => {
            console.log(response.idToken.payload.sub)
            ws.send(JSON.stringify({"action": "updateStatus", "clientId": response.idToken.payload.sub}))
        })
        Auth.signOut()
        window.location = "/room/"
    }

    return(        
        <Button
            id="signOut"
            variant="outline-secondary"
            type="button"
            onClick={() => handleClick()}
        >
            Sign Out
        </Button>
    );

}

export default SignOut;