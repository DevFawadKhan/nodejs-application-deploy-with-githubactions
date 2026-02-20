FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (better layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy application code
COPY . .

# Expose app port
EXPOSE 8080

# Start application
CMD ["node", "index.js"]