const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log(decoded);
      if (decoded) {
        req.body.authorId = decoded._id;
        req.body.username = decoded.username;
        next();
      } else {
        res.send({ msg: "Invalid token" });
      }
    } else {
      res.send({ msg: "Please Login first" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: false,
      msg: "Error in auth middleware",
    });
  }
};

module.exports = {
  auth,
};
