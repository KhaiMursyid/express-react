// require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] })
  console.log("API endpoint hit")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
