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


The **index.js** listens for request on an HTTP port. Once a request is recieved, it's channeled to a specific **controller** to be handled. The channeling or routing is achieved using Express routing handled by the **routes** files.<br>
The **controllers** handled the logic side and then send a response to client when the processing is completed. For any communication with the database, the controllers use the **repositories**. In this manner, we implemented the repository pattern to separate logic from database access.

## The client application
The client interface was implemented with **Angular**. The architecture is as follows:


![architecture3](https://user-images.githubusercontent.com/48811230/112400318-6e04df80-8d08-11eb-97dd-940c79b9f6be.png)


The App Module contains three sub-modules: **Auth**, **Dashboard** and **Landing**. Each sub-modules is responsible for a set of interfaces representing a different part of the application. In this manner, our frontend application will stay lean, modular and organised. Besided, we will be able to take advantage of
lazy loading for more performance once our application scales.
