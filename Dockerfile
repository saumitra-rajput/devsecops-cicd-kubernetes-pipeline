FROM node:22-alpine AS builder

WORKDIR /app

COPY app/package*.json .

RUN npm install

COPY app/ .

# Runtime stage
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "start"]

