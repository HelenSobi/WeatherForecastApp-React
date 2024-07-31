### WEATHER APP using React + Vite
Initialize a new React.js project:

### `npm create vite@latest weather-app -- --template react`

Install project dependencies:

### `npm install`

Install Tailwind CSS IntelliSense in editor setup VS Code

### `npm install -D tailwindcss postcss autoprefixer`

### `npx tailwindcss init -p`

Add the files in index.css
******************************************
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
*******************************************

Start the development server: 

### `npm start`

Building for production: 

### `npm run build`

### Environmental variables

Create `.env` file in the `root directory` and provide variables

`VITE_USER_ID = "123"`

### You should have this `VITE_ `as a prefix

In front end, variables loaded like this.

`import.meta.env.VITE_USER_ID`

run development server 

`npm start`

### Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.


### React Shimmer

`npm i react-shimmer-effects`

----------------
Format Code Style
----------------
Mac (macOS): Shift + Option + F 
Windows: Shift + Alt + F
Linux/Ubuntu: Ctrl + Shift + I.