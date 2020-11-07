import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Question } from './question';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsService
{
  questionsCount = 0;

  incrementQuestionsCount()
  {
    this.questionsCount += 5;
  }

  constructor(@Inject(HttpClient) private http : HttpClient)
  {
  }

  public getQuestions(): Observable<Question[]>
  { 
    return this.http.get<Question[]>("/getlatestquestions", { responseType: "json" });
    //return this.http.get<Question[]>("/somewrong", { responseType: "json" });
    //return this.http.get<Question[]>("/QuestionsServlet", { responseType: "json" });
  }

  public getQuestionsById(_id: number): Observable<Question>
  { 
    return this.http.get<Question>("/getquestionbyquestionid?_id=" + _id, { responseType: "json" });
  }
}


