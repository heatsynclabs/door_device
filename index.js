const rawr = require('rawr');
const config = require('./config');
const { apiFetch } = require('./lib/fetch');
const mqtt = require('mqtt');

async function fetchCards() {
  try {
    const cards = await apiFetch('/cards/active');
    return cards;
  } catch (e) {
    console.log('error retrieving card db', e);
  }
}

async function run() {
  if (!config.jwt) {
    try {
      const resp = await apiFetch('/auth', {method: 'POST', body: { email: config.username, password: config.password }});
      console.log('logged in', resp);
      config.jwt = resp.token;
    } catch (e) {
      console.log('error authenticating', e);
      process.exit(1);
    }
  }

  if (!config.cards) {
    config.cards = await fetchCards();
    console.log();
  }

  console.log('connecting to', config.mqttUrl);

  const con = mqtt.connect(config.mqttUrl, {password: config.jwt, username: 'jwt'});

  con.on('error', (e) => {
    console.log('mqtt error', e);
  });

  con.on('close', (e, f) => {
    console.log('mqtt close', e, f);
  });

  con.on('disconnect', (e) => {
    console.log('mqtt disconnect', e);
  });

  con.on('reconnect', (e, f) => {
    console.log('mqtt reconnect', e, f);
  });

  con.on('connect', (e) => {
    console.log('mqtt connect', e);
    con.subscribe('presence', function (err) {
      if (!err) {
        con.publish('presence', 'Hello mqtt')
      }
    });
  });
  
  con.on('message', (topic, message) => {
    // message is Buffer
    console.log(topic, message.toString());

    // TODO, listen for door requests and updates
  });
}

run();