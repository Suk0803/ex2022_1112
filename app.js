const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	console.log('headers', req.headers)
	if(req.headers['user-agent'].indexOf('OS X') >= 0)
		res.redirect('/osx')

	res.send('Hello Node')
})

app.get('/osx', (req, res) => {
	res.send('맥을 쓰시는 군요.')
})
app.listen(port, ()=> {
	console.log('server started at', port)
})


