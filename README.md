# NodeJS Template


## How to run

Install the dependencies:

```
npm install
```

In dev mode run with:

```
npm run dev
```

## Run in production with pm2

Install globally the pm2, it is a production process manager for Node.js applications with a built-in load balancer.:

```
npm install -g pm2
```

and then run:  
```
npm run prod:pm2
```

To use other commands, check the pm2 documentation: https://github.com/Unitech/pm2


pm2 stop {id} - stop a instance by the ID;
pm2 status - check the applications running
pm2 restart {id}- restart a instance by the ID
pm2 monitor - open a dashboard with metrics

## Run without pm2

```
npm run prod
```

## Available endpoints to test:

/health - check if the application is up
/api/hello-world - GET with a message 'hello world'


## Port

The application is running in 4500 by default, to change this, pass in execution command a process.env.PORT with the value. Or edit the config file.