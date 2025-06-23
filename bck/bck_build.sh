#!/bin/bash
cd /home/node/app
echo "y" | apt-get install -y nodejs npm
npm install -D express express-generator
npm install -D cookie-parser http-errors morgan ejs
npm install -D mysql2 dotenv 
#npm install nodemon

echo "y" | npx express-generator --view=ejs
npm install
npm audit fix --force
npm audit fix --force

# この後、package.jsonのstartを『node ./app.js』に変える
