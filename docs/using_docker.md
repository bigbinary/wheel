# Using docker for development

## Docker for development environment

- Install [Docker](https://docs.docker.com/get-docker/).
- Clone this repo by running `git clone https://github.com/bigbinary/NeetoUiChallenge.git`.
- `cd NeetoUiChallenge`
- If using it for the first time, run `docker-compose build` to build the images.
- Run `docker-compose run --rm web bin/setup` to create and seed the database.
- Run `docker-compose up` to start the application and get things up and running.
- From now onwards, we can just run `docker-compose up` from within the root of the `NeetoUiChallenge` directory to bring up the application.

#### Build images without using cache

While re-building images, docker tries to find it's layers in the cache, which might bring-in stale layers.

```bash
# this forces docker to not use cached image layers
docker-compose build --no-cache
```

### Steps to remove docker data related to NeetoUiChallenge

Run `docker ps -a | grep NeetoUiChallenge` to get containers related to NeetoUiChallenge. Then run `docker rm -f $(docker ps -a | grep NeetoUiChallenge | awk '{print $1}')` to delete them.

Run `docker images | grep NeetoUiChallenge` to get images related to NeetoUiChallenge. Then run `docker rmi -f $(docker images | grep NeetoUiChallenge | awk '{print $3}')` to delete them.

Run `docker volume ls | grep NeetoUiChallenge` to get volumes related to NeetoUiChallenge. Then run `docker volume rm -f $(docker volume ls | grep NeetoUiChallenge | awk '{print $2}')` to delete them.

### Steps to nuke all data and start fresh

If you want to try out something slightly more daring, yet effective, then run the following single line command to wipe all of the docker data including containers, images, volumes.

**Warning: The following command will wipe all of docker data of all local docker projects and containers:**

```bash
docker rm -f $(docker ps -a -q) && docker rmi -f $(docker images -q) && docker volume rm -f $(docker volume ls -q)
docker-compose up --build
```

Run `docker system prune -a -f --volumes` to remove all containers, networks, images (both dangling and unreferenced), and volumes.
