import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { CardModel} from "../models/cardModel";
import { URLS } from "src/const/urls.const";

@Injectable()
export class ListWordsService{

    constructor(private http: HttpClient){ }

    getWords():Observable<CardModel[]>{
        return this.http.get<CardModel[]>(`${URLS.api}listWords`);
    }

}