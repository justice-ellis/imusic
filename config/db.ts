import { db_host, db_port, db_name, db_user, db_password } from './config';
import { Sequelize } from 'sequelize';

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
const sequelize = new Sequelize('postgres://kssedoqqiyvxpe:7bbb52724c76273522a318be897abb2fbb0a97a6269abbe7adaffb5625efbcbd@ec2-54-204-56-171.compute-1.amazonaws.com:5432/db5mnv0a5g893u') // Example for postgres

 export default new Sequelize({
  dialect: "postgres",
  host: db_host,
  port: db_port,
  database: db_name,
  username: db_user,
  password: db_password
});