import mongoose from 'mongoose'
import ENV from '../configure/configure.js'
import { webScraper } from '../webScraper/webScraper.js'

// Function used to connect to the Database
const DBConnect = async () => {
	try {
		// Connect to the database with the connection string from the .env file
		await mongoose.connect(ENV.MONGO_URI)
		console.log('🗄  DB Connect was was a success!')

		// Run the web scrapper after the database has been connected to to ensure the most recent wait times
		// have been added to the database
		await webScraper()
	} catch (error) {
		console.error(
			'THE DB FAILED 🤯 :\n.\n..\n...\n....\n.....\nPlease Check Your DB Connection... '
		)
		await mongoose.connection.close()

		// Close the application if an error occurred.
		process.exit(1)
	}
}

export default DBConnect
