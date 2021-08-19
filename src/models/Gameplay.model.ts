export const cardsValue: any = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 14,
};

class GameplayModel {
  static compareCards(playerCardVal: string, opponentCardVal: string) {
    const values = {
      player: cardsValue[playerCardVal],
      opponent: cardsValue[opponentCardVal],
    };

    if (!values.player || !values.opponent) throw new Error('Incorrect format of cards value');

    if (values.player > values.opponent) return { winner: 'player', status: 'win' };
    if (values.player < values.opponent) return { winner: 'opponent', status: 'lose' };
    return { winner: '', status: 'draw' };
  }
}

export default GameplayModel;
