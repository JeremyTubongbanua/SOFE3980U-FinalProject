FROM node

EXPOSE 3001

WORKDIR /app

COPY . .

WORKDIR /app/backend

RUN npm install

CMD ["npm", "run", "start", "0.0.0.0"]
