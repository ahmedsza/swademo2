export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_e2eOrder",
        editProfile: "b2c_1_edit_profile_v2"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://Awesomeahms.b2clogin.com/Awesomeahms.onmicrosoft.com/B2C_1_e2eOrder",
        },
        editProfile: {
            authority: "https://your-tenant-name.b2clogin.com/your-tenant-name.onmicrosoft.com/b2c_1_edit_profile_v2"
        }
    },
    authorityDomain: "Awesomeahms.b2clogin.com"
};


export const msalConfig = {
    auth: {
        clientId: '5dbb55b3-c1e5-41f4-a5cf-86fdc3fb004c',
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
       // redirectUri: '/', 
    },
   // More configuration here
}

export const protectedResources = {
 todoListApi: {
   endpoint: "https://ahmse2edemosite.azurewebsites.net/api/Order",
   scopes: ["https://Awesomeahms.onmicrosoft.com/orderapi/Order.Read"],
 },
}