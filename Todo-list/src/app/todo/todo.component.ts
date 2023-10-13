import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  Values: Array<any> = [];
  Click(value: string) {
    if (value == '') {
      console.log('false');
    } else {
      this.Values.push(value);
    }
  }
  del(value: string) {
    const index = this.Values.indexOf(value);
    if (index !== -1) {
      this.Values.splice(index, 1);
    }
  }
}
