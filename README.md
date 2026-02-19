# Flayer Studio Portfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS, served using Go Fiber.

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## Production Build

```bash
# Build static files
pnpm run build

# Run Go server locally
go run main.go
```

## Docker

```bash
# Build and run with Docker
docker build -t flayer-studio .
docker run -p 8080:8080 flayer-studio
```

## Deployment

The application is containerized with a multi-stage Dockerfile:
- Stage 1: Build Go binary
- Stage 2: Build React app
- Stage 3: Minimal Alpine image with the server and static files

## Environment Variables

- `PORT` - Server port (default: 8080)
