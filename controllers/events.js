import axios from "axios"

const baseUrl = "https://app.ticketmaster.com/discovery/v2"
const apiKey = `${process.env.API_KEY}`

function getSearch(req, res) {
  if (req.params.keyword === undefined) {
    axios.get(`${baseUrl}/events.json?classificationName=music&countryCode=US&city=${req.params.city}&page=${req.params.page}&size=20${apiKey}`)
    .then(apiResponse => {
      res.json(apiResponse.data)
    })
  } else if (req.params.city === undefined) {
    axios.get(`${baseUrl}/events.json?classificationName=music&countryCode=US&keyword=${req.params.keyword}&page=${req.params.page}&size=20${apiKey}`)
    .then(apiResponse => {
      res.json(apiResponse.data)
    })
  } else (
    axios.get(`${baseUrl}/events.json?classificationName=music&countryCode=US&keyword=${req.params.keyword}&city=${req.params.city}&page=${req.params.page}&size=20${apiKey}`)
    .then(apiResponse => {
      res.json(apiResponse.data)
    })
  )
}

function show(req, res) {
  console.log('sanity check')
}

// function createComment(req, res) {
//   console.log(Event)
//   Event.findById(req.params.event)
//   .then(event => {
//     event.comments.push({
//       name: req.params.name,
//       comment: req.params.comment
//     })
//     event.save()
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

function showUniqueEvent (req,res) {
  // const testId = 'rZ7HnEZ1AoZYAP'
  console.log("req.params: ", req.params.eventId)
  axios.get(`${baseUrl}/events.json?id=${req.params.eventId}${apiKey}`)
  .then(eventData => {
    // console.log("eventData: ", eventData.data._embedded)
    res.json(eventData.data._embedded.events)
  })
}

export { 
  getSearch,
  show,
  showUniqueEvent,
}