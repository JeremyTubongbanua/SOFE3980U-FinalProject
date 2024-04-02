FROM node

EXPOSE 80

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--port", "80"]
