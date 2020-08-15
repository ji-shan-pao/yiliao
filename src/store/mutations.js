import * as types from './types.js'
let mutations = {
	 [types.UPDATA_HOME]:(state,payload)=>state.home=payload,
	 [types.UPDATA_BANNER]:(state,payload)=>state.banner=payload,
	 [types.UPDATA_FIND]:(state,payload)=>state.find=payload,
	 [types.UPDATA_DETAIL]:(state,payload)=>state.detail=payload,
	 [types.UPDATA_USER]:(state,payload)=>{
		 state.user={...state.user,...payload}
	 }
	 }
export default mutations;
