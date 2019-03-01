FROM node:8.15-alpine as build
WORKDIR /app
COPY package.json ./
COPY app app/

RUN npm install --production
FROM node:8.15-alpine

COPY --from=build /app /
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "/app/bin/www"]
