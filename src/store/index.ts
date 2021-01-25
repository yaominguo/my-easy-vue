import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

interface libraryMenuProps {
  key: string
  name: string
  icon: string
  list: string
}
export interface GlobalStateProps {
  showLoading: boolean
  libraryMenu: Array<libraryMenuProps>
}
export default createStore<GlobalStateProps>({
  state,
  mutations,
  actions,
})
