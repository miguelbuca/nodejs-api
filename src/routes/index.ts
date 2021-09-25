import Routes from 'express'

const routes = Routes()

routes.get('/', (request,response) => {
    return response.json({
        message: 'Olá dev!'
    });
})

export default routes;