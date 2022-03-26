import axios from "axios"

const baseUrl = "https://app.ticketmaster.com/discovery/v2"
const apiKey = `${process.env.API_KEY}`

function getEvents(req,res){
  axios.get(`${baseUrl}/events.json?classificationName=music&countryCode=US${apiKey}`)
  .then(response => {
    res.json(response.data._embedded.events)
  })
}

function getKeywordAndCity(req, res) {
  axios.get(`${baseUrl}/events.json?classificationName=music&countryCode=US&keyword=${req.params.keyword}&city=${req.params.city}${apiKey}`)
  .then(apiResponse => {
    res.json(apiResponse.data)
  })
}


export {
  getEvents,
  // getLinks, 
  getKeywordAndCity
}