# Full Stack Developer Challenge

This is a fullstack developer challenge from [here](https://github.com/Pay-Baymax/FullStackEngineerChallenge).

## About this monorepo

The project is created as a Monorepo project, because Monorepo is:

- Easy to coordinate changes across modules
- Simplify dependencies
- Single lint, build, test and release process
- Test across modules are run together, find bugs that touch multiple modules easier

There are there packages in this repo:

| Package Name  | Description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| @wuct/client  | A single page web application based on React                                     |
| @wuct/server  | A NodeJS server based on Apollo GraphQL                                          |
| @wuct/codegen | A code generator to generate TypeScript types from GraphQL schemas and documents |

## To start the demo

1. Make sure you have [docker](https://docs.docker.com/install/) installed on your machine.
2. Clone this repo and install dependencies:

   ```sh
   git clone https://github.com/wuct/FullStackEngineerChallenge.git
   cd ./FullStackEngineerChallenge
   docker-compose run server yarn --network-timeout 100000
   ```

3. Build the server and the client:

   ```sh
   docker-compose run -e NODE_ENV=production server yarn run build
   ```

   > Note: there is a TypeScript version warning because TypeScript 3.5 is not officially supported by typescript-estree currently. However, this will not affect our build.

4. Seed the database with mock data:

   ```sh
   docker-compose run server yarn workspace @wuct/server seed
   ```

   > Note: a folder `./pgdata` will be created on the host to keep the data in the database accross container lifecycles.

5. Start all services:

   ```sh
   docker-compose -f docker-compose.yml up
   ```

   where `-f docker-compose.yml` is needed, otherwise the _docker-compose.override.yml_ will be used.

   Or to run in the background:

   ```sh
   docker-compose -d -f docker-compose.yml up
   ```

   Then go to:

   - Performance review dashboard: [http://localhost:8080/]()
   - API document (GraphQL Playgroud): [http://localhost:4000/]()

   After finishing playing with the demo, run:

   ```sh
   docker-compose down
   ```

   to turn down the services. Repeat this step when you want to see the demo again.

## To develop this project

> Note: because _Docker Desktop for Mac_ is slow, I recommend run the development services on your host machine directly except the db.

1. Launch the db:

   ```sh
   docker-compose up db
   ```

   you might want to seed it with mock data first, see how to do it [here](#to-start-the-demo).

2. Start the webpack-dev-server:

   ```sh
   yarn workspace @wuct/client start
   ```

   This server will serve at [http://localhost:3000/](), and reload automatically on files changed.

3. Start the nodemon server:

   ```sh
   DB_HOST=localhost yarn workspace @wuct/server watch
   ```

   This server will connect to the db, serve at [http://localhost:4000/](), and reload automatically on files changed.

4. If you change any `.graphql` files, run

   ```sh
   yarn workspace @wuct/codegen generate
   ```

   to generate related TypeScript

5. Change the code and go to [http://localhost:3000/]() to see the result. Happy coding! If you change any `.graphql` files, run

   ```sh
   yarn workspace @wuct/codegen generate
   ```

   to generate related TypeScript type definitions. See [Type System](#type-system) section for more detail.

6. Do not forget to run `docker-compose down` when finishing.

### To test

To test all packages, run:

```sh
yarn run test
```

or run:

```sh
yarn workspace <PACKAGE NAME> test
```

to test specific project.

### To check type

To check all packages, run:

```sh
yarn run type-check
```

or run:

```sh
yarn workspace <PACKAGE NAME> type-check
```

to check specific project.

## Why do I user ...?

### For the developing enviroment

- **Docker Compose and Yarn:** to ensure the enviroment is consistent across machines through time by `docker-compose.yml` and `yarn.lock`,
- **Yarn and Lerna:** to manage the monorepo.

### For the correctness

- **TypeScript and GraphQL:** static type-checking can reduce a lot of bug. I use [GraphQL Code Generator](https://graphql-code-generator.com/) to generate TypeScript type definitions based on GraphQL schemas and documents in [@wuct/codegen](https://github.com/wuct/FullStackEngineerChallenge/tree/master/packages/codegen). So once the schemas are defined, we can ensure all server code and client code are comply with the schema by type checking. This approach also known as "SDL Fisrt". As a nice side effect, we can also generate React Apollo hooks, e.g. [`useGetReviewsQuery()`](https://github.com/wuct/FullStackEngineerChallenge/blob/d5b7fdb70abe8058c1d518bdb6f745b9d041a9e4/packages/client/src/generatedTypes.tsx#L187-L197) directly from the documents to boost developing speed.

### For the developing speed

- **create-react-app:** to setup a React application with TypeScript supported.
- **graphql-yoga:** to setup a GraphQL server with TypeScript supported.
- **material-ui:** a React UI framework with a good document website, which is important for the developing speed. Also, its is designed from and for React specifically rather than a wrapper of other libraries.
- **typeorm:** to setup the db tables by writing [entities](https://github.com/wuct/FullStackEngineerChallenge/tree/d5b7fdb70abe8058c1d518bdb6f745b9d041a9e4/packages/server/src/entity), and generate mock data for development automatically by writing [yaml files](https://github.com/wuct/FullStackEngineerChallenge/tree/d5b7fdb70abe8058c1d518bdb6f745b9d041a9e4/packages/server/fixtures).
