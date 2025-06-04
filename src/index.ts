import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message:'Hello world!'
  })
})

app.get("/health"  , (c) => {
  return c.json({
    status:"App is working fine."
  })
})


app.get("/db-health" , (c) => {
  return c.json({
    status: "Add database health check here."
  })
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
