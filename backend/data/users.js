import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin Aaftab',
        email: 'aaftab@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Chandler',
        email: 'chandler@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Monica',
        email: 'monica@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users;