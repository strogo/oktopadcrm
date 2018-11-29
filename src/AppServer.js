import { makeEntitiesFromStructures, use } from 'katejs';
import AppService from 'katejs-service/lib/AppServer';
import { structures, title, packageName } from './structure';

const AppServer = parent => class Server extends use(parent, AppService) {
  constructor(params) {
    super(params);
    this.title = title; // название приложения
    this.databaseParams = { // параметры СУБД
      host: '127.0.0.1',
      database: 'testdb',
      username: 'root',
      password: '',
    };
    this.httpParams = { // параметры http сервера
      port: 2000,
    };
    makeEntitiesFromStructures(this.entities, structures);
    this.setAuthParams({ jwtSecret: 'default' });
  }
};
AppServer.package = packageName;
export default AppServer;
