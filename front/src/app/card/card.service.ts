import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { CardModel} from "../models/cardModel";
import { URLS } from "src/const/urls.const";

@Injectable()
export class CardService{
    public showRussian: boolean;
    public onlyHardly: boolean;

    constructor(private http: HttpClient){ }

    public getCardsLength():Observable<{count: number}>{
        return this.http.get<{count: number}>(`${URLS.api}card/count?onlyHardly=${this.onlyHardly}`);
    }
    
    public getCardData(id): Observable<CardModel> {
        return this.http.get<CardModel>(`${URLS.api}card?id=${id}&onlyHardly=${this.onlyHardly}`);
    }

    public postCardData(newWord):Observable<CardModel>{
        return this.http.post<CardModel>(`${URLS.api}card`, newWord);
    }

    //продумать ответ с сервера
    public updateCardData(changeWord):Observable<{text: string}>{
        return this.http.put<{text: string}>(`${URLS.api}card`, changeWord);
    }

    public setHardly(card):Observable<{text: string}>{
        return this.http.put<{text: string}>(`${URLS.api}card/setHardly`, card );
    }
}