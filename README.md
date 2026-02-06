# DevOps Project

Projekt demonstracyjny DevOps - API Node.js z bazą PostgreSQL.

## Wymagania

- Docker i Docker Compose
- Node.js 20+ (dla lokalnego developmentu)

## Uruchomienie

### Docker Compose (zalecane)

```bash
docker compose up --build
```

API dostępne na: http://localhost:3000

### Lokalnie (development)

```bash
npm install
npm run dev
```

## Endpointy API

- `GET /health` - health check
- `GET /tasks` - lista zadań
- `POST /tasks` - dodaj zadanie (body: `{ "title": "..." }`)
- `PATCH /tasks/:id` - aktualizuj zadanie (body: `{ "completed": true }`)
- `DELETE /tasks/:id` - usuń zadanie

## Testy

```bash
npm test
npm run lint
```

## CI/CD

Projekt zawiera dwa pipeline'y GitHub Actions:
- `ci.yml` - uruchamiany przy push do `main` (testy + build + deploy test)
- `pr.yml` - uruchamiany przy pull requestach (testy + build)
