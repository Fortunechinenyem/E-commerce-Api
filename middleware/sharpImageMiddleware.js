const sharp = require("sharp");

const sharpImageMiddleware = (req, res, next) => {
  sharp(`images${req.url}`)
    .resize(300, 200)
    .toBuffer()
    .then((data) => {
      res.set("Content-Type", "image/jpeg");
      res.send(data);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = sharpImageMiddleware;
