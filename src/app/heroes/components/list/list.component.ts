import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public nameHeroes: string[] = ['Thor', 'Ironman', 'Spiderma', 'Hulk', 'She Hulk'];
  public deletedHero?: string;

  removeLastHeroe():void {
    this.deletedHero = this.nameHeroes.pop();
  }
}
