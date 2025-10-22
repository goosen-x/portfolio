# Build
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime (standalone)
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Копируем standalone-бандл и статик
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
# Если есть public — раскомментируй:
# COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
