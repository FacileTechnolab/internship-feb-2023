import { Component, Injectable  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
     isLoading: boolean = false;

    show() {
      this.isLoading = true;
    }

    hide() {
      this.isLoading = false;
    }
}
