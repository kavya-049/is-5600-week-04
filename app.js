const express = require('express')

const app = express()

const products = require('./products')

const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')

// Set the port
const port = process.env.PORT || 3000


app.delete('/products/:id', products.deleteProduct);
app.put('/products/:id', products.updateProduct);

app.use(express.static(__dirname + '/public'));
app.use(middleware.cors)
app.use(bodyParser.json())
app.get('/products', api.listProducts)
app.get('/', api.handleRoot);
app.get('/products/:id', api.getProduct)
app.post('/products', api.createProduct)
app.use(middleware.handleError)
app.use(middleware.notFound)


// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))
