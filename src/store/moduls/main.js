import getlink from "@/apis/getlink"
let main = {
    state:{
        icons:[]
    },
    mutations:{
        loadicons(state,payload){
            state.icons = payload
        }
    },
    actions:{
        geticon(context,payload){
             getlink(payload.url).then((ok)=>{
                 context.commit("loadicons",ok.data.data)
             })
        }
    },
    getters:{

    }
}
export default main