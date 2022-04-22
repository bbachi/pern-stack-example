const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

/*

HOST=localhost
USER=bhargavbachina
DB=bhargavbachina
DIALECT=postgres
PORT=3080

*/

let ENVIRONMENT_VARIABLES = {
  'process.env.HOST': JSON.stringify('localhost'),
  'process.env.USER': JSON.stringify('bhargavbachina'),
  'process.env.DB': JSON.stringify('bhargavbachina'),
  'process.env.DIALECT': JSON.stringify('postgres'),
  'process.env.PORT': JSON.stringify('3080'),
  'process.env.PG_CONNECTION_STR': JSON.stringify("postgres://bhargavbachina:''@localhost:5432/bhargavbachina")
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.HOST': JSON.stringify('localhost'),
    'process.env.USER': JSON.stringify('bhargavbachina'),
    'process.env.DB': JSON.stringify('bhargavbachina'),
    'process.env.DIALECT': JSON.stringify('postgres'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.PG_CONNECTION_STR': JSON.stringify("postgres://bhargavbachina:''@localhost:5432/bhargavbachina")
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.HOST': JSON.stringify('localhost'),
    'process.env.USER': JSON.stringify('bhargavbachina'),
    'process.env.DB': JSON.stringify('bhargavbachina'),
    'process.env.DIALECT': JSON.stringify('postgres'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.PG_CONNECTION_STR': JSON.stringify("postgres://pgadmin@webappdemopostgre:Tester@123@webappdemopostgre.postgres.database.azure.com:5432/tasks")
  };
}

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
    libraryTarget: 'commonjs'
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ],
  //externals: ['pg', 'pg-hstore']
  externals: [
    { pg: { commonjs: ['pg'] } },
    { 'pg-hstore': { commonjs: ['pg-hstore'] } }
  ],
};