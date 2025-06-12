FROM alpine:latest
WORKDIR /app
COPY . .
RUN apk update
RUN apk add --no-cache git nodejs yarn
RUN yarn
RUN yarn build
ENTRYPOINT ["yarn", "start"]