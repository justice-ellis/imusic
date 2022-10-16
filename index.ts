// const express = require('express');
// const app = express()
// const querystring = require('querystring');
// const request = require('request');
// const jwt = require('jsonwebtoken');
// app.use(express.json());


// REDIRECT_URI="http://localhost:8888/callback"
// client_secret=CLIENT_SECRET='bc0e428a348f482681dccf462b97cb69'
// client_id=CLIENT_ID='2794b6bd6f394507a6adbc64159b2e89'


// const generateRandomString = length => {
//   let text = '';
//   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   for (let i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// };


// const stateKey = 'spotify_auth_state';

// app.get('/login', (req, res) => {
//   const state = generateRandomString(16);
//   res.cookie(stateKey, state);

//   const scope = 'user-read-private user-read-email';

//   const queryParams = querystring.stringify({
//     client_id: CLIENT_ID,
//     response_type: 'code',
//     redirect_uri: REDIRECT_URI,
//     state: state,
//     scope: scope,
//   });

//   res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
// });

// app.get('/callback', async(req, res) => {
    
//     var authOptions = {
//         url: 'https://accounts.spotify.com/api/token',
//         headers: {
//           'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//         },
//         form: {
//           grant_type: 'client_credentials'
//         },
//         json: true
//       };
      
//       await request.post(authOptions, function(error, response, body) {
//         if (!error && response.statusCode === 200) {
//           var token = body.access_token;
//         }
//         console.log(token)
//         res.json({token, body})
//       });


//   });

// app.listen(3000, () => {
//     console.log('app listening at port 3000');
// })
