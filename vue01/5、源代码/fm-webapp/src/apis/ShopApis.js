
import {AJAXURLShopcarts} from "../commons/URLSchema"

export default {
  /**
   * 获取banner数据
   * @param cb
   */
  getShopcartsData(cb){

    fetch(AJAXURLShopcarts).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
