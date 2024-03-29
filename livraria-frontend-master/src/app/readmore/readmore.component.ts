
import { Component, Input, ElementRef, AfterViewInit, OnInit } from '@angular/core';


@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css'],
  template: `
  <div [innerHTML]="text" [class.collapsed]="isCollapsed" [style.height]="isCollapsed ? maxHeight+'px' : 'auto'">
  </div>
      <a style = "color: #008CBA;" *ngIf="isCollapsable" (click)="isCollapsed =! isCollapsed">Leia {{isCollapsed? 'Mais':'Menos'}}</a>
`,
styles: [`
  div.collapsed {
      overflow: hidden;
  }
`]
})
export class ReadmoreComponent implements OnInit{

 
    //the text that need to be put in the container
    @Input() text: string;

    //maximum height of the container
    @Input() maxHeight: number = 100;

    //set these to false to get the height of the expended container 
    public isCollapsed: boolean = false;
    public isCollapsable: boolean = false;

    constructor(private elementRef: ElementRef) {
    }

   ngOnInit() {
        let currentHeight = this.elementRef.nativeElement.getElementsByTagName('div')[0].offsetHeight;
       //collapsable only if the contents make container exceed the max height
        // if (currentHeight > this.maxHeight) {
            this.isCollapsed = true;
            this.isCollapsable = true;
        // }
    }
}