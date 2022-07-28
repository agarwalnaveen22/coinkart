import {observable, action, makeObservable} from 'mobx';
import Constants from '../../constants';

export type CoinDataType = {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
};

class CoinsListStore {
  coins: CoinDataType[] = [];
  filteredCoins: CoinDataType[] = [];

  constructor() {
    makeObservable(this, {
      coins: observable,
      filteredCoins: observable,
      fetchCoins: action,
      setCoins: action,
      filterCoins: action,
    });
  }

  fetchCoins = () => {
    fetch(Constants.API_END_POINT)
      .then(response => response.json())
      .then(data => this.setCoins(data.data));
  };

  filterCoins = (text: string) => {
    this.filteredCoins = this.coins.filter(
      (obj: CoinDataType) =>
        obj.name.toLowerCase().includes(text.toLowerCase()) ||
        obj.symbol.toLowerCase().includes(text.toLowerCase()),
    );
  };

  setCoins = (data: CoinDataType) => {
    this.coins = data;
  };
}

export default CoinsListStore;
