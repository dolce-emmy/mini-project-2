import express from "express"
import userRoutes from "./routes/users.js"
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.json())

app.use("/users", userRoutes )


app.use((req,res) => {
    res.status(404).sendFile("./views/404PageNotFound.html", {root: "."})
})


app.use((error, req, res, next) => {
    res.status(error.status || 500).send(error.message)
})


app.listen(PORT, () => {

    console.log("server is running on PORT", PORT)


})