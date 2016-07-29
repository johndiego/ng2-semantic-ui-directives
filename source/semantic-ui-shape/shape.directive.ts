// HOW TO USE:
/*

.ui.segment(style='height: 100px')
  #shape1.ui.shape
    .sides
      .side.active
        h1 Side 1      
      .side
        h1 Side 2   

  
.ui.button(ui-shape [options]="{selector: '#shape1', animation: 'flip left'}")
  | Come at me bro
  i.right.arrow.icon

*/

declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-shape]',
  host: {
    '(click)':      'onClick()'
  }
})
export class uiSemanticShape {
  @Input('options') options:any

  onClick(){
    var i = this;

    if(i.options == undefined){
      i.options = {selector: '.shape', animation: 'flip up'}
    }
    else{
      if(i.options.selector == undefined){
        i.options.selector = '.shape'
      }
      if(i.options.selector == undefined){
        i.options.animation = '.flip up'
      }
    }
    $(i.options.selector).shape(i.options.animation)
  }

}
