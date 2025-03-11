FROM node:20

WORKDIR /app
COPY package*.json ./
RUN chown -R node:node /app
USER node
RUN npm install --omit=dev
COPY --chown=node:node . .
EXPOSE 5000

CMD ["npm", "run", "start"]
