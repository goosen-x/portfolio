# Build
FROM node:18-alpine AS build
WORKDIR /app
ENV NODE_ENV=production

# Копируем манифесты
COPY package.json package-lock.json* ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходники
COPY . .

# Сборка
RUN npm run build

# Runtime
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Минимум для запуска
COPY --from=build /app/package.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public 2>/dev/null || true

EXPOSE 3000
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "${PORT}"]
