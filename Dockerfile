FROM node:19

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server.js"]