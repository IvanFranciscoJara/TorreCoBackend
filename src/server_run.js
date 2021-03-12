const app = require('./server')
const PORT = process.env.PORT || 9999
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
