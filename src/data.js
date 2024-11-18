import { ChevronRight } from "lucide-react";
import { images } from "./constants";

export const CustomerListData = [
  {
    id: 1,
    image: images.customerImage_1,
    name: "Ana Black",
    email: "ana@gmail.com",
  },
  {
    id: 2,
    image: images.customerImage_2,
    name: "George Litz",
    email: "georgelitz@gmail.com",
  },
  {
    id: 3,
    image: images.customerImage_3,
    name: "John Miller",
    email: "jmiller@gmail.com",
  },
  {
    id: 4,
    image: images.customerImage_4,
    name: "Jane Johnson",
    email: "jj@gmail.com",
  },
  {
    id: 5,
    image: images.customerImage_5,
    name: "Mezei Agnes",
    email: "fefekartika@gmail.com",
  },
  {
    id: 6,
    image: images.customerImage_6,
    name: "Katona Beatrix",
    email: "edobram@gmail.com",
  },
  {
    id: 7,
    image: images.customerImage_7,
    name: "Halasz Emese",
    email: "jiioputri@yahoo.com",
  },
];

export const MenuData = [
  {
    id: 1,
    image: images.Menu_3,
    name: "BBQ Rib Dinner",
    amount: "$69.21",
    served: 456 + " " + "Served",
  },
  {
    id: 2,
    image: images.Menu_4,
    name: "Chicken & Ribs Combo",
    amount: "$98.49",
    served: 456 + " " + "Served",
  },
  {
    id: 3,
    image: images.Menu_5,
    name: "Fried Chicken Dinne",
    amount: "$83.56",
    served: 456 + " " + "Served",
  },
  {
    id: 4,
    image: images.Menu_6,
    name: "Dark & Stormy",
    amount: "$90.58",
    served: 456 + " " + "Served",
  },
];

export const sidebarData = [
  {
    id: 1,
    icon: images.Dashboard,
    name: "Dashboard",
  },
  {
    id: 2,
    icon: images.Orders,
    ordersIcon: <ChevronRight />,
    name: "Orders",
  },
  {
    id: 3,
    icon: images.Analytics,
    name: "Analytics",
  },
  {
    id: 4,
    icon: images.Customer,
    name: "Customer",
  },
  {
    id: 5,
    icon: images.Menu,
    name: "Menu",
  },
];

export const heroData = [
  {
    id: 1,
    icon: images.heroIcon_1,
    title: "Total Menu",
    number: 345,
  },
  {
    id: 2,
    icon: images.heroIcon_2,
    title: "Total Revenue",
    number: "$37,193.00",
  },
  {
    id: 3,
    icon: images.heroIcon_3,
    title: "Total Customer",
    number: "1,349",
  },
  {
    id: 4,
    icon: images.heroIcon_4,
    title: "Total Orders",
    number: "3,500",
  },
];
