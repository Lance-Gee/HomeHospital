import mongoose from 'mongoose'
import addressSchema from './address.Schema.js'
// import practitioner from './practitioner.Model.js'

const medicalFacility = new mongoose.Schema({
	hospitalName: {
		type: String,
		required: true,
	},
	address: {
		type: addressSchema,
		required: true,
	},
	phoneNumber: {
		type: String,
		default: null,
	},
	waitTime: {
		type: Number,
		default: null,
	},
	practitioners: {
		type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Practitioner' }],
		default: null,
	},
})

export default mongoose.model('MedicalFacility', medicalFacility)
