import { observable, makeObservable, runInAction, action, computed } from 'mobx';
import { IUser } from 'src/types';
import { USER_TABLE_CELLS_TO_DISPLAY } from './config';

interface IApiService {
  getUsers: () => Promise<IUser[]>;
}

class UsersStore {
  constructor(apiService: IApiService) {
    this.apiService = apiService;
    makeObservable(this);
  }

  private apiService: IApiService;

  @observable users: IUser[] = [];
  @observable isLoading: boolean = true;

  @computed get filteredUsers(): IUser[] {
    return this.users;
  }

  @action fetchUsers = async () => {
    this.isLoading = true;

    const users = await this.apiService.getUsers();

    runInAction(() => {
      this.users = users;
      this.isLoading = false;
    });
  };

  get cellsToDisplay() {
    return USER_TABLE_CELLS_TO_DISPLAY;
  }
}

export { UsersStore };
