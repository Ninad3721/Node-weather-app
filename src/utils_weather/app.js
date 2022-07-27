const request = require('request')
const chalk = import('chalk')
const forecast= require('./utils/forecast')
const yargs = require('yargs')


///yargs.version('1.1.0')
yargs.command(
    {
        command:'city',
        describe: 'Add the name of the city to fetch its weather',
        builder:
        {
        demandOption: true,
        typ: 'string',
        }
    }
).argv
if(!yargs.argv.city)
{
   return console.log("Enter the city")
}


const url ='http://api.weatherstack.com/current?access_key=7c0f5d6b87d560665b2e9e2c3948e4b6&query='+ yargs.argv.city
// request({url, json:true},(error, response)=>
// {

//     if(error)
//     {
     
//         console.log(chalk.red.inverse("Error occured !"))
//     }
//     else if (response.body.error)
//     {console.log("Please enter a valid city")

//     } else{    
//             const current =response.body.current
        
//             console.log(current.feelslike)
//             console.log(current.temperature)
            
//         }
    

//     }

// )

forecast(url,(error, data)=>
{
    console.log('Error! '+ error)
    console.log("Data:" + data)
})

