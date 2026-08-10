# ── build ────────────────────────────────────────────
# Docusaurus is a static site generator — build to ./build, then serve with nginx.
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── runtime (nginx) ──────────────────────────────────
FROM nginx:1.27-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# nginx runs in the foreground by default in this image
