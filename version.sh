sudo docker build .
tag='mxavier27/inventorty-portal:prod' && sudo docker build -t $tag . && sudo docker push $tag