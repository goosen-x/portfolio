# Build
FROM node:18-alpine AS build
WORKDIR /app

# deps (включая devDeps)
COPY package*.json ./
RUN npm ci

# source
COPY . .

# build (typescript уже есть в devDeps)
RUN npm run build

# Runtime
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /app/package.json ./
COPY --from=build /app/.next ./.next

EXPOSE 3000
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "${PORT}"]
