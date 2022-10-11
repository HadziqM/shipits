This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Typescrypt Config

> npx create-next-app@latest --ts </br>
> mkdir components </br>
> mkdir lib </br>
> mkdir test </br>

add path to tsconfig.json CompilerOptions</br>

```
    "baseUrl": ".",
    "paths": {
        "@/components/_": ["components/_"],
        "@/lib/_": ["lib/_"],
        "@/pages/_": ["pages/_"],
        "@/public/_": ["public/_"]
    }
```

### Tailwind Config

> npm install -D tailwindcss postcss autoprefixer </br>
> npx tailwindcss init -p </br>
> npm i daisyui </br>

setting up tailwind.config.json <br/>

```
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

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

#### Prisma Config

> npm i ts-node --save-dev <br/>

add output dir to tsconfig.json CompilerOptions<br/>

```
    "sourceMap": true,
    "outDir": "dist"
```

> npm install prisma --save-dev <br/>
> npx prisma init --datasource-provider postgresql <br/>

edit .env for psql database url<br/>
edit schema.prisma <br/><br/>

> npx prisma migrate dev --name init <br/>

### Google Charts

> npm install --save react-google-charts

## Developer Mode

### Prisma Playground

> npx prisma studio <br/>

### Next Playground

add some script on package.json to make next run on specific ip and port<br/>

```
    "scripts": {
        "dev": "next dev --hostname 127.0.0.1 -p 8000",
        "build": "next build",
        "start": "next start --hostname 127.0.0.1 -p 8000",
        "lint": "next lint"
    },
```

> npm run dev
