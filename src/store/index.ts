import CoinsListStore from './CoinsListStore';
import CoinsCartStore from './CoinsCartStore';

export class RootStore {
  coinsListStore: CoinsListStore;
  coinsCartStore: CoinsCartStore;

  constructor() {
    this.coinsListStore = new CoinsListStore();
    this.coinsCartStore = new CoinsCartStore();
  }
}
