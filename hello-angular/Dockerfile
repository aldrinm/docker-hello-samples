# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . . 

RUN npm run build --configuration=production

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist/hello-angular/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 