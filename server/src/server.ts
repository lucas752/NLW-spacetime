import fastify from "fastify";

const app = fastify()

app.get('/main', () => {
    return "Working"
})

app.listen({
    port: 3333
}).then(() => {
    console.log("Server running")
})