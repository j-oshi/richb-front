# Vuetify in docker container

## Project setup
```
git clone .. && cd ..
```

### Build docker image
```
docker build -t <image name> .
```

### Spin up the container
```
docker run -it -p 8080:80 --rm --name <container name> <image name>
```

### See in browser
```
Go to localhost:8080
```
"# richb-front" 
