import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  children_menu: any[];
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    children_menu: ["first1", "second1", "third1", "fodddrth1","first1", "secondddddd1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1","first1", "second1", "third1", "forth1",],
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    children_menu: ["first2", "second2", "third2", "forth2"],
    class: ""
  },
  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    children_menu: ["first3", "second3", "third3", "forth3"],
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    children_menu: ["first4", "second4", "third4", "forth4"],
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    children_menu: ["first5", "second5", "third5", "forth5"],
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    children_menu: ["first6", "second6", "third6", "forth6"],
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    children_menu: ["first7", "second7", "third7", "forth7"],
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    children_menu: ["first8", "second8", "third8", "forth8"],
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
