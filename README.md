# LifeLog

This project is a COIL-collaboration between "Artevelde University of Applied Science - Belgium" & "Seneca - Canada".

The Seneca students created the **Documentation Plan** and the **User Manual**.  
The Artevelde students created the **visual designs**, developed the **App** and deployed both front- and back-end.

🇨🇦 Canadian Students
- Jennifer Brown
- Filiz Ozek Gunyel

🇧🇪 Belgian Students
- Jeroen Dewelde
- Jan Deschacht

## Description of the app

The name of the app is called **LifeLog**, allowing family members to log their daily activities and *life* moments.

The purpose of Life Log is to increase the communication between the seniors and their family members to let them maintain strong ties with their beloved ones. The purpose of the app content is to enable its users to remember information about their family members, share a wishlist, see each other’s photos, and take notes about their lives. Although there are many social media platforms to interact with the whole world, this app focuses on the privacy of families by letting them share information, photos, or videos only with their families, especially with their parents or grandparents in nursing homes. Life Log users include people whose parents or grandparents live in a nursing home. The audience consists of two groups of people:

- Seniors who want to receive information or pictures from their families.
- Younger people who want to share more of their life with their elderly relatives.

Both groups want to be more connected with their families. Although there is a gap between generations, all users can use basic applications on a tablet or a smartphone. The Life Log interface will be very simple and user-friendly, which will allow any users even with very limited technology to use this web-based app.

# Setting up the app

The app uses **npm workspaces**, installing all the dependencies can be done from the root-folder.

You do have to **create** a postgres database first. The name must be called **"lifelog"** as noted in the *.env-files* below.

## Environment variabels - Server

### `.env.dev`

```
PORT = 4000
SECRET = 'test'
HOST = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'supersecret-PW'
DATABASE = 'lifelog'
```

### `.env.prod`

```
PORT = 4000
SECRET = 'test'
HOST = 'frankfurt-postgres.render.com'
USERNAME = 'lifelog_l9w0_user'
PASSWORD = 'ZmZOUj9f9JWQ87ly8D3ARyzLfHna9RxB'
DATABASE = 'lifelog_l9w0'
```

## Environment variabels - Client

### `.env.dev`

```
REACT_APP_AUTH_DOMAIN= 'http://localhost:3000/login'
REACT_APP_GRAPHQL= 'http://localhost:3000/graphql'
SKIP_PREFLIGHT_CHECK = true
REACT_APP_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'
REACT_APP_WEATHER_KEY = '27bba7db2e4e1575d1d898d4aec93d1b'
```

### `.env.prod`

```
REACT_APP_AUTH_DOMAIN= 'https://lifelog-backend.onrender.com/login'
REACT_APP_GRAPHQL= 'https://lifelog-backend.onrender.com/graphql'
SKIP_PREFLIGHT_CHECK = true
REACT_APP_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?'
REACT_APP_WEATHER_KEY = '27bba7db2e4e1575d1d898d4aec93d1b'
```

## Install dependencies

Run `npm install` in root to install the dependencies for **both** server & client.


# Running the project locally
Both the server & client can run from the same project.   
The server is should run on port 3000 and the client should run on port 3001.  
You **have** to run the server first, when it is running, you can then run the client.

In the project directory you can run:
## The server
### `npm run server:dev`

This will run the **NestJS**-server in development mode.  
You can access a graphql playground on [http://localhost:3000/graphql](http://localhost:3000/graphql).

## The client
### `npm run client:dev`
The script will notice port 3000 isn't available and by pressing **y**, it will start the server on the next available port, which is 3001.
This will run the **React**-app which will be available at [http://localhost:3001](http://localhost:3001).

# Running the project locally with Render-database
If you want to run the app with an external database, you can use the Render-database.  
Both server **and** client needs to be run in **production** mode. 

## The server
### `npm run server:prod`

This will run the **NestJS**-server in production mode, accessing the external database. There is no need to create a local postgres-database or to seed the external one.
You can access a graphql playground on [http://localhost:3000/graphql](http://localhost:3000/graphql).

## The client
### `npm run client:prod`
If you run the client in production mode, you **don't** have to run the server locally, as noted in the *.env-files* it'll access the hosted back-end on render.
This will run the **React**-app which will be available at [http://localhost:3001](http://localhost:3000).


# Seeding the database
The database can be dynamically seeded, this by accessing the seed-endpoint on the server.  
Seed the database by surfing to the following URL with optional amount:  
http://localhost:3000/seed/{amount}  
This seeds to following **13** tables:

- agenda_item
- album_item
- family_member
- family_member_in_agenda_item
- family_member_in_album_item
- family_member_in_wish_list_item
- family_relation
- help_page
- liked_picture
- note
- relation_type
- user
- wish_list_item

# Clear database

To empty the database surf to the following url:  
[http://localhost:3000/clear_database](http://localhost:3000/clear_database).

# Hosting
This project was created as an assignment for **Artevelde** and is hosted on **render.com**, to view the app you can access it with the following url:
[https://lifelog-frontend.onrender.com/](https://lifelog-frontend.onrender.com/). 
   

Use the following credentials to login:  
**username**: xxxx  
**password**: xxx  

## Accessing the hosted database from the graphql-playground
url:  
[https://lifelog-frontend.onrender.com/](https://lifelog-frontend.onrender.com/)
