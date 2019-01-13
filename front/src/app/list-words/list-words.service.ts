import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { CardModel, CardResponse } from "../models/cardModel";

@Injectable()
export class ListWordsService{

    constructor(private http: HttpClient){ }

    getWords(){
        return this.http.get('http://localhost:3000/listWords');
    }

}