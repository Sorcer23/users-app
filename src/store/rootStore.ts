import { apiService } from 'src/services/api/api.service';
import { UsersStore } from './users/users.store';

export class RootStore {
  usersStore: UsersStore;

  constructor() {
    this.usersStore = new UsersStore(apiService);
  }
}
