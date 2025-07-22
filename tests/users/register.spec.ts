import request from 'supertest'
import app from '../../src/app'

describe('POST /auth/register', () => {
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
    })
    describe('Fields are missing', () => {})
})
