# SCI-ARGOS Documentation Hub - Guia de Instalacao

## CBMMT - Corpo de Bombeiros Militar do Mato Grosso

---

## Requisitos do Servidor

| Requisito | Minimo | Recomendado |
|-----------|--------|-------------|
| CPU | 1 core | 2 cores |
| RAM | 512 MB | 1 GB |
| Disco | 500 MB | 1 GB |
| SO | Linux 64-bit | Ubuntu 22.04 LTS |
| Docker | 20.10+ | 24.0+ |
| Docker Compose | 2.0+ | 2.20+ |

---

## Instalacao Rapida (5 minutos)

### 1. Preparar o Servidor

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker (se necessario)
curl -fsSL https://get.docker.com | sudo sh

# Adicionar usuario ao grupo docker
sudo usermod -aG docker $USER

# Instalar Docker Compose
sudo apt install docker-compose-plugin -y

# Verificar instalacao
docker --version
docker compose version
```

### 2. Transferir Arquivos

**Opcao A - Via Git (se disponivel):**
```bash
git clone <repositorio> /opt/sci-argos-docs
cd /opt/sci-argos-docs
```

**Opcao B - Via SCP/SFTP:**
```bash
# No computador local (Windows):
scp -r sci-argos-docs usuario@servidor:/opt/

# No servidor:
cd /opt/sci-argos-docs
```

**Opcao C - Via arquivo ZIP:**
```bash
# Transferir o ZIP para o servidor e extrair
unzip sci-argos-docs.zip -d /opt/
cd /opt/sci-argos-docs
```

### 3. Build e Iniciar

```bash
# Navegar ate a pasta
cd /opt/sci-argos-docs

# Build da imagem
docker compose build

# Iniciar container
docker compose up -d

# Verificar status
docker compose ps
```

### 4. Verificar Instalacao

```bash
# Ver logs
docker compose logs -f

# Testar acesso
curl http://localhost:8080/health
```

**Acesse no navegador:** `http://IP_DO_SERVIDOR:8080`

---

## Configuracoes Avancadas

### Alterar Porta

Edite `docker-compose.yml`:
```yaml
ports:
  - "80:80"  # Mudar 8080 para 80 ou outra porta
```

### Usar HTTPS com Nginx Proxy

Se voce ja tem um proxy reverso (Nginx/Traefik):

```nginx
# /etc/nginx/sites-available/sci-argos
server {
    listen 443 ssl http2;
    server_name sci.cbmmt.gov.br;

    ssl_certificate /etc/ssl/certs/sci.cbmmt.gov.br.crt;
    ssl_certificate_key /etc/ssl/private/sci.cbmmt.gov.br.key;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Producao com Limites de Recursos

```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

---

## Comandos Uteis

| Comando | Descricao |
|---------|-----------|
| `docker compose up -d` | Iniciar em background |
| `docker compose down` | Parar container |
| `docker compose restart` | Reiniciar container |
| `docker compose logs -f` | Ver logs em tempo real |
| `docker compose ps` | Ver status |
| `docker compose build --no-cache` | Rebuild completo |

---

## Atualizacao

```bash
cd /opt/sci-argos-docs

# Parar servico
docker compose down

# Atualizar arquivos (git pull ou transferir novos arquivos)
git pull  # se usar git

# Rebuild e iniciar
docker compose build --no-cache
docker compose up -d

# Verificar
docker compose logs -f
```

---

## Troubleshooting

### Container nao inicia

```bash
# Ver logs detalhados
docker compose logs sci-argos-docs

# Verificar se porta esta em uso
sudo netstat -tlnp | grep 8080
```

### Erro de permissao

```bash
# Garantir permissoes corretas
sudo chown -R $USER:$USER /opt/sci-argos-docs
```

### Limpar e reiniciar

```bash
# Remover tudo e comecar do zero
docker compose down -v --rmi all
docker compose build --no-cache
docker compose up -d
```

---

## Backup

```bash
# Backup dos arquivos de configuracao
tar -czvf sci-argos-backup-$(date +%Y%m%d).tar.gz \
  docker-compose.yml \
  docker-compose.prod.yml \
  nginx.conf \
  Dockerfile
```

---

## Contato e Suporte

**CBMMT - Corpo de Bombeiros Militar do Mato Grosso**

Para suporte tecnico, entre em contato com a equipe de TI do CBMMT.

---

*Documentacao gerada em Janeiro/2026*
