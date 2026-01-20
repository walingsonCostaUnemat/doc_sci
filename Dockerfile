# =============================================================================
# SCI-ARGOS Documentation Hub - Dockerfile
# CBMMT - Corpo de Bombeiros Militar do Mato Grosso
# =============================================================================

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar codigo fonte
COPY . .

# Build da aplicacao
RUN npm run build

# =============================================================================
# Stage 2: Production - Nginx
# =============================================================================
FROM nginx:alpine AS production

# Copiar configuracao customizada do nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Comando padrao
CMD ["nginx", "-g", "daemon off;"]
