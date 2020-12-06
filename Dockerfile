
from node:alpine as builder

# Create app directory
WORKDIR /build

# Create appuser.
ENV USER=appuser
ENV UID=10001 
# See https://stackoverflow.com/a/55757473/12429735RUN 
RUN adduser \    
    --disabled-password \    
    --gecos "" \    
    --home "/nonexistent" \    
    --shell "/sbin/nologin" \    
    --no-create-home \    
    --uid "${UID}" \    
    "${USER}"

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

ENV NODE_ENV=production
RUN npm install --no-optional && npm cache clean --force
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN npm prune --production

### build runtime image #### 
FROM node:alpine

COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group

WORKDIR /app

# COPY --from=builder /build/dist /app/dist
COPY --from=builder /build/node_modules /app/node-modules
COPY --from=builder /build/. /app/.

# Use an unprivileged user.
USER appuser:appuser
EXPOSE 3000

CMD ["node", "src/server.js"]
