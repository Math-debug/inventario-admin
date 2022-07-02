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

### Docker Setup DNS

sudo docker run --hostname dns.mageddo --name dns-proxy-server -p 5380:5380   -v /opt/dns-proxy-server/conf:/app/conf   -v /var/run/docker.sock:/var/run/docker.sock   -v /etc/resolv.conf:/etc/resolv.conf   defreitas/dns-proxy-server
