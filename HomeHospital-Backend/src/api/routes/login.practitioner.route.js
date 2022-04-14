import express from 'express'
import { logPractitionerIn } from '../service/login.service.js'
import { generateEmployeeAccessToken } from '../service/employee.token.service.js'

// Creates Router
const route = express.Router()

/**
 * @name Route 
 * @summary POST /api/loginP
 * @description Calls middleware to log the practitioner in and generate access and refresh tokens, 
 * then returns them in the response to the user. 
 */
route.post('/', logPractitionerIn, generateEmployeeAccessToken, (req, res) => {
	// attaches JWT token values to the request
	const accessT = req.tokens.accessT
	const refreshT = req.tokens.refreshT
	res.status(201).json({
		message: 'Login successful',
		practitionerId: req.practitionerId,
		practitionerDetails: req.practitionerDetails
	})
})

export default route
