
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import News from "views/News.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Pricelist from "./views/Pricelist.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/News",
    name: "News",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: News,
    layout: "/admin",
  },
  {
    path: "/Solutions",
    name: "Solutions",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/Contacts",
    name: "Contacts",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/Pricelist",
    name: "Pricelist",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Pricelist,
    layout: "/admin",
  }
];
export default routes;
