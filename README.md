# Park-A-Bull
This readme walks you through setting up this project. The below instructions applied to how we deployed our project. Obviously, it would be sub-optimal to allow people to use our private servers or GCP accounts. Thus, we deleted files like connect.ps1 or our GCP service account JSON files.



## NOTE
The SQL server is currently down.

## Installation
Follow [this link](https://docs.nativescript.org/angular/start/introduction) thoroughly.

Once you do, run these commands:

In the parent folder and child folder, run 
```
npm install
```
and
```
npm install -g ngrok
```

or figure out how you'll server your server.js

## Setup

This setup assumes you use a proxy to connect to GCP Cloud SQL. if you connect to MySQL differently, you don't need connect.ps1, and you should connect your way to MySQL.


Open 4 command lines.

in the parent folder:
```
ngrok http 8000
```
update ./ParkABull/db/config.js with the approprate URL in the localUrl key-value pair. then,

```
connect.ps1
```

```
node server.js
```
in the child folder:
```
tns preview
```

