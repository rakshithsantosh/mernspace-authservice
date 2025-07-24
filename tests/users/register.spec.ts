import request from 'supertest'
import app from '../../src/app'
import { DataSource } from 'typeorm'
import { AppDataSource } from '../../src/config/data-source'
import { truncateTables } from '../utils'
import { User } from '../../src/entity/User'

describe('POST /auth/register', () => {
    let connection: DataSource
    beforeAll(async () => {
        connection = await AppDataSource.initialize()
    })

    //teardown after all tests are done basically cleanup after all tests
    beforeEach(async () => {
        //database truncate
        //this will remove all the data from the database
        await truncateTables(connection)
    })

    afterAll(async () => {
        await connection.destroy()
    })

    describe('Given all fields', () => {
        it('should return the 201 status code', async () => {
            //AAA
            //Arrange
            const userData = {
                firstName: 'Rakshith',
                lastName: 'S',
                email: 'rakshith@mern.space',
                password: 'password123',
            }

            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData)

            //Assert
            expect(response.statusCode).toBe(201)
        })

        it('should return a valid json', async () => {
            //Arrange
            const userData = {
                firstName: 'Rakshith',
                lastName: 'S',
                email: 'rakshith@mern.space',
                password: 'password123',
            }

            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData)

            //Assert
            expect(
                (response.headers as Record<string, string>)['content-type'],
            ).toEqual(expect.stringContaining('json'))
        })

        it('should persist the user in database ', async () => {
            //Arrange
            const userData = {
                firstName: 'Rakshith',
                lastName: 'S',
                email: 'rakshith@mern.space',
                password: 'password123',
            }

            //Act
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const response = await request(app)
                .post('/auth/register')
                .send(userData)

            //Assert
            const userRepository = connection.getRepository(User)
            const users = await userRepository.find()

            expect(users).toHaveLength(1)
            expect(users[0].firstName).toBe(userData.firstName)
            expect(users[0].lastName).toBe(userData.lastName)
            expect(users[0].email).toBe(userData.email)
        })
    })
    describe('Fields are missing', () => {})
})
