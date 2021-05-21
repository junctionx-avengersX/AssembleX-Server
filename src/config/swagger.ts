const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gilbert Express API with Swagger',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/',
      },
    ],
  },
  apis: ['./src/models/*.ts', './src/routes/*.ts', './@types/*.ts'],
}

export default options
