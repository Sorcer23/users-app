import { observable, makeObservable, runInAction, action, computed } from 'mobx';
import _ from 'lodash';
import { IUser } from 'src/types';
import { USER_TABLE_CELLS_TO_DISPLAY } from './config';

const USER_TABLE_CELLS_TO_DISPLAY_KEYS = _.map(USER_TABLE_CELLS_TO_DISPLAY, 'key');

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
  @observable filterText: string = '';

  get cellsToDisplay() {
    return USER_TABLE_CELLS_TO_DISPLAY;
  }

  @computed get filteredUsers(): IUser[] {
    if (!this.filterText) return this.users;
    
    return this.users.filter((user) =>
      USER_TABLE_CELLS_TO_DISPLAY_KEYS.some((key) =>
        _.get(user, key).toLocaleLowerCase().includes(this.filterText.toLocaleLowerCase())
      )
    );
  }

  @action fetchUsers = async () => {
    this.isLoading = true;

    const users = await this.apiService.getUsers();

    runInAction(() => {
      this.users = users;
      this.isLoading = false;
    });
  };

  @action changeFilter = (text: string) => {
    this.filterText = text;
  };
}

export { UsersStore };
