#FROM mysql:9.1.0
FROM mysql:8.4.3
#FROM mysql:8.0.40-bookworm

COPY ./BuildScript/  /docker-entrypoint-initdb.d/

COPY ./config/my.cnf /etc/mysql/conf.d/my.cnf
RUN  chmod 755 /etc/mysql/conf.d/my.cnf
RUN microdnf upgrade && microdnf install -y glibc-langpack-ja 

EXPOSE 3306 33060
#CMD ["mysqld"]