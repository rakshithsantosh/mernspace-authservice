import app from './app'
import { Config } from './config'

const startServer = () => {
    const PORT = Config.PORT || 3000
    try {
        app.listen(PORT, () => {
            console.log(`Auth Service is running on port ${PORT}`)
        })
    } catch (error) {
        console.error('Error starting the server:', error)
        process.exit(1)
    }
}

startServer()
