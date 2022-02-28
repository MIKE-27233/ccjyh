import service from "@/utils/serve.js"

// 开始封装数据请求
function getlink(url){
   return new Promise((resolve,reject)=>{
    //    开始写你的数据请求
        service.request({
            url,
            method:"GET"
        }).then((ok)=>{
            resolve(ok)
        }).catch((err)=>{
            reject(err)
        })
   })
}


export default getlink