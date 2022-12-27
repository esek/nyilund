FROM node:16-alpine as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

ARG DEPLOY_URL
ENV DEPLOY_URL=${DEPLOY_URL}

RUN DEPLOY_URL=${DEPLOY_URL} yarn build

FROM nginx:alpine

COPY --from=builder /app/dist ./usr/share/nginx/html
