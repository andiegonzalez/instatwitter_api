const UtilitiesController = {
  handle404(req, res) {
    res.status(404);
    res.send({ error: "Invalid API" });
  },
  handleError(err, req, res, next) {
    console.log(err);
    res.status(500);
    res.send({ error: 'Internal Server Error' });
  }
}

module.exports = UtilitiesController;
