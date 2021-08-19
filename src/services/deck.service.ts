import BaseService from 'services/base.service';

export interface DeckServiceInterface {
  deckHost: string;
  newDeck: Function;
  shuffleCards: Function;
  drawCard: Function;
}

class DeckService extends BaseService {
  deckHost: string = 'https://deckofcardsapi.com/api/deck';

  newDeck() {
    return this.getRequest(`${this.deckHost}/new`);
  }

  shuffleCards(deckId: string) {
    return this.getRequest(`${this.deckHost}/${deckId}/shuffle/`);
  }

  drawCard(deckId: string, count: number) {
    return this.getRequest(`${this.deckHost}/${deckId}/draw/?count=${count}`);
  }
}

export default DeckService;
