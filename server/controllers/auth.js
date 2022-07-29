const Auth = require('../models/auth');

exports.getLinkedinProfile = async (request, response, next) => {

  let user = {};
  const code = request.query.code;

  const accessToken = Auth.getLinkedinAccessTokenByCode(code);
  const userProfile = Auth.getLinkedinProfileByToken(accessToken);
  const userEmail = Auth.getLinkedinUserEmailByToken(accessToken);

  let responseStatus = 400;

  if (!(accessToken === null || userProfile === null || userEmail === null)) {
    user = Auth.parseUserData(userProfile, userEmail);
    responseStatus = 200;
  }

  return response.status(responseStatus).json({ user });

};