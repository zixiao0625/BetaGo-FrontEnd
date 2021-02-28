import { Button } from "react-bootstrap";
import { Auth } from 'aws-amplify';

const SignOut = (props) =>{
    async function handleClick() {
        let ws = props.websocket
        props.session.then(response => {
            console.log(response.accessToken.payload.client_id)
            ws.send(JSON.stringify({"action": "updateStatus", "clientId": response.accessToken.payload.client_id}))
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