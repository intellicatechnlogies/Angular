import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppSettingService } from '../../../../_services/_appSetting/app-setting.service';
import { defaultTheme } from '../../../../_constants/appSetting.constant';


interface IMenuItem {
  type: string;
  label: string;
  path: string;
  iconSelected?: string;
  icon: string;
  children?: IMenuItem[];
  roles: string[],
  sequence: number
}

@Component({
  selector: 'fin-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {

  activeExpandItem: number[] = [];
  isMenuCollaspsed: boolean = false;
  activeCollapseItem: number = 0;
  theme: string = defaultTheme;

  menuList: IMenuItem[] = [
    {
      type: 'link',
      label: 'Dashboard',
      path: '/main/dashboard',
      icon: '/assets/images/financial.svg',
      iconSelected: '/assets/images/financialSelected.svg',
      roles: ['690'],
      sequence: 1
    },
    {
      type: 'sub',
      label: 'Services',
      path: '',
      iconSelected: '/assets/images/financialSelected.svg',
      icon: '/assets/images/financial.svg',
      roles: [],
      sequence: 2,
      children: [
        {
          label: 'KYC',
          icon: '/assets/images/minus.svg',
          path: '/main/services/kyc',
          type: '',
          roles: [],
          sequence: 1
        },
        {
          label: 'IDR',
          icon: '/assets/images/minus.svg',
          path: '/main/services/idr',
          type: '',
          roles: [],
          sequence: 1
        },
        {
          label: 'Face Compare',
          icon: '/assets/images/minus.svg',
          path: '/main/services/face-compare',
          type: '',
          roles: [],
          sequence: 1
        },
      ]
    },
    {
      type: 'sub',
      label: 'Services History',
      path: '',
      iconSelected: '/assets/images/financialSelected.svg',
      icon: '/assets/images/financial.svg',
      roles: [],
      sequence: 2,
      children: [
        {
          label: 'KYC',
          icon: '/assets/images/minus.svg',
          path: '/main/services/kyc',
          type: '',
          roles: [],
          sequence: 1
        },
        {
          label: 'IDR',
          icon: '/assets/images/minus.svg',
          path: '/main/services/idr',
          type: '',
          roles: [],
          sequence: 1
        },
        {
          label: 'Face Compare',
          icon: '/assets/images/minus.svg',
          path: '/main/services/face-compare',
          type: '',
          roles: [],
          sequence: 1
        },
      ]
    }
  ];

  @Output() toggleMenu = new EventEmitter();

  /**
   * constructor for side menu
   */
  constructor(
    private breakpointObs: BreakpointObserver,
    private appSetting: AppSettingService,
  ) { }

  /**
   * ngOnInit hook
   */
  ngOnInit(): void {
    this.breakpointObs.observe(['(min-width: 900px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isMenuCollaspsed = false;
        this.toggleMenu.emit(this.isMenuCollaspsed);
        this.activeExpandItem = []
      } else {
        this.isMenuCollaspsed = true;
        this.toggleMenu.emit(this.isMenuCollaspsed);
        this.activeExpandItem = []
      }
    });

    this.appSetting.appTheme$.subscribe(theme => {
      this.theme = theme;
    });

  }

  /**
   * Fire on open expansion panel
   * @param itemId 
   */
  onOpenMenu(itemId: number) {
    this.activeExpandItem.push(itemId);
    this.activeCollapseItem = itemId;
  }

  /**
   * Fire on close expansion panel
   * @param itemid 
   */
  onCloseMenu(itemId: number) {
    const index = this.activeExpandItem.indexOf(itemId);
    if (index > -1) {
      this.activeExpandItem.splice(index, 1);
    }
  }
}
