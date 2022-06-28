sudo docker build .
tag='mxavier27/inventorty-portal:latest' && sudo docker build -t $tag --build-arg ENV_MODE=homol . && sudo docker push $tag