import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'


const router = Router()

//all calls made here will be coming from /api/events

/*---------- Public Routes ----------*/

// searching routes 
router.get('/search/:keyword/:city/:page', eventsCtrl.getSearch)
router.get('/:id', eventsCtrl.show)


/*---------- Protected Routes ----------*/


export { router }
