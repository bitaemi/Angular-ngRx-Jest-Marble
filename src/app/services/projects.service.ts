import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Observer, Subject, BehaviorSubject } from 'rxjs';
import { Project } from './../models/project';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService
{
  public MySubject: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient)
  {
    this.MySubject = new BehaviorSubject<boolean>(false);
  }

  toggleDetails()
  {
    this.MySubject.next(!this.MySubject.value);
  }

  getAllProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/projects", { responseType: "json" })
      .pipe(map(
        (data: Project[]) =>
        {
          for (let i = 0; i < data.length; i++)
          {
            //data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        }
      ));
  }

  getProjectByProjectID(ProjectID: number): Observable<Project>
  {
    return this.httpClient.get<Project>("/api/projects/searchbyprojectid/" + ProjectID, { responseType: "json" });
  }

  insertProject(newProject: Project): Observable<Project>
  {
    var requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage.XSRFRequestToken);
    return this.httpClient.post<Project>("/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
  }

  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>("/api/projects", existingProject, { responseType: "json" });
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>("/api/projects?ProjectID=" + ProjectID);
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
  }
}



