module.exports={
    publicPath:"./",
    devServer:{
        open:true,
        proxy:{
            "/api":{
                target:"http://www.weather.com.cn/",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }

            }
        }
    }
}