const { Pool } = require('pg');

class Database {
  constructor() {
    if (!Database.instance) {
      this.pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'parch',
        password: '11223344',
        port: 5432, // Default PostgreSQL port
      });

      this.pool.connect((err) => {
        if (err) {
          console.error('Error connecting to database:', err.stack);
        } else {
          console.log('Connected to database');
        }
      });
      Database.instance = this;
    }
    return Database.instance;
  }

  query(text, params) {
    return this.pool.query(text, params);
  }
}

const instance = new Database();
module.exports = instance;
