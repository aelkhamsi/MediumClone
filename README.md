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
## The overall aerchitecture of the application
The architecture of the application will be explained in the figure below:

![architecture (1)](https://user-images.githubusercontent.com/48811230/112397445-60e4f200-8d02-11eb-9cb3-5429f4006ee5.png)

### The Auth API
The Authentication microservice handles **login**, **signup** and **token validation**.<br>
Once the client connects to the application, he have to Login/Signup to create his account and to receive consequently an **authentification token** (created by the library JWT).<br>
The client will use this **token** to communicate with the **Articles API** to create articles and comments.

### The Articles API
The Articles microservice manages **articles** and **comments** in a CRUD manner.<br>
A request to this API must be accompanied with a **connection token**, otherwise the communication is unauthorized. This is done to prevent an outsider to mess with our databse.<br>
Once it recieves a **token**, the **Articles API** communicated with the **Auth API** to validate it. We could've handeled the token validation in the Articles API but since the token is created by the **Auth API** with a secret key, we wanted to keep the management of the tokens localy in this API.

### The Client Application
The client interface offers:
- **Login & Signup pages**

- **Dashboard page** where are listed all the articles with a comments box
- **My articles page** where are listed all the articles of the authentified user
- **Create page** where the authentified user can create a new article

## The APIs

Two APIs were implemented for this projet: **Authentication microservice** and **Articles microservice**. Both APIs were implemented using **Express.js**. <br>
We wanted in this project to explore two ways of handling database connection. The **Auth API** uses the ORM **Sequelize** whereas the **Articles API** uses SQL queries coupled with a **mysql driver**<br>

The APIs have the same architecture, which will be explained in the figure below:

![architecture2](https://user-images.githubusercontent.com/48811230/112399186-14031a80-8d06-11eb-82fc-4bc05af0f662.png)




