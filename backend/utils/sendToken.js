module.exports = (user, statusCode, res) => {
  //create the token for the user
  const token = user.generateToken();

  options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    token,
    message: "token stored in the cookie and user logged in",
  });
};
