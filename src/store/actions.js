import * as types from './types.js'
import axios from '../plugins/axios.js'
let actions={
	[types.UPDATA_HOME]:({state,commit},payload)=>{
		axios({
			url:'/api/goods/home'
		}).then(res=>{
			 commit(types.UPDATA_HOME,res.data.data)
			})
	},
	[types.UPDATA_BANNER]:({state,commit},payload)=>{
		axios({
			url: 'api/goods/banner'
		}).then(res => {
			commit(types.UPDATA_BANNER,res.data.data)
			
		})
	},
	[types.UPDATA_FIND]:({state,commit},payload)=>{
		axios({
			url:'/api/goods/find'
		}).then(res=>{
			commit(types.UPDATA_FIND,res.data.data)
		})
	},
	[types.UPDATA_DETAIL]:({state,commit},payload)=>{
		axios({
			url: `/api/goods/${payload.collname}/${payload.id}`,
		}).then(res => {
			commit(types.UPDATA_DETAIL,res.data.data)
		})
	},
	[types.UPDATA_USER]:({state,commit},payload)=>{}
}
export default actions;