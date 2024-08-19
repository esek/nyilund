FROM node:16-alpine as builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install --frozen-lockfile

COPY . .

ARG DEPLOY_URL
ENV DEPLOY_URL=${DEPLOY_URL}

RUN pnpm run build

FROM nginx:alpine

COPY --from=builder /app/dist ./usr/share/nginx/html
