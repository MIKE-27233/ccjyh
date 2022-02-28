import getlink from "@/apis/getlink"
let homegrid = {
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
export default homegrid