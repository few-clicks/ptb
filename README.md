# ptb
PTB (productivity tracker bot)

install node_modules:
```
npm i
```

project structure:
```
ptb
    |config #configure database 
    |controllers #api controllers
    |middleware #auth, error middleware
    |models #database modele
    |routes #http routing
    |utils #utilities 
    index.js #main file
```

Create a file .env with following content:
```
#TgBot api key
API_KEY_BOT=

DATABASE_CONNECTION=

PORT=8080
RESET_PWD_URL=

#JWToken
JWT_SECRET=
JWT_EXPIRE="7d"

#api key for request protection 
PROTECT_TOKEN=

#email config for resseting password
EMAIL_SERVICE=
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_FROM=
```

fill in necessary onformation and run:
```
npm run start
```
