

import {AJAXURL} from "../commons/URLSchema"

export default {
  /**
   * 获取carts数据
   * @param cb
   */
  getStoryData(cb){
    fetch(AJAXURL).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
