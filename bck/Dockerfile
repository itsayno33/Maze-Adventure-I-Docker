#FROM node:23.1.0-bullseye-slim
FROM ubuntu:24.10
#FROM debian:12.7-slim

# コマンドツール類のインストール 
RUN apt-get update \
 && apt-get install -y sudo vim less
RUN useradd -mN node -s /bin/bash \
 && chmod -R 777 /home/node && mkdir /home/node/app
RUN gpasswd -a node sudo &> /dev/null 
RUN echo "node ALL=(root) NOPASSWD: ALL" >> /etc/sudoers 
RUN usermod  -aG Users node &>/dev/null

# 日本語環境の導入
RUN apt-get install -y locales \
 && localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8 \
 && export LANG=ja_JP.UTF-8 \
 && export LANGUAGE=ja_JP.UTF-8 \
 && export ALL_C=ja_JP.UTF-8

# nodejs、npm(安定版)、express.jsジェネレータのインストール
RUN echo "y" | apt-get install -y nodejs npm
RUN npm install -g express 
RUN npm install -g cookie-parser http-errors morgan express-generator 
#RUN npm audit fix --force
RUN npm install -g mysql2 
RUN npm install -g dotenv
RUN npm install -g ejs 

EXPOSE 3000

# 以下、ビルド後初回起動時(expressのTEMPLATE作成)のコマンド
#CMD cd /home/node/app \
# && npx express-generator --view=ejs \
# && npm install \
# && npm audit fix --force \
# && npm audit fix --force \
# && npm install mysql2
# && npm install nodemon
# && npm start

# 以下、二回目以降の起動時の記述。packege.jsonのstartを「node ./app.js」に書き換えておくこと
#CMD node start

CMD ["node", "start"]
#CMD ["/bin/bash", "-c", "node", "start"]
