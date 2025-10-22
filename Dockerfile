# Build
FROM node:18-alpine AS build
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* .npmrc* ./ 2>/dev/null || true

RUN \
  if [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
  elif [ -f yarn.lock ]; then corepack enable && yarn --frozen-lockfile; \
  else npm ci; fi

COPY . .
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm build; \
  elif [ -f yarn.lock ]; then yarn build; \
  else npm run build; fi

# Runtime
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Безопасность
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Если используешь output=standalone, раскомментируй следующий блок и удали ниже
# COPY --from=build /app/.next/standalone ./
# COPY --from=build /app/public ./public 2>/dev/null || true
# COPY --from=build /app/.next/static ./.next/static
# USER nextjs
# EXPOSE 3000
# CMD ["node", "server.js"] # если standalone включает server.js

# Обычный режим Next.js
COPY --from=build /app/package.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public 2>/dev/null || true
USER nextjs
EXPOSE 3000
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "${PORT}"]
