module.exports =
{
    puerto : process.env.PORT || 3001,
    db : process.env.MONGODB || 'mongodb://vladernn:secretpassword@ds241055.mlab.com:41055/heroku_qlnqsh11',
    // db : process.env.MONGODB || 'mongodb://localhost:27017/adiBD',
    SECRET_TOKEN: 'secretToken'
}