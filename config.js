// Copyright 2019 Iced Development, LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const Pack = require('./package');

const env = process.env.NODE_ENV || 'development';

// heatsync members_api
const apiUrl = process.env.API_URL || 'http://localhost:3004';

let mqttUrl = process.env.MQTT_URL;

if (!mqttUrl) {
  const url = new URL(apiUrl);
  if (url.protocol === 'http:') {
    mqttUrl = 'ws://' + url.host;
  } else {
    mqttUrl = 'wss://' + url.host;
  }
}

// JWT to login with
const jwt = process.env.MQTT_URL;

// alternately device could login with username/password
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const config = {
  env,
  apiUrl,
  mqttUrl,
  version: Pack.version,
  jwt,
  username,
  password,
  cards: null, // possibly read from config?
};

module.exports = config;
