
import {AJAXURLListen} from "../commons/URLSchema"

export default {
  /**
   * 获取carts数据
   * @param cb
   */
  getListenData(cb){

    fetch(AJAXURLListen).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
