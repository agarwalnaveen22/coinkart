import {observable, action, makeObservable} from 'mobx';
import {CoinDataType} from '../CoinsListStore';

export type CoinCartDataType = CoinDataType & {quantity: number};

class CoinsCartStore {
  cart: CoinCartDataType[] = [];

  constructor() {
    makeObservable(this, {
      cart: observable,
      setCart: action,
      removeCart: action,
    });
  }

  setCart = (data: CoinCartDataType) => {
    const index = this.cart.findIndex(cart => cart.id === data.id);
    if (index === -1) {
      this.cart.push(data);
    } else {
      this.cart[index].quantity += data.quantity;
    }
  };

  removeCart = (id: CoinCartDataType['id']) => {
    this.cart = this.cart.filter(data => data.id !== id);
  };
}

export default CoinsCartStore;
