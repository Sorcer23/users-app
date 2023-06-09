import { RootStoreContext } from 'src/context/root-store/root-store.context';
import { RootStore } from 'src/store/rootStore';
import { UsersView } from 'src/views/Users';

const App = () => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <UsersView />;
    </RootStoreContext.Provider>
  );
};

export { App };
