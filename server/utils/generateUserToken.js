import jwt from 'jsonwebtoken'

export default function generateUserToken(userId, res){
    const token = jwt.sign(
        {
            userId
        },
        process.env.USER_SECRET_JWT_TOKEN,
        {
            expiresIn: '2d'
        })
        res.cookie('userToken', token, {
            maxAge: 2 * 24 * 60 * 60 * 1000,
            httpOnly: true, // prevents XSS cross-site scripting attacks
            sameSite: true, // prevents CSRF cross-site request forgery attacks
            secure: process.env.NODE_ENV !== 'Development'
        })
}