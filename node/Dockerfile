FROM node:16-buster

COPY ./run.sh /opt/app/run.sh
RUN chmod +x /opt/app/run.sh

WORKDIR /opt/app/src

CMD ["/bin/sh", "-c", "/opt/app/run.sh"]