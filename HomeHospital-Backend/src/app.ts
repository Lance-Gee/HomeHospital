import express from 'express'
import ENV from './configure/configure'
import { RunApp } from './loaders/loaders'

// Create Express App Instance
const app: express.Application = express()

// Run the application
new RunApp(app)

// Set the app to listen on environment Port
app.listen(ENV.APP_PORT, () => {
	console.log(`🚀 Server is running on http://localhost:${ENV.APP_PORT}`)
})
