const axios = require('axios');
const qs = require('qs');

const urlToGetLinkedInAccessToken = 'https://www.linkedin.com/oauth/v2/accessToken';
const urlToGetUserProfile = 'https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))';
const urlToGetUserEmail = 'https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))';

class Auth {

  static getLinkedinAccessTokenByCode(code) {

    let accessToken = null;
    const config = {
      headers: { "Content-Type": 'application/x-www-form-urlencoded' }
    };
    const parameters = {
      "grant_type": "authorization_code",
      "code": code,
      "redirect_uri": process.env.REDIRECT_URI,
      "client_id": process.env.CLIENT_ID,
      "client_secret": process.env.CLIENT_SECRET,
    };

    axios.post(urlToGetLinkedInAccessToken, qs.stringify(parameters), config)
      .then((response) => {
        accessToken = response.data['access_token'];
      })
      .catch((error) => console.log('Error in getting linkedin access token', error));

    return accessToken;

  }

  static getLinkedinProfileByToken(token) {

    let userProfile = null;
    const config = {
      headers: { "Authorization": `Bearer ${token}` }
    };

    axios
      .get(urlToGetUserProfile, config)
      .then((response) => {
        userProfile.firstName = response.data["localizedFirstName"];
        userProfile.lastName = response.data["localizedLastName"];
        userProfile.profileImageURL = response.data.profilePicture["displayImage~"].elements[0].identifiers[0].identifier;
      })
      .catch((error) => console.log("Error grabbing user profile", error));

    return userProfile;

  }

  static getLinkedinUserEmailByToken(token) {

    let email = null;
    const config = {
      headers: { "Authorization": `Bearer ${token}` }
    };

    axios
      .get(urlToGetUserEmail, config)
      .then(response => {
        email = response.data.elements[0]["handle~"];
      })
      .catch(error => console.log("Error getting user email", error));

    return email;

  }

}

module.exports = Auth;