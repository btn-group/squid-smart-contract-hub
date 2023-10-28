# Squid Smart Contract Hub (FireSquid edition)

This squid tracks the events of the Groups and Smart Contract Hub smart contracts on Aleph Zero and serves them via graphql API.

## Getting Started
### Prerequisites

* Node.js
* Docker
* @subsquid/cli
```
npm i -g @subsquid/cli
```

## Running locally
### SQD
```bash
# 1. Install dependencies
npm ci

# 2. Start a Postgres database container and detach
sqd up

# 3. Start the processor
sqd process

# 4. Start the graphql server in a new tab
sqd serve

# 5. Access via http://localhost:4350/graphql
```
### DOCKER
```bash
# https://docs.subsquid.io/deploy-squid/self-hosting/
docker build . -t my-squid
docker compose up
```

## Deployment

Update squid.yaml and deploy as per [this](https://docs.subsquid.io/deploy-squid/quickstart/).

```bash
# add --hard-reset if you want to drop and re-create all the squid resources including the database.
sqd deploy --org btngroup ../squid-smart-contract-hub
```

## Dev flow

### 1. Define database schema

Start development by defining the schema of the target database via `schema.graphql`.
Schema definition consists of regular graphql type declarations annotated with custom directives.
Full description of `schema.graphql` dialect is available [here](https://docs.subsquid.io/basics/schema-file).

### 2. Generate TypeORM classes

Mapping developers use TypeORM [EntityManager](https://typeorm.io/#/working-with-entity-manager)
to interact with target database during data processing. All necessary entity classes are
generated by the squid framework from `schema.graphql`. This is done by running `sqd codegen`
command.

### 3. Generate database migrations

All database changes are applied through migration files located at `db/migrations`.
`squid-typeorm-migration(1)` tool provides several commands to drive the process.

```bash
## drop create the database
sqd down
sqd up

## replace any old schemas with a new one made from the entities
sqd migration:generate
```

See [docs on database migrations](https://docs.subsquid.io/basics/db-migrations) for more details.

### 4. Import ABI contract and generate interfaces to decode events

```bash
npx squid-ink-typegen --abi abi/az_groups.json --output src/abi/az_groups.ts
npx squid-ink-typegen --abi abi/az_smart_contract_hub.json --output src/abi/az_smart_contract_hub.ts
```

### 5. Checking code

```zsh
npm run lint
```

## References

1. https://docs.subsquid.io/firesquid/tutorials/create-a-wasm-processing-squid/
2. https://docs.subsquid.io/firesquid/substrate-indexing/
3. [Entity relations](https://docs.subsquid.io/store/postgres/schema-file/entity-relations/)
4. [Project conventions](https://docs.subsquid.io/basics/squid-structure)
5. [Graphql JSON body converter]https://datafetcher.com/graphql-json-body-converter
