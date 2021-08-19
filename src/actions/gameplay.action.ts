import BaseActions from 'actions/base.action';
import { GameplayModel } from 'models';
import { DeckRepository } from 'repositories';

export const gameplayTypes = {
  SETSTATE: 'GAMEPLAY_SETSTATE',
  SETLOADING: 'GAMEPLAY_SETLOADING',
  PLAYERTURN: 'GAMEPLAY_PLAYERTURN',
  OPPONENTTURN: 'GAMEPLAY_OPPONENTTURN',
};

class GameplayActions extends BaseActions {
  types: any;

  constructor() {
    super();
    this.types = gameplayTypes;
  }

  doInitGame() {
    return async (dispatch: any, getState: any) => {
      const deckRepo = new DeckRepository();
      const { gameplay } = getState();

      // Request new deck
      dispatch(this.doSetLoading({ initGame: 'loading' }));
      let deck = await deckRepo.newDeck();

      // Shuffle deck
      await deckRepo.shuffleCards(deck.deck_id);

      // Draw card
      deck = await deckRepo.drawCard(deck.deck_id, 2);

      dispatch(this.doSetLoading({ initGame: 'success' }));

      dispatch(
        this.doSetState({
          deckId: deck.deck_id,
          remaining: deck.remaining,
          status: 'playing',
          turn: 'player',
          winner: '',
          player: {
            ...gameplay.player,
            currentCard: deck.cards[0],
          },
          opponent: {
            ...gameplay.opponent,
            currentCard: deck.cards[1],
          },
        }),
      );
    };
  }

  doOpenCard() {
    return async (dispatch: any, getState: any) => {
      const { gameplay } = getState();
      const { player, opponent } = gameplay;

      const { winner } = GameplayModel.compareCards(player?.currentCard?.value, opponent?.currentCard?.value);

      let score = 0;
      if (winner === 'opponent') score = opponent.score + 1;
      if (winner === 'player') score = player.score + 1;

      dispatch(this.doSetState({ status: 'finish', winner, [winner]: { ...gameplay[winner], score } }));
    };
  }

  doDrawMoreCard() {
    return async (dispatch: any, getState: any) => {
      dispatch(this.doSetState({ status: 'playing' }));
      dispatch(this.doSetLoading({ drawCard: 'loading' }));
      setTimeout(() => {
        dispatch(this.doSetLoading({ drawCard: 'success' }));
      }, 3000);
    };
  }
}

export default GameplayActions;
