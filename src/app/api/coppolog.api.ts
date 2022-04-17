import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CoppologApi {
  constructor(private http: HttpClient) {
  }

  // The url for the api that returns log based on an id.
  coppoUrl = "";

  // Returns a log based on the given Id.
  GetCoppoLogById(id: number){
    return null;
  }
}
