const linus = require('./linus.json');

let rI = (n) => Math.floor(Math.random() * n);

export default (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(linus[rI(linus.length)])
  } else {
    res.status(404)
  }
}