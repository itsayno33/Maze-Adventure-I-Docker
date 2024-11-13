#!/bin/bash
cd /home/node/app
echo "y" | apt-get install -y nodejs npm
npm install -g express express-generator
npm install cookie-parser http-errors morgan
npm install mysql2 dotenv 
#npm install nodemon

echo "y" | npx express-generator --view=ejs
npm install
npm audit fix --force
npm audit fix --force

# この後、/home/node/app/bin/www 内の app.set文とapp.listen文をコメントアウトする
