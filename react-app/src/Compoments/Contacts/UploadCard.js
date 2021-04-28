import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import React, {useState} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField';
import { Paper, Box, FormControl, OutlinedInput, InputLabel } from '@material-ui/core'
import axios from 'axios'
import { Auth } from 'aws-amplify';

const UploadCard = () => {

    const [alertMessage, setAlertMessage] = useState('')
    const [name, setName] = useState('')
    const [userBio, setUserBio] = useState('')
    const [clientId, setClientId] = useState('')

    const onNameChange = (event) => {
        
        setName(event.target.value)
    }

    const onUserBioChange = (event) => {
        setUserBio(event.target.value)
    }

    async function handleClick () {
        const sessionInfo = Auth.currentSession();
        const session = await sessionInfo
        const clientId = session.idToken.payload.sub
        setClientId(clientId)
        const url = 'https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=' + clientId + '&userName=' + name + '&avatar=&userBio=' + userBio
        try {
            console.log(url)
            const response = await axios.patch(url, {_method: 'patch'})
            console.log(response, "Ok")
        }
        catch(e) {
            // setAlertMessage(e)
            console.log(e)
        }
    }

    return (
        <div>
            <Box>
                <Typography variant='h6' align='left' style={{ marginLeft: '18px' }}>
                    Edit your information
                </Typography>
                <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', marginLeft: '60px', width: '50%'}}>
                    <TextField
                        id="outlined-userName-input"
                        label="UserName"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                        style={{ marginBottom: '10px'}}
                        onChange={onNameChange}
                    />
                    {/* something for avatar */}
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Something U wanna say~"
                        variant="outlined"
                        onChange={onUserBioChange}
                    />
                </Box>
                  {alertMessage !== '' && <Typography style={{ fontSize: 12, fontWeight: 400, color: 'red', textAlign: 'center' }}> {alertMessage} </Typography>}
                  <Button variant="contained" aligh="left" onClick={handleClick}>
                    SCHEDULE NOW
                  </Button>
            </Box>
        </div>
    )
}

export default UploadCard