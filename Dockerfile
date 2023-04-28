FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/index.html
ADD build /usr/share/nginx/html/
RUN rm -rf /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/default.conf

