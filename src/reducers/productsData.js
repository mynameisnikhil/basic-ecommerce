import {AppleData} from './data/laptopData/AppleData.js'
import { DellData } from "./data/laptopData/DellData.js";
import { LenovoData } from "./data/laptopData/LenovoData.js";
import {MiData} from "./data/mobileData/MiData.js";
import { RealmeData } from "./data/mobileData/RealmeData.js";



const initialData =  {
  Mobile : {
    Realme : RealmeData,
    Mi  : MiData
  },
  Laptop : {
    Dell : DellData,
    Lenovo : LenovoData,
    Apple : AppleData

  }
}


export const productsData = (state = initialData, action) => {
    switch (action.type) {
      case "ACTION_TYPE":
        return;
      default:
        return state;
    }
}

