FROM php:8.3.12-apache-bullseye

COPY ./config/apache/my.conf /etc/apache2/conf-available/
COPY ./config/php/php.ini /usr/local/etc/php/

RUN apt-get update && apt-get install -y \
    libonig-dev \
 && docker-php-ext-install pdo_mysql mysqli 
# && ln -s /etc/apache2/conf-available/my.conf /etc/apache2/conf-enabled/my.conf \
RUN mkdir -pm 777 /var/www/my && mkdir -pm 777 /var/www/my/mai && chmod -R 777 /var/www/my/mai \
 && apt-get install -y vim \
 && apt-get install -y locales \
 && localedef -i ja_JP -c -f UTF-8 -A /usr/share/locale/locale.alias ja_JP.UTF-8 \
 && export LANG=ja_JP.UTF-8 \
 && export LANGUAGE=ja_JP.UTF-8 \
 && export ALL_C=ja_JP.UTF-8 \
 && a2enmod rewrite \
 && a2enmod proxy \
 && a2enmod proxy_http
 
