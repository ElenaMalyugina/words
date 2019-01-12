export class CardModel{
    id: string;
    englishWord: string;
    russianWord: string;
    isHardly: boolean;

    constructor(englishWord, russianWord){
        this.englishWord=englishWord;
        this.russianWord=russianWord;
    }
}

export interface CardResponse{
    count: number;
    card: CardModel;
}