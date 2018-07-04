#!/bin/bash
uri="attainment/xinli"
pname="xinli.tar.gz"
yarn
pwd
if [ "$1"x = "235"x ]
then
    yarn run build:235
    cd dist
    tar -zcf $pname *
    scp $pname buweiqiang@10.0.11.68:/home/wwwroot/frontend/tmp/
    ssh buweiqiang@10.0.11.68 "cd /home/wwwroot/frontend/ && rm -rf $uri && mkdir -p $uri && tar zxf tmp/$pname -C $uri"
else
    yarn run build
    cd dist
    tar -zcf $pname *
    scp $pname buweiqiang@10.0.11.68:/home/wwwroot/frontend_release/tmp/
    ssh buweiqiang@10.0.11.68 "cd /home/wwwroot/frontend_release/ && rm -rf $uri && mkdir -p $uri && tar zxf tmp/$pname -C $uri"
fi


