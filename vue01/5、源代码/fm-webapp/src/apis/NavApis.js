
import {AJAXURLNavlist} from "../commons/URLSchema"

export default {
  /**
   * 获取banner数据
   * @param cb
   */
  getNavlistData(cb){

    fetch(AJAXURLNavlist).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
