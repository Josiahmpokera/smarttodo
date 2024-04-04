import { Component } from '@angular/core';
import {liveQuery} from "dexie";
import {db} from "../../../service/service.service";

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent {

  todos = liveQuery(() => db.todos.toArray());

}
