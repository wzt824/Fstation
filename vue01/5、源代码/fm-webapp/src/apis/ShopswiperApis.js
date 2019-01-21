
import {AJAXURLShopswiper} from "../commons/URLSchema"

export default {
  /**
   * 获取banner数据
   * @param cb
   */
  getShopswiperData(cb){

    fetch(AJAXURLShopswiper).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
