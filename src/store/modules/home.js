import {api, request} from '../../ajax'
const state = {
  //商品总数
  total : 0,
}
const mutations = {
  setTotal(state,param){
    state.param = param
  }
}
const actions = {
  async getTotalAction(context){
    let result = await request.get(api.GOODS_TOTAL_API)
    let total = result.data.data.total
    context.commit('setTotal',total)
  }

}
const getters = {


}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
