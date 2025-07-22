import app from './app'
import { Config } from './config'
import logger from './config/logger'

const startServer = () => {
    const PORT = Config.PORT || 3000
    try {
        app.listen(PORT, () => {
            logger.info(`Auth service is listening on port: `, { port: PORT })
        })
    } catch (error) {
        console.error('Error starting the server:', error)
        process.exit(1)
    }
}

startServer()
