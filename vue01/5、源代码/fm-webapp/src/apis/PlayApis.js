
import {AJAXURLPlay} from "../commons/URLSchema"

export default {
  /**
   * 获取banner数据
   * @param cb
   */
  getPlayData(cb){

    fetch(AJAXURLPlay).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
