import { Button } from "react-bootstrap";
import { Auth } from 'aws-amplify';

const SignOut = (props) =>{
    async function handleClick() {
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