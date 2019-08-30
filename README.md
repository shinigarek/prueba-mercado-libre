# ADNS

Instrucciones para probar metodo local:

```sh
// Descargar proyecto GIT:
git clone https://github.com/shinigarek/prueba-mercado-libre.git

// Ir al módulo y descargar las dependencias:
cd prueba-mercado-libre && npm install

// Ejecutar el siguiente comando para revisar el metodo
node index.js

```

Si quiere agregar nuevos adns, debe ir al archivo index.js agregar las siguientes líneas:

```sh

const adn4 = ["GGGTTT","GGGTTT","GGGTTT","GGGTTT","GGGTTT","GGGTTT"];
const adn5 = ["AATTGG","AATTGG","GGGTTT","AATTGG","GGGTTT","GGGTTT"];

console.log( `${adn4} = ${isMutant(adn4)}`);
console.log( `${adn5} = ${isMutant(adn5)}`);
```

Las APIS solicitadas están alojadas en Amazon y las puedes consultar en las siguientes URLS:

```sh

// Para consultar un ADN
[POST] https://bq0iq0swag.execute-api.us-east-2.amazonaws.com/dev/mutant
{ "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] }

// CURL
curl -X POST \
  https://bq0iq0swag.execute-api.us-east-2.amazonaws.com/dev/mutant \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 65' \
  -H 'Content-Type: application/json' \
  -H 'Host: bq0iq0swag.execute-api.us-east-2.amazonaws.com' \
  -H 'Postman-Token: 0fbc2e42-db08-442f-9f59-42e298533f31,7e6be6e2-1cc0-4e98-aaa1-17c5c965f245' \
  -H 'User-Agent: PostmanRuntime/7.15.2' \
  -H 'cache-control: no-cache' \
  -d '{ "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] }'


// Para obtener el reporte
    [GET] https://bq0iq0swag.execute-api.us-east-2.amazonaws.com/dev/stats

// CURL
curl -X GET \
  https://bq0iq0swag.execute-api.us-east-2.amazonaws.com/dev/stats \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: bq0iq0swag.execute-api.us-east-2.amazonaws.com' \
  -H 'Postman-Token: bd9fd287-9565-486f-bd8b-6ecb8a9d6068,b1a75ca7-d390-4eae-a760-0cc77355f8af' \
  -H 'User-Agent: PostmanRuntime/7.15.2' \
  -H 'cache-control: no-cache'

```

# By Ezequiel Obreque