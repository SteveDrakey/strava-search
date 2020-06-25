request = require('request');
querystring = require('querystring');
var strava = require('strava-v3');

const intercomApi = 'https://www.strava.com/api/v3'; // '/v3/oauth/token'
/* process.env.URL from netlify BUILD environment variables */
const siteUrl = process.env.URL || 'http://localhost:3000'


const config = {
  /* values set in terminal session or in netlify environment variables */
  // appId: process.env.INTERCOM_APP_ID,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  code: 'a62c5fe83cdbac61f96989469d3618c2410b2e67',
  /* Intercom oauth API endpoints */
  tokenHost: intercomApi,
  authorizePath: `${intercomApi}/oauth`,
  tokenPath: `${intercomApi}/oauth/token`,
  profilePath: `${intercomApi}/me/`,
  /* redirect_uri is the callback url after successful signin */
  redirect_uri: `${siteUrl}/.netlify/functions/auth-callback`,
  searchKey: process.env.SEARCH_KEY
}

async function main() {
 
  const postData = querystring.stringify({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    refresh_token: config.code,
    grant_type: 'refresh_token'
  });

  console.log(postData);

  var r = await requestWrapper(null,postData);
  var access_token = JSON.parse(r.data).access_token
  var id = 2286999212;

  strava.activities.get(
    { 'access_token': access_token, id },
    function (err, activity, limits) {
      console.log(activity);
    }
  );

  

}

main().catch( e => console.log(e));


function requestWrapper(requestOptions, data) {
  return new Promise((resolve, reject) => {    
    request.post('https://www.strava.com/oauth/token', { form: data }, (err, response, body) => {
      //request(requestOptions, (err, response, body) => {
      if (err) {
        return reject(err)
      }
      // return data
      return resolve({
        data: body
      })
    })
  })
}
