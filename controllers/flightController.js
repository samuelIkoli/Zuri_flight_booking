const {flights} = require('../models/Flight')

exports.showFlight = (req, res) => {
    try{
        res.status(200).json(flights)
    }
    catch(e){
        res.status(200).json(e)
    }
}

exports.addFlight = (req, res) => {
    try{
        const {id, title, time, price, date} = await req.body
        const newFlight = {
            id,
            title,
            time,
            price,
            date
        }
        flights.push(newFlight)
        res.status(200).json(flights)
    }
    catch(e){
        res.status(200).json(e)
    }
}

exports.findFlight = (req, res) => {
    try{
        let id = req.params.id
        const flight = flights.find((id)=> flight.id === id)
        res.status(200).json(flight)
    }
    catch(e){
        res.status(200).json(e)
    }
}

exports.updateFlight = (req, res) => {
    try{
        let id = req.params.id
        const flight = flights.find((id)=> flight.id === id)
        const {id, title, time, price, date} = await req.body
        flight.id = id
        flight.title = title
        flight.time = time
        flight.price = price
        flight.date = date
        res.status(200).json(flight)
   }
   catch(e){
       res.status(200).json(e)
   }
}

exports.deleteFlight = (req, res) => {
    try{
        let id = req.params.id
        const flight = flights.find((id)=> flight.id === id)
        flights.splice(flights.indexOf(flight), 1)
        res.status(200).json(flights)
    }
    catch(e){
        res.status(200).json(e)
    }
}

