const token = "12345678901";

function validateTokenMiddleware(req, res, next) {
  const userToken = req.query.token;

  if (!userToken) {
    return res.status(401).json({
      success: false,
      message: `Token is required to access the data.`,
    });
  }

  if (userToken !== token) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }

  next();
}

module.exports = validateTokenMiddleware;
