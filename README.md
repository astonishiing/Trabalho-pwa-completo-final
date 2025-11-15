# PWA Completo — Aplicação Web, API e Extensão

Este projeto é uma aplicação completa composta por:

- Uma PWA localizada em `apps/web`
- Uma API Node.js localizada em `apps/api`
- Containerização via Docker
- Pipeline de CI com GitHub Actions
- Extensão de navegador incluída em `trabalho-faculdade2-main/trabalho-faculdade-main`

---

## Funcionalidades

### PWA (Front-end)
- Suporte offline com Service Worker
- Manifest configurado
- Instalação como app (desktop e mobile)
- Build Docker configurado
- Estrutura modular

### API (Back-end)
- Implementada em Node.js
- Dockerfile para execução isolada
- Rota base funcional e extensível

### Extensão de Navegador
- Manifest v3
- Popup e content scripts
- Testes com Playwright
- Scripts de automação

### Infraestrutura
- docker-compose para rodar Web + API
- CI com build, testes e checagens
- Estrutura organizada em workspaces


---

## Como Executar

### Usando Docker

```bash
docker-compose up --build
PWA: http://localhost:8080

API: http://localhost:3000
```

## Executar Manualmente

### PWA

```bash
cd apps/web
npm install
npm start
```

## API

```bash
cd apps/api
npm install
npm start
```

## Testes (Playwright)

```bash
cd trabalho-faculdade2-main
npm install
npm run test
```

## Build da Extensão

```bash
cd trabalho-faculdade2-main
npm run build-extension
```
- Saída gerada em dist/.



