(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3DRW":function(e,t,l){"use strict";l.r(t);var o=l("QbLZ"),a=l.n(o),s=l("L2JU"),r={computed:a()({},Object(s.mapGetters)({nodeList:"saltNodeModule/filterSaltNodeList",pagination:"saltNodeModule/pagination"})),methods:a()({},Object(s.mapActions)({getSaltNodeDetailReq:"saltNodeModule/getSaltNodeDetail"}),{handleEdit:function(e){this.$showModal("updateSaltNode"),this.getSaltNodeDetailReq(e)}})},i=l("KHd+"),d=Object(i.a)(r,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.$isShowLoading("nodeList"),expression:"$isShowLoading('nodeList')"}]},[l("el-table",{attrs:{data:e.nodeList,border:""}},[l("el-table-column",{attrs:{prop:"name",label:"节点名称"}}),e._v(" "),l("el-table-column",{attrs:{prop:"platformId",label:"云平台"}}),e._v(" "),l("el-table-column",{attrs:{prop:"baseUrl",label:"baseUrl"}}),e._v(" "),l("el-table-column",{attrs:{prop:"authType",label:"授权类型"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(l){e.handleEdit(t.row)}}},[e._v("编辑")])]}}])})],1),e._v(" "),l("table-pagination",{attrs:{pagination:e.pagination}})],1)},[],!1,null,null,null).exports,n={data:function(){return{saltNodeForm:{id:"",name:"",baseUrl:"",authType:"",description:"",platformId:"",user:"",password:""},rules:{name:[{required:!0,message:"请输入节点名称",trigger:"blur"}],user:[{required:!0,message:"请输入用户名",trigger:"blur"}]}}},created:function(){this.getSaltNodeListReq(a()({},this.$route.query)),this.getResoucesReq()},computed:a()({},Object(s.mapGetters)({saltNodeDetail:"saltNodeModule/filterSaltNodeDetail",resouces:"projectModule/resouces"}),{title:function(){return this.$isShowModal("updateSaltNode")?"更新节点":"添加节点"},modalIsShow:function(){return this.$isShowModal("addSaltNode")||this.$isShowModal("updateSaltNode")},isUpdate:function(){return this.$isShowModal("updateSaltNode")}}),methods:a()({},Object(s.mapActions)({addOrUpdateSaltNode:"saltNodeModule/addOrUpdateSaltNode",getSaltNodeListReq:"saltNodeModule/getSaltNodeList",getResoucesReq:"projectModule/getResouces"}),{handleClose:function(){this.$refs.saltNodeForm.resetFields(),this.isUpdate?this.$hideModal("updateSaltNode"):this.$hideModal("addSaltNode")},setValue:function(){var e=this.saltNodeDetail,t=e.id,l=e.name,o=e.baseUrl,a=e.authType,s=e.description,r=e.platformId,i=e.saltNodeId;this.saltNodeForm={id:t,name:l,baseUrl:o,authType:a,description:s,platformId:r,saltNodeId:i}},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var l=t.$trim(a()({},t.saltNodeForm));t.isUpdate||delete l.id,t.addOrUpdateSaltNode(l)}})}}),watch:{saltNodeDetail:function(){this.setValue()}}},u=Object(i.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{visible:e.modalIsShow,"before-close":e.handleClose,center:"",title:e.title,width:"30%"},on:{close:e.handleClose}},[l("el-form",{ref:"saltNodeForm",attrs:{model:e.saltNodeForm,rules:e.rules,"label-width":"68px","status-icon":!0}},[l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{prop:"name",label:"名称",size:"small"}},[l("el-input",{attrs:{placeholder:"请输入节点名称",maxlength:50},model:{value:e.saltNodeForm.name,callback:function(t){e.$set(e.saltNodeForm,"name","string"==typeof t?t.trim():t)},expression:"saltNodeForm.name"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{prop:"baseUrl",label:"BaseUrl",size:"small"}},[l("el-input",{attrs:{placeholder:"请输入节点地址",maxlength:50},model:{value:e.saltNodeForm.baseUrl,callback:function(t){e.$set(e.saltNodeForm,"baseUrl","string"==typeof t?t.trim():t)},expression:"saltNodeForm.baseUrl"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{prop:"authType",label:"认证类型",size:"small"}},[l("el-input",{attrs:{placeholder:"请输入认证类型",maxlength:50},model:{value:e.saltNodeForm.authType,callback:function(t){e.$set(e.saltNodeForm,"authType","string"==typeof t?t.trim():t)},expression:"saltNodeForm.authType"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{prop:"platformId",label:"云平台",size:"small"}},[l("el-select",{attrs:{placeholder:"请选择云平台",filterable:""},model:{value:e.saltNodeForm.platformId,callback:function(t){e.$set(e.saltNodeForm,"platformId","string"==typeof t?t.trim():t)},expression:"saltNodeForm.platformId"}},e._l(e.resouces.platforms,function(e){return l("el-option",{key:e,attrs:{value:e,label:e}})}))],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{prop:"user",label:"用户",size:"small"}},[l("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.saltNodeForm.user,callback:function(t){e.$set(e.saltNodeForm,"user","string"==typeof t?t.trim():t)},expression:"saltNodeForm.user"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{prop:"password",label:"密码",size:"small"}},[l("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.saltNodeForm.password,callback:function(t){e.$set(e.saltNodeForm,"password","string"==typeof t?t.trim():t)},expression:"saltNodeForm.password"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{prop:"description",label:"说明",size:"small"}},[l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请填写关于此节点的描述信息"},model:{value:e.saltNodeForm.description,callback:function(t){e.$set(e.saltNodeForm,"description","string"==typeof t?t.trim():t)},expression:"saltNodeForm.description"}})],1)],1)],1)],1),e._v(" "),l("div",{attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{size:"small"},on:{click:e.handleClose}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"small",loading:e.$isShowLoading("nodeAddOrUpdate")},on:{click:function(t){e.submitForm("saltNodeForm")}}},[e._v("确 定")])],1)],1)],1)},[],!1,null,null,null).exports,c={data:function(){return{form:{}}},methods:a()({},Object(s.mapActions)({getSaltNodeListReq:"saltNodeModule/getSaltNodeList"}),{getList:function(){var e=this.$formatSearchData(this.form);this.getSaltNodeListReq(e),this.$router.replace({query:e})}})},m={components:{List:d,Modal:u,Search:Object(i.a)(c,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-card",{staticClass:"query-form",attrs:{shadow:"never"}},[l("el-form",{attrs:{inline:!0,"label-width":"80px",model:e.form,onsubmit:"return false"}},[l("el-form-item",{attrs:{label:"节点ID"}},[l("el-input",{attrs:{placeholder:"请输入节点ID",clearable:""},model:{value:e.form.saltNodeId,callback:function(t){e.$set(e.form,"saltNodeId","string"==typeof t?t.trim():t)},expression:"form.saltNodeId"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(t){e.getList(e.form)}}},[e._v("查询")])],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"info",icon:"el-icon-circle-plus-outline",size:"small"},on:{click:function(t){e.$showModal("addSaltNode")}}},[e._v("新建")])],1)],1)],1)},[],!1,null,null,null).exports},created:function(){this.getNodeList()},computed:{query:function(){return this.$route.query}},methods:a()({},Object(s.mapActions)({getNodeListReq:"saltNodeModule/getSaltNodeList"}),{getNodeList:function(){this.getNodeListReq(this.query)}}),watch:{query:function(){this.getNodeList()}}},p=Object(i.a)(m,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("search"),this._v(" "),t("list"),this._v(" "),t("modal")],1)},[],!1,null,null,null);t.default=p.exports}}]);