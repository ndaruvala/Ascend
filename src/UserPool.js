import { CognitoUserPool } from "amazon-cognito-identity-js";
import React from 'react';

const poolData = {
    UserPoolId: "us-east-2_97xmsNMx6",
    ClientId: "6gck3o4q126q5r0vop6ppcgpad"
}

export default new CognitoUserPool(poolData);