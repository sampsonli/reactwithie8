#!/bin/bash
uri=attainment/evalpc
yarn
yarn run build:235
cd dist
tar -zcf evaluation_pc.tag.gz *
scp evaluation_pc.tag.gz frontend@10.0.11.59:/home/wwwroot/frontend/tmp/
ssh frontend@10.0.11.59 "cd /home/wwwroot/frontend/ && rm -rf $uri && mkdir -p $uri && tar zxf tmp/evaluation_pc.tag.gz -C $uri"
