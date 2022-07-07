# inventario-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Docker Stack

version: "3.7"

services:
  docker-app:
    container_name: inventario-ws
    restast: aways
    image: mxavier27/inventario:0.0.1-SNAPSHOT
    hostname: inventario-ws.com.br
    ports:
      - "9032:9032"
    depends_on:
      - docker-postgres
      - vue-app
      - server
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://docker-postgres:5432/inventory
      - SPRING_DATASOURCE_USERNAME=postgres
      - SPRING_DATASOURCE_PASSWORD=1
      - SPRING_JPA_HIBERNATE_DDL_AUTO=update
  docker-postgres:
    image: postgres:10.4
    restast: aways
    ports:
      - 5434:5434
    environment:
      - POSTGRES_DB=inventory
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=1
  vue-app:
    container_name: inventario-portal
    restast: aways
    image: mxavier27/inventorty-portal:prod
    hostname: inventario-portal.com.br  
    ports:
      - "8081:8081"
  server:
    container_name: dns-proxy-server
    restast: aways
    image: defreitas/dns-proxy-server
    hostname: dns.mageddo
    ports:
      - "5380:5380"
    volumes:
      - /opt/dns-proxy-server/conf:/app/conf
      - /var/run/docker.sock:/var/run/docker.sock
      - /etc/resolv.conf:/etc/resolv.conf
