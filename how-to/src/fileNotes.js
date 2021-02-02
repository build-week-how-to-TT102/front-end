/* 
[POST] /api/auth/login
Logs in a user

Accepts:

{
    username,
    password
}
Returns:

{
    token: jwtToken,
    message: "welcome ${username}"
}*/