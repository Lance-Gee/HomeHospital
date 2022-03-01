import express from 'express'
import { webscrape } from '../../webscaper/webscaper.js'

// Creates Router
const route = express.Router()

// Register Route
route.get('/', async (req, res) => {
	console.log('Updating Times')
	try {
		webscrape()
	} catch (error) {
		console.log(error)
	}
	res.status(200).send({
		status: 'Success',
		message: 'Times are updated',
	})
	return
})

export default route
