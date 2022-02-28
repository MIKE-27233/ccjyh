import getlink from "@/apis/getlink"
let vipicons = {
    state:{
        icons:[]
    },
    mutations:{
        loadicons(state,payload){
            state.icons = payload
        }
    },
    actions:{
        vipicons(context,payload){
            console.log(context);
             getlink(payload.url).then((ok)=>{
                 context.commit("loadicons",ok.data.data)
                 console.log(context.state.icons);
             })
        }
    },
    getters:{

    }
}
export default vipicons