import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

@Input() gameCover:string=""
@Input() gameType:string =""
@Input() gamePrice:string =""
@Input() gameLabel:string=""

}
