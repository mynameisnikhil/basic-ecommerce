import { AppleData } from "./laptopData/AppleData.js";
import { DellData } from "./laptopData/DellData.js";
import { LenovoData } from "./laptopData/LenovoData.js";
import { MiData } from "./mobileData/MiData.js";
import { RealmeData } from "./mobileData/RealmeData.js";

let allTitles = []
const dataList = [AppleData, DellData, LenovoData, MiData, RealmeData];

const titleList = x => {
    x.map(item => {
        item.map(e => allTitles.push(e.title))
    })
}

titleList(dataList)

export default allTitles