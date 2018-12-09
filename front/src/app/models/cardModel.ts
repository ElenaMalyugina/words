export class CardModel{
    id: string;
    englishWord: string;
    russianWord: string;
}

export interface CardResponse{
    count: number;
    card: CardModel;
}