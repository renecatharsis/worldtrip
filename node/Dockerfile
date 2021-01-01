# develop
FROM node:14-buster as dev

WORKDIR /app

CMD ["/bin/sh", "-c", "yarn serve"]

# production, content will be served via nginx
FROM dev as prod

CMD ["/bin/sh", "-c", "yarn build"]
