CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
/*nott null = todas as categorias cadastradas vao ter que ter um id/name

unique = id unico, n pode ter 2 categorias com o mesmo id

default = valor que o postgres vai assumir quando a gente nao informar um id pra categoria(no caso sempre)

varchar = string

chaves estrangeiras
*/
CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);

