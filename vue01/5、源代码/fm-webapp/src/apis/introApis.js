
import {AJAXURLIntro} from "../commons/URLSchema"

export default {
  /**
   * 获取banner数据
   * @param cb
   */
  getIntroData(cb){

    fetch(AJAXURLIntro).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
