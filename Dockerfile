FROM quay.io/xeno-exe/xeno-exe-md:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
