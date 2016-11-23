var express = require('express')
var path = require('path')
var app = express()

var data = {
  headers : ['id', 'name', 'year', 'added_time', 'editor'],
  data : [
    { id: 1, name: 'Mononucleose', year: 2010, added_time: 1479896444, editor: 'John Doe' },
    { id: 2, name: 'Lorem iopsum', year: 2009, added_time: 1479896144, editor: 'Marry Blake' },
    { id: 3, name: 'Mononucleose', year: 2011, added_time: 1479296444, editor: 'John Doe' },
    { id: 4, name: 'Mononucleose', year: 2015, added_time: 1479846444, editor: 'Edwin Goodall' },
    { id: 5, name: 'Mononucleose', year: 2012, added_time: 1479696744, editor: 'Jack Black' },
    { id: 6, name: 'Lorem iopsum', year: 2012, added_time: 1479396144, editor: 'John Doe' },
    { id: 7, name: 'Mononucleose', year: 2010, added_time: 1479496494, editor: 'Marry Blake' },
    { id: 8, name: 'Mononucleose', year: 2016, added_time: 1479856124, editor: 'John Doe' }
  ],
  all_records: 8 
}

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.get('/api/data', function(req,res){
  res.status(200).json(data)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})