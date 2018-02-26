import axios from 'axios';

import Configuration from '../models/configuration';

const logdnaTokenKey = 'logdnaToken';

// eslint-disable-next-line import/prefer-default-export
export async function ingest(hostname, lines) {
  const logdnaToken = await Configuration.getValue(logdnaTokenKey);

  return axios.post('https://logs.logdna.com/logs/ingest', { lines }, {
    params: {
      hostname,
      now: Date.now(),
    },

    auth: {
      username: logdnaToken,
    },
  });
}
