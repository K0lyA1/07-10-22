var express = require('express')
var app = express()
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
};

var cb2 = function (req, res) {
  res.send('Hello from C!');
};
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
};

var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

app.get(
  '/example/d',
  [cb0, cb1],
  function (req, res, next) {
    console.log(
      'the response will be sent by the next function ...'
    );
    next();
  },
  function (req, res) {
    res.send('Hello from D!');
  }
);

app
  .route('/book')
  .get(function (req, res) {
    res.send('Get a random book');
  })
  .post(function (req, res) {
    res.send('Add a book');
  })
  .put(function (req, res) {
    res.send('Update the book');
  });


app.get('/example/c', [cb0, cb1, cb2]);


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next();
})
app.get('/', function (req, res) {
  res.send('root');
});
app.get('/about', function (req, res) {
  res.send('about');
});
app.get('/random.text', function (req, res) {
  res.send('random.text');
});
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd');
});
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd');
});
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd');
});
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e');
});
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e');
});
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/');
});
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/');
});
app.get(
  '/example/b',
  function (req, res, next) {
    console.log(
      'the response will be sent by the next function ...'
    );
    next();
  },
  function (req, res) {
    res.send('Hello from B!');
  }
);
app.use('/static', express.static('public'))
app.use(express.static('public'))
app.use(express.static('files'))
app.use('/static', express.static(__dirname + '/public'))
app.listen(3000, function () {
  console.log('OIIIIIIIIIIIIIIIIII VSE robit partal 3000')
})
