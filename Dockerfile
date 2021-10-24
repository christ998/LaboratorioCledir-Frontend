FROM node:12-alpine3.12 AS build
WORKDIR /lab-frontend
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.8-alpine AS prod-stage
COPY --from=build /lab-frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]