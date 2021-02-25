import { createConnection } from 'typeorm';

import config from './config/ormconfig';

export const dbCreateConnection = async () => {
  try {
    const conn = await createConnection(config);
    console.log(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
  } catch (err) {
    console.log(err);
  }
};
