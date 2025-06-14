import { defineStore } from "pinia"

export const useUserStore = defineStore('user', {
    state: () => ({
        isLogin: false,
        user: null as null | { name: string, email: string }
    }),
    actions: {
        login(userData: { name: string, email: string }){
            this.isLogin = true
            this.user = userData
        },
        logout(){
            this.isLogin = false
            this.user = null
        }
    }
})