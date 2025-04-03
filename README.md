# vite, typescript, qiankun boilerplate project

# Web project boilerplate for microfontend using qiankun that is an implementation of Micro Frontends, which based on single-spa. It aims to make it easier and painless to build a production-ready microfront-end .

# this version only runs the react microfrontend, it's pending configure the vue and svelte microfrontends to load those from shell app


# at /react-microfrontend app
cd /react-microfrontend
npm run build
npx http-server ./dist -p 3001 --cors

# at shell app
cd /shel
npm run dev