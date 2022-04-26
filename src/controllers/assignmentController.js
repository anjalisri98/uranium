let axios = require("axios")

let getSession = async function (req, res) {

    try {
        let district_id = req.query.district_id
        let date = req.query.date
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getWeather = async function (req, res) {
    //9b9312065f40d267b67b0da4603bf7f0
    try {

        let q = req.query.q
        let appid = req.query.appid


        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }



        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({ temp: data, status: true })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getcity = async function (req, res) {
    //9b9312065f40d267b67b0da4603bf7f0
    try {

        let appid = req.query.appid
        let arr = []
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for (let i = 0; i < cities.length; i++) {
            let data = cities[i]

            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${appid}`
            }
            result = await axios(options)
            let b = { city: `${data}`, temp: `${result.data.main.temp}` }
            arr.push(b)
        }
        let t = arr.sort(function (a, b) {
            return a.temp - b.temp;
        })


        res.status(200).send({ msg: t, status: true })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getmemes= async function(req, res){
    try{
    let template_id= req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let username = req.query.username
    let password= req.query.password
    let options = {
        method :'post',
        url :`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
       
    }

    let result = await axios(options);
    let data = result.data
    res.status(200).send({ msg: data})
}catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}


module.exports.getSession = getSession
module.exports.getWeather = getWeather
module.exports.getcity = getcity
module.exports.getmemes=getmemes