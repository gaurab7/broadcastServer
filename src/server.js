import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8848


//ROUTEs
app.use('/')//take to auth routes
app.use('/rooms')//take to room routes
app.use('/msg')//take to msg routes
app.use('/users')//take to user/admin actions route



app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}`)
})