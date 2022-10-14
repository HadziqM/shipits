This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Typescrypt Config

```bat
npx create-next-app@latest --ts
mkdir components
mkdir lib
mkdir test
```

add path to tsconfig.json CompilerOptions</br>

```json
    "baseUrl": ".",
    "paths": {
        "@/components/_": ["components/_"],
        "@/lib/_": ["lib/_"],
        "@/pages/_": ["pages/_"],
        "@/public/_": ["public/_"]
    }
```

### Tailwind Config

```properties
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i daisyui
```

setting up tailwind.config.json <br/>

```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

add some tailwind decorator on styles/global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Prisma Config

```proprties
npm i ts-node --save-dev
```

add output dir to tsconfig.json CompilerOptions<br/>

```json
    "sourceMap": true,
    "outDir": "dist"
```

```proprties
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
```

edit .env for psql database url<br/>
edit schema.prisma <br/><br/>

```proprties
npx prisma migrate dev --name init
```

### Google Charts

```proprties
npm install --save react-google-charts
```

## Developer Mode

### Prisma Playground

```proprties
npx prisma studio
```

### Next Playground

add some script on package.json to make next run on specific ip and port<br/>

```json
    "scripts": {
        "dev": "next dev --hostname 127.0.0.1 -p 8000",
        "build": "next build",
        "start": "next start --hostname 127.0.0.1 -p 8000",
        "lint": "next lint"
    },
```

```proprties
npm run dev
```

## Testing With Discord

### Setting up Discord.py

- go to testing directory and make sure you have installed python and have pip on environmental variables </br>

```bat
cd test
```

- install required library with pip package installer </br>

```proprties
pip install -r requirements.txt
```

- get yourself discord bot and invite it to your discord server </br>
- get your discord token and fill it on database.ini </br>
- run discord bot </br>

```proprties
python main.py
```

- go to your discord server and type ==%sync== to sync bot's slash command to your discord server </br>
- use slash command test to generate dummy data to your database </br>

### Alternatives

- for alternatives you could also use postman to generate dummy data </br>
- you need to install ngrok and expose your psql port or forward your database port stright to internet and send dummy data from postman </br>

## Deploy

- you can deploy server by simply build next.js </br>

```proprties
npm run build
```

- setting ip and port you want to deploy to on package.json, its on "scripts" section and "start" option </br>

- then start server troungh terminal </br>

```proprties
npm start
```

- to run discord bot its simply just run them, you can add your custom command on cogs folder </br>

```bat
cd test && python main.py
```
