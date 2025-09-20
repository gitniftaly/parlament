module.exports = {
  apps: [
    {
      name: "json-server",
      script: "npx",
      args: "json-server --watch /var/www/nextjs/parlament/todos.json --port 3001 --host 0.0.0.0",
      interpreter: "none", // so pm2 runs npx directly
      watch: false
    }
  ]
}











