import Cookie from "js-cookie"

export const state=()=>({
    user:null,
    basket:[]
})

export const mutations={
    saveUser(state,userData){
        this.state.users.user=userData;
    },
    addproducttobasket(state,data){
        this.state.users.basket.push(data);
    }
}

export const actions={
    async addtobasketst({commit},data){
        commit("addproducttobasket",data)
    },
    async createUser({commit},userData){
        try {
            await this.$fire.auth.createUserWithEmailAndPassword(  userData.email, userData.password);
            const{email,uid}=this.$fire.auth.currentUser;

            const token= await this.$fire.auth.currentUser.getIdToken();

            Cookie.set("access_token", token);
            Cookie.set("uid", uid);
            commit("saveUser", {email,uid})

        } catch (error) {
            throw error;
        }
    },
    async signin({commit}, userData){
        try {
            await this.$fire.auth.signInWithEmailAndPassword( userData.email, userData.password);
            const{email,uid}=this.$fire.auth.currentUser;

            const token= await this.$fire.auth.currentUser.getIdToken();

            Cookie.set("access_token", token);
            Cookie.set("uid", uid);
            commit("saveUser", {email,uid})
            
        } catch (error) {
            throw error;
        }
    }
}