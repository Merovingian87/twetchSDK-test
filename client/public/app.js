const Twetch = require('@twetch/sdk');
// import Twetch from '@twetch/sdk';
var options = {clientIdentifier: '2f2f746d-364c-40ca-b0ae-38a10f7fd71c'}
const twetch = new Twetch(options);
// twetch.init();
async function auth() {
  const token = await twetch.authenticate();
  console.log('Token: ', token);
}

auth();