/*const assert = require('assert');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('The "majors_courses" table', () => {
  it('should have the correct row added', async () => {
    const query = `SELECT * FROM majors_courses`;

    try {
      await client.connect();
      const res = await client.query(query);   

      assert(res.rowCount > 0);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});*/
