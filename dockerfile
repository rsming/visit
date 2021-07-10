FROM nginx:stable-alpine
LABEL maintainer="rustam.mingazov@gmail.com"
COPY static /usr/share/nginx/html