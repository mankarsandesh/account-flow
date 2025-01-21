FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

COPY . /app

# Set environment variables
ENV JWT_SECRET_KEY="sandesh_AAWT_key"

RUN npm install

CMD ["npm", "start"]
