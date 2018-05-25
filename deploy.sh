#!/bin/bash
uri="attainment/evalpc"
pname="evaluation_pc.tar.gz"
yarn
pwd
if [ "$1"x = "235"x ]
then
    yarn run build:235
    cd dist
    tar -zcf $pname *
    scp $pname frontend@10.0.11.59:/home/wwwroot/frontend/tmp/
    ssh frontend@10.0.11.59 "cd /home/wwwroot/frontend/ && rm -rf $uri && mkdir -p $uri && tar zxf tmp/$pname -C $uri"
else
    yarn run build
    cd dist
    tar -zcf $pname *
    scp $pname frontend@10.0.11.59:/home/wwwroot/frontend_release/tmp/
    ssh frontend@10.0.11.59 "cd /home/wwwroot/frontend_release/ && rm -rf $uri && mkdir -p $uri && tar zxf tmp/$pname -C $uri"
fi


