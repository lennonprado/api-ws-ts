module.exports = {
  apps : [{
    name: 'app',
    script: './src/app.ts',
    watch: true,
    max_memory_restart: '1000M',
    instances: 1,
    chron_restart: '59 23 * * *',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}