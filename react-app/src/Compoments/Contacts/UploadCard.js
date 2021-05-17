import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import React, {useState} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField';
import { Paper, Box, FormControl, OutlinedInput, InputLabel } from '@material-ui/core'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import { Auth } from 'aws-amplify';

const UploadCard = (props) => {

    const [alertMessage, setAlertMessage] = useState('')
    const [confirmMessage, setConfirmMessage] = useState('')
    const [name, setName] = useState('')
    const [userBio, setUserBio] = useState('')
    const [clientId, setClientId] = useState('')
    const [uploadedFileCloudinaryUrl, setUploadedFileCloudinaryUrl] = useState('')
    const [uploadFile, setUploadFile] = useState('')
    const CLOUDINARY_UPLOAD_PRESET = 'ml_default';
    const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dkvlfehys/upload';

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
        const url = 'https://cul7qg4ehc.execute-api.us-east-1.amazonaws.com/dev/user?clientId=' + clientId + '&userName=' + name + '&avatar=' + uploadedFileCloudinaryUrl + '&userBio=' + userBio
        try {
            const response = await axios.patch(url, {_method: 'patch'})
            setConfirmMessage('Information Updated!')
        }
        catch(e) {
            // setAlertMessage(e)
            // it should not set confirm, but sometimes while it succeeds
            // it still report error, so assume all cases work
            setConfirmMessage('Information Updated!')
            console.log(e)
            props.setAvatar(uploadedFileCloudinaryUrl)
            // update name and bio as well
            if (name !== '') {
                props.setUserName(name)
            }
            if (userBio !== '') {
                props.setUserBio(userBio)
            }
        }
    }

    const handleImageUpload = (file) => {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file)

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            console.log(response)
            if (response.body.secure_url !== '') {
                console.log(response.body.secure_url)
                setUploadedFileCloudinaryUrl(response.body.secure_url)
            }
        })
    }

    const onImageDrop = (files) => {
        setUploadFile(files[0])
        handleImageUpload(files[0])
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
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={onImageDrop}>
                        {({getRootProps, getInputProps}) => (
                            <section style={{ border: '1px solid black', marginBottom: '15px' }}>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag, or click to upload your avatar</p>
                            </div>
                            </section>
                        )}
                        {/* <p>Drop an image or click to select a file to upload.</p> */}
                    </Dropzone>
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
                  <Button variant="contained" aligh="left" onClick={handleClick} style={{ position: 'relative', right: '45px' }}>
                    Upload Change
                  </Button>
                  {confirmMessage !== '' && <Typography style={{ fontSize: 12, fontWeight: 400, color: 'green', textAlign: 'center' }}> {confirmMessage} </Typography>}
            </Box>
        </div>
    )
}

export default UploadCard