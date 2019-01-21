
import {AJAXURLBanner} from "../commons/URLSchema"

export default {
  /**
   * 获取banner数据
   * @param cb
   */
  getBannerData(cb){
    fetch(AJAXURLBanner).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
