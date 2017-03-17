<template>
	<div  class='body'>
	    <div>
	    	 <span :class='{"index":item.flag}' class='default' v-for='item in tabs' @click='tab_change(item)'>{{item.title}}</span>
	    </div>

		 <div>
		 	<table1 :itemTable='item' :pageTab='tab' :pag='page' v-on:table='apply' v-on:pageTable='page_table'></table1>
		 </div>
	   

	</div>
   
</template>

<script>

import table from './components/table.vue';
	export default{
		  data(){
		  	 return {
                 tabs:[
                   {title:'申请受理',flag:true,tab:1,},
                   
                   {title:'上会确认',flag:false,tab:2,},
                   {title:'应收应付',flag:false,tab:3,},
                   {title:'财务打款',flag:false,tab:4,},
                  ],
                  item:{
                     id:'1',
                     data:'',
                  },
                  page:'',
                  tab:'',

		  	 }
		  },
      mounted(){
         this.$http.get('/ym/easyAdmin/theme/ApplyHandle').then( res=>{
                                this.item.data= res.data.data;
                                this.page=res.data.total;
                                this.tab=1;
                                }
                           )
              
      },
		  components:{
		  	 table1:table,
		  },
		  methods:{
        page_table(data){
            this.item.data=data;
        },
        apply(tab,page){
           console.log(page);
           if(tab===1){
              
               this.$http.get('/ym/easyAdmin/theme/ApplyHandle?page='+page).then(
                               res=>{
                               
                                this.item.data= res.data.data;
                                this.item.id='1';
                                this.page=res.data.total;
                                this.tab=1;
                              }
                        
                           )
                      }else if(tab===2){
                         this.$http.get('/ym/easyAdmin/theme/affirmList?page='+page).then(res=>{
                           console.log(res);
                            this.item.data=res.data.data;
                            this.item.id='2';
                            this.page=res.data.total;
                            this.tab=2;
                         })
                      }else if(tab===4){
                         this.$http.get('/ym/easyAdmin/theme/Withdrawals?page='+page).then(res=>{
                           console.log(res);
                            this.item.data=res.data.data;
                            this.item.id='4';
                            this.page=res.data.total;
                            this.tab=4;
                         })
                      }else if(tab===3){
                          this.$http.get('/ym/easyAdmin/theme/Yinshou?page='+page).then(res=>{
                           console.log(res);
                            this.item.data=res.data.data;
                            this.item.id='3';
                            this.page=res.data.total;
                            this.tab=3;
                         })
                      }





        },
		  	tab_change(item){
                      this.tabs.map(function(index){
                            index.flag=false;
                         })
                         item.flag=true;
                      if(item.tab===1){
                           
                           this.$http.get('/ym/easyAdmin/theme/ApplyHandle').then(
                               res=>{
                               
                                this.item.data= res.data.data;
                                this.item.id='1';
                               this.page=res.data.total;
                               this.tab=1;

                              }
                        
                           )
                      }else if(item.tab===2){
                         this.$http.get('/ym/easyAdmin/theme/affirmList').then(res=>{
                           console.log(res);
                            this.item.data=res.data.data;
                            this.item.id='2';
                            this.page=res.data.total;
                            this.tab=2;
                         })
                      }else if(item.tab===4){
                          this.$http.get('/ym/easyAdmin/theme/Withdrawals').then(res=>{
                           console.log(res);
                            this.item.data=res.data.data;
                            this.item.id='4';
                            this.page=res.data.total;
                            this.tab=4;

                         })
                      }else if(item.tab===3){
                         this.$http.get('/ym/easyAdmin/theme/Yinshou').then(res=>{
                           console.log(res);
                            this.item.data=res.data.data;
                            this.item.id='3';
                            this.page=res.data.total;
                            this.tab=3;
                         })
                      }

                         
		     },

		  }

		 

	}



</script>

<style scoped lang='less'>
	.body{
		width: 100%;
		height: auto;
    margin-bottom: 50px;
       >div:nth-child(1){
       	 width: 1000px;
       	 height: 50px;
       	 margin: 0 auto;
       	 display: flex;
       	 justify-content: center;
       	 margin-bottom: 20px;
       	 span{
            width: 140px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
       	 }
       	 span.index{
       	 	 background-color: red;
       	 	 color: white;
       	 }
       }
	}
    

</style>