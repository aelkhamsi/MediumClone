# MediumClone
A Medium clone where users can share & comment their articles


## The setup
The application is composed of:
- **Authentication microservice (/auth folder)**: responsible for **login**, **signup** & checking the **validity of connection tokens**
- **Articles microservice (/articles folder)**: reponsible for managing **articles** & **comments**
- **Frontend application (/client folder)**: represents the application that'll run on the user's browser

to launch the different parts of this application, follow the commands bellow:

- **Authentication microservice (/auth folder)**
```
npm run dev
```


- **Articles microservice (/articles folder)**
```
npm run dev
```

- **Frontent application (/client folder)**
```
ng serve
```

## The APIs

Two APIs were implemented for this projet: **Authentication microservice** and **Articles microservice**. Both APIs were implemented using **Express.js**. <br>
We wanted in this project to explore two ways of handling database connection. The **Auth API** uses the ORM **Sequelize** whereas the **Articles API** uses plain SQL queries.<br>

The APIs have the same architecture, which will be explained in the figure below:
