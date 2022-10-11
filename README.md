This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Typescrypt Config

npx create-next-app@latest --ts </br>
mkdir component </br>
mkdir lib </br>
mkdir test </br> </br>
add path to tsconfig.json </br>
"paths": {
"@/components/_": ["components/_"],
"@/lib/_": ["lib/_"],
"@/pages/_": ["pages/_"],
"@/public/_": ["public/_"]
}
