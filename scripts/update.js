const fs = require('fs');
const process = require('process');
const axios = require('axios');
const dotenv = require('dotenv');

let env = process.env;
if (!env.AUTH_TOKEN) {
  env = Object(dotenv.parse(fs.readFileSync('.env')));
}

const getProfileJSON = async () => {
  const {
    data: { user_profile: userProfile },
  } = await axios.post(
    'https://www.clubhouseapi.com/api/get_profile',
    {
      user_id: parseInt(env.USER_ID),
    },
    {
      headers: {
        Authorization: `Token ${env.AUTH_TOKEN}`,
        'CH-UserID': env.USER_ID,
        'User-Agent': 'clubhouse/269 (iPhone; iOS 14.1; Scale/3.00)',
        'CH-Languages': 'en-US',
        'CH-Locale': 'en_US',
        'CH-AppVersion': '0.2.15',
        'CH-AppBuild': '269',
        'CH-DeviceId': env.UUID.toUpperCase(),
      },
    },
  );
  return JSON.stringify(userProfile, undefined, 2);
};

(async () => {
  const json = await getProfileJSON();
  fs.writeFile('./data/profile.json', `${json}\n`, (err) => {
    if (err) return console.log(err);
  });
})();
