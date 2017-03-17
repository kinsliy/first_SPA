var Vue= require('vue');
var app = require('./app.vue');
// import { Pagination } from 'element-ui';
// import './assets/ele_index.css';
 import resource from 'vue-resource'
Vue.use(resource);
// Vue.component(pages, Pagination);
Vue.http.options.emulateJSON = true;
import table from './components/table.vue';




var vm= new Vue({
	  
	  data:{
         
	  },
	  components:{
	  	 app:app,
	  },
	


}).$mount('#body')