// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { burgers, side, drinks, desserts, S3object } = initSchema(schema);

export {
  burgers,
  side,
  drinks,
  desserts,
  S3object
};