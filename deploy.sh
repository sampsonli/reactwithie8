#!/bin/bash
cd dist
tar -czf app.tar.gz *
scp app.tar.gz root@111.231.188.160:tmp/
ssh root@111.231.188.160 "cd /www/wwwroot/a.sinwai.cn && rm -rf * && tar -zxf ~/tmp/app.tar.gz"
rm -f app.tar.gz
