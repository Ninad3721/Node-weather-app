const request = require('request')
const forecast=(url, callback) =>
{
 request({url, json:true},(error, {body})=>
 {
    if(error)
    {
        console.log(chalk.red.inverse("Error occured !"))
    }
    else if (body.error)
    {
            callback(body.error.type)

    }
    else{
        callback(undefined,"temp="+body.current.temperature+ " feelslike: " +body.current.feelslike)
    }
 })
}

module.exports= forecast 