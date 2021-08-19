import { DeckService } from 'services';
import { DeckServiceInterface } from 'services/deck.service';

class DeckRepository {
  deckService: DeckServiceInterface;

  constructor() {
    this.deckService = new DeckService();
  }

  newDeck() {
    return this.deckService.newDeck();
  }

  shuffleCards(deckId: string) {
    return this.deckService.shuffleCards(deckId);
  }

  drawCard(deckId: string, count: number) {
    return this.deckService.drawCard(deckId, count);
  }
}

export default DeckRepository;
