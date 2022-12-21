#!/bin/bash
cd /opt/app/src
yarn install

if [ "$FRONTEND_ENV" == "dev" ]
then
  yarn serve
else
  yarn build
fi