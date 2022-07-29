import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as $ from "jquery";
import { HelperShoppingService } from '../../shared/services/helperShopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("myNameElem") myNameElem: ElementRef | undefined;

  // editMessage: string = "";
  constructor() { }
  ngOnInit() {

  }
  // scrollNavbar() {
  //   var o = $("#menu");
  //   $(window).scroll(function () {
  //     $(this).scrollTop() > 50 ? o.addClass("imagenScrollSize") : o.removeClass("imagenScrollSize")
  //   }) }
  // @HostListener('document:keyup', ['$event'])
  // (ev:Scroll) {
  //   console.log(`The user just pressed ${ev.key}!`);
  //  }

}
