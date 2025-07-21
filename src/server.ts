import { Config } from './config'

function welcome(name: string) {
    console.log('port is running on', Config.PORT)
    console.log(`Welcome to the auth service, ${name}!`)
}

welcome('Rakshith')
