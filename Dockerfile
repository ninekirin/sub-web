# ---- Dependencies ----
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
ENV http_proxy http://172.17.0.1:7890
RUN yarn install
RUN yarn build

FROM nginx:1.24-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
