import React, {useState, useEffect, useRef} from 'react';
// amplify configuration
// Login component
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

const Login = () => (
    <div>
        <p>Welcome to Login</p>
        {/* <AmplifySignOut /> */}
        My App
    </div>
);
export default withAuthenticator(Login);