import { Component, OnInit } from '@angular/core';
import {CONSTANTS} from '../../../../constants';
import {INavItem} from '../../../models/nav-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navItems: INavItem[] = [
    {
      display: 'Currency converter',
      path: CONSTANTS.ROUTES.CURRENCY_CONVERTER.BASE,
      iconClass: 'bi-currency-exchange'
    },
    {
      display: 'History',
      path: CONSTANTS.ROUTES.CURRENCY_CONVERTS_HISTORY.BASE,
      iconClass: 'bi-clock-history'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
