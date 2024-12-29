FROM oven/bun:latest AS base
COPY .env .env
COPY env.docker.sh env.docker.sh
RUN ./env.docker.sh
RUN echo $GITHUB_WEBHOOK_SECRET

FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["bun", "server.js"]