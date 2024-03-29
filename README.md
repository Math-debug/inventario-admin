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
    restart: always
    image: mxavier27/inventario:0.0.1-SNAPSHOT
    hostname: inventario-ws.com.br
    ports:
      - "9032:9032"
    depends_on:
      - docker-postgres
      - portal
      - server
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://docker-postgres:5432/inventory
      - SPRING_DATASOURCE_USERNAME=postgres
      - SPRING_DATASOURCE_PASSWORD=1
      - SPRING_JPA_HIBERNATE_DDL_AUTO=update
  docker-postgres:
    image: postgres:10.4
    hostname: database
    restart: always
    ports:
      - 5433:5433
    environment:
      - POSTGRES_DB=inventory
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=1
  portal:
    container_name: inventario-portal
    restart: always
    image: mxavier27/inventorty-portal:prod
    hostname: inventario-portal.com.br
    ports:
      - "8022:80"
    environment:
      - VUE_APP_API_URL=http://inventario-ws.com.br:9022
  pgadmin:
    image: dpage/pgadmin4
    depends_on:
      - docker-postgres
    ports:
      - "5555:80"
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: admin
    restart: unless-stopped
  server:
    container_name: dns-proxy-server
    restart: aways
    image: defreitas/dns-proxy-server
    hostname: dns.mageddo
    ports:
      - "5380:5380"
    volumes:
      - /opt/dns-proxy-server/conf:/app/conf
      - /var/run/docker.sock:/var/run/docker.sock
      - /etc/resolv.conf:/etc/resolv.conf

volumes:
  postgres-data:
