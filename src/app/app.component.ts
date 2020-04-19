import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Pokemon app';

  constructor() {

  }

  ngOnInit() {
  }
}
