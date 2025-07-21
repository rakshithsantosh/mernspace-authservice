import winston from 'winston'
import { Config } from '.'

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'auth-service' },
    transports: [
        //storage for logs in files
        new winston.transports.File({
            level: 'info',
            dirname: 'logs',
            filename: 'auth-service.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === 'test',
        }),
        //error logs in files
        new winston.transports.File({
            level: 'error',
            dirname: 'logs',
            filename: 'error-auth-service.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === 'test',
        }),

        //storage for logs
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: Config.NODE_ENV === 'test',
        }),
    ],
})

export default logger
