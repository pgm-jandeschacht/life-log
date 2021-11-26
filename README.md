# LifeLog

The name of the app is called **LifeLog**, this is a collaboration between "Artevelde University of Applied Science - Belgium" & "Seneca - Canada".

The Seneca students created the **Documentation Plan** and the **User Manual**.  
The Artevelde students created the **visual designs** and developed the **App**.

🇨🇦 Canadian Students

- Jennifer Brown
- Filiz Ozek Gunyel

🇧🇪 Belgian Students

- Jeroen Dewelde
- Jan Deschacht

## Description of the app

The purpose of Life Log is to increase the communication between the seniors and their family members to let them maintain strong ties with their beloved ones. The purpose of the app content is to enable its users to remember information about their family members, share a wishlist, see each other’s photos, and take notes about their lives. Although there are many social media platforms to interact with the whole world, this app focuses on the privacy of families by letting them share information, photos, or videos only with their families, especially with their parents or grandparents in nursing homes. Life Log users include people whose parents or grandparents live in a nursing home. The audience consists of two groups of people:

- Seniors who want to receive information or pictures from their families.
- Younger people who want to share more of their life with their elderly relatives.

Both groups want to be more connected with their families. Although there is a gap between generations, all users can use basic applications on a tablet or a smartphone. The Life Log interface will be very simple and user-friendly, which will allow any users even with very limited technology to use this web-based app.

## Setting up the app

The app uses **npm workspaces**, installing all the dependencies can be done from the root.

Run `npm install` in root to install these dependencies.

## Running the project

In the project directory you can run:

### `npm run server:dev`

This will run the **NestJS**-server in development mode.  
You can access a graphql playground on [http://localhost:3000/graphql](http://localhost:3000/graphql).

### `npm run server:prod`

This will run the **NestJS**-server in development mode with external database, so no need for seeding when using this one. Don't forget to add the .env-values from below
You can access a graphql playground on [http://localhost:3000/graphql](http://localhost:3000/graphql).

### `npm run client:start`

This will run the **React**-app on the next available port which will be [http://localhost:3001](http://localhost:3001).

## Seeding the database

Seed the database by surfing to the following URL with optional amount:  
http://localhost:3000/seed/{amount}
This seeds to following tables:

- user
- familyMember
- wishListItem
- agendaItem
- albumItem
- Notes

## Clear database

To empty the database surf to the following url:
[http://localhost:3000/clear_database](http://localhost:3000/clear_database).

## Technical Details of app

The Front-end is build on "create-react-app" with Typescript.  
The Back-end is build in **NestJs**, with a **PostGres**-database.

### Entities Back-end

...

### Queries

...

# Environment variables

## Server

### `.env.dev`
```
PORT = 4000
SECRET = 'test'
HOST = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'Fvh89cxn'
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

## Client

### `.env.dev`
```
REACT_APP_AUTH_DOMAIN= 'http://localhost:3000/login'
REACT_APP_GRAPHQL= 'http://localhost:3000/graphql'
SKIP_PREFLIGHT_CHECK = true
```

### `.env.prod`
```
REACT_APP_AUTH_DOMAIN= 'https://lifelog-backend.onrender.com/login'
REACT_APP_GRAPHQL= 'https://lifelog-backend.onrender.com/graphql'
SKIP_PREFLIGHT_CHECK = true
```