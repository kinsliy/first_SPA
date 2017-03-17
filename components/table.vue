<template>

	<div class='table_body'>
   	     
        <table class='table table-bordered'>
           
        	<tr class='bg-info'>
        	 <th v-for='item in ths[itemTable.id]'>
        		{{item.title}}
        	 </th> 
           <th>操作</th>
           
        	</tr>
        	
        	<tbody>
        	<tr v-for='item in itemTable.data' class='success'>
               <template v-if='itemTable.id==="1"||itemTable.id==="2"'>
                   <td>{{item.order_id}}</td>
              <td>{{item.mobile}}</td>
              <td>{{apply_types[item.apply_type]}}</td>
              <td>{{item.personal_type}}</td>
              <td>{{item.city_id}}-{{item.district_id}}-{{item.community_name}}-{{item.address}}</td>
               <td>{{item.landlord_contract_start}}:{{item.landlord_contract_end}}</td>
             
               <td>{{item.landlord_price}}</td>
              <td>{{item.lease_contract_start}}&nbsp{{item.lease_contract_end}}</td>
              <td>{{item.lease_price}}</td>
               </template>
               

              
              <td v-if='itemTable.id==="1"'>{{item.credit_balance}}</td>
              <td v-if='itemTable.id==="2"'>{{item.status}}</td>
              <template v-if='itemTable.id==="4"'>
                  <td>{{item.mobile}}</td>
             
               <td>{{item.withdraw}}</td>
              <td>{{item.account_total}}</td>
              <td>{{item.remainder}}</td>

              </template>


              <template v-if='itemTable.id==="3"'>
                  <td>{{item.order_id}}</td>
             
               <td>{{item.pay_time}}</td>
              <td>{{item.apply_type}}</td>
              <td>{{item.pay_type}}</td>
              <td>{{item.payer}}</td>
             
               <td>{{item.accepter}}</td>
              <td>{{item.amount}}</td>
              <td>{{item.service}}</td>
              <td>{{item.award}}</td>
             
               <td>{{item.is_pay}}</td>
              

              </template>

             <!-- <td>{{item.amount}}</td>
            
             <td>{{item.bed_room}}</td>
             <td>{{item.building_area}}</td>
             
           
             <td>{{item.credit_balance}}</td>
         
             <td>{{item.house_id}}</td>
            
            
             <td>{{item.landlord_pay_name}}</td>
             
             <td></td>
             
             <td>{{item.lease_pay_name}}</td>
             
             <td>{{item.living_room}}</td>
            
             <td>{{item.on_floor}}</td>
             
             <td>{{item.personal_type}}</td>
             <td>{{item.reform_price}}</td>
             <td>{{item.rent_mode}}</td>
             <td>{{item.status}}</td>
             <td>{{item.total_floor}}</td>
             <td>{{item.washing_room}}</td>
             <td>{{item.rent_mode}}</td>
             <td>{{item.status}}</td> -->
             <td><span @click='look(item1,item)' class='opr_index' v-for='item1 in opr[itemTable.id]'>{{item1.title}}</span></td>
        	</tr>
        	</tbody>
        </table>


        <div class='pages'>
        	<!-- <span @click='page(item)' :class='{"btn-danger":item.flag}' class="btn btn-success" v-for='item in nums'>
        		{{item.num}} -->
            <pages :page='pag' ref='page' v-on:pageData='page_data' :pageTab='pageTab'></pages> 
<!-- 
            <pages :page='page'></pages> -->
        	</span>

        </div>

        <show :item='show' :tab='show_tab' v-on:hide='hide' ></show>

        <check :check='check' :tab='check_tab' v-on:cancel='check1' v-on:applyData='tab'></check>
    </div>

     

</template>


<script>

 import show from './show.vue';
 import check from './check.vue';
 import pages from './pages.vue';
	export default{
		  data(){

		  	  return{
		  	  	   check:{
                      
		  	  	   },
               
               apply_types:['','租房预付','装修预付'],
               show_tab:'',
               check_tab:'',
               ths:{
                  '1':[
                   {title:'订单编号'},
                   {title:'用户账户'},
                   {title:'申请类型'},
                   {title:'申请人类型'},
                   {title:'房间信息'},
                   {title:'包租时间'},
                   {title:'包租价格'},
                   {title:'租赁时间'},
                   {title:'租赁价格'},
                   {title:'授信价'},
                  ],
                  '2':[
                   {title:'订单编号'},
                   {title:'用户账户'},
                   {title:'申请类型'},
                   {title:'申请人类型'},
                   {title:'房间信息'},
                   {title:'包租时间'},
                   {title:'包租价格'},
                   {title:'租赁时间'},
                   {title:'租赁价格'},
                   {title:'状态'},

                  ],
                  '3':[
                    {title:'订单编号'},
                   {title:'支付时间'},
                   {title:'申请类型'},
                   {title:'支付类型'},
                   
                   {title:'支付方'},
                   {title:'收款方'},
                   {title:'实付金额'},
                   {title:'服务费'},
                   {title:'奖励费'},
                   {title:'状态'},
                  ],
                  '4':[
                    {title:'申请小B'},
                   {title:'提现金额'},
                   {title:'贷款总额'},
                   {title:'剩余金额'},
                  

                   ]
               },
               opr:{
                  1:[
                    {title:'处理',tab:1},
                    {title:'查看',tab:1},
                   ],
                   2:[
                     {title:'审核',tab:2},
                     {title:'查看',tab:2},
                   ],
                   3:[
                     {title:'确认打款',tab:3},
                     // {title:'查看',tab:2},
                   ],
                   4:[
                     {title:'确认打款',tab:4},
                     
                     {title:'取消',tab:4},
                   ],
               },



		  	  	   show:{
                     flag:false,
                     id:'用户账户',
                     td1s:['用户账户',
                        '房间信息',
                        '包租结束',
                        '租赁开始',
                        '租赁价格',
                        '收款人姓名',
                        '银行账号',
                        '付款银行名称',
                        '申请人类型',
                        
                   ],
                 
                   td3s:['申请类型',
                        '包租开始',
                        '包租价格',
                        '租赁结束',
                        '装修报价',
                        '首款银行',
                        '收款人姓名',
                        '付款银行账号',
                        
                        
                   ],
                  
                   


		  	  	   },
		  	  	   nums:[
                     {num:1,flag:true},
                     {num:2,flag:false},
                     {num:3,flag:false},
                     {num:4,flag:false},
                     {num:5,flag:false},
                     {num:6,flag:false},
                     {num:7,flag:false},
                     {num:8,flag:false},
                     {num:9,flag:false},

		  	  	   ],
              


		  	  }
		  },
      props:['itemTable','pag','pageTab'],
      mounted(){
          console.log(this.pag)
      },
		  methods:{
		  	 page(item){
		  	 	 this.nums.map(function(index){
		  	 	 	 index.flag=false;
		  	 	 });
		  	 	 item.flag=true;
		  	 },
         page_data(page){
             if(this.itemTable.id==='2'){
                   this.$http.get('/ym/easyAdmin/theme/affirmList?page='+page).then(res=>{
                          
                            this.$emit('pageTable',res.data.data);
                           
                         })
             }
         },
         tab(item){
           
             this.$emit('table',item,this.$refs.page.num);
         },
		  	 look(item1,item){
            if(item1.tab===1&&item1.title==='查看'){
                
                this.$http.get('/ym/easyAdmin/theme/Applyopenid?orderid='+item.order_id).then(res=>{
                   console.log(res)
                    this.show=res.data;
                     this.show.flag=true;
                     this.show_tab='受理审核'
                })
               
            }else if(item1.tab===1&&item1.title==='处理'){
               this.check=item;
               
               this.check.flag=true;
               this.check_tab=1; 
            }else if(item1.tab===2&&item1.title==='查看'){
                 this.$http.get('/ym/easyAdmin/theme/Applyopenid?orderid='+item.order_id).then(res=>{
                     this.show=res.data;
                     this.show.flag=true;
                     this.show_tab='上会确认';
                 })
                   

            }else if(item1.tab===2&&item1.title==='审核'){
                 console.log(item);
                 this.check=item;
                 this.check.flag=true;
               this.check_tab=2;
            }
            else if(item1.tab===4&&item1.title==='取消'){
                 if(item.status=='2'){
                    alert('已取消')
                 }else{
                    this.$http.get('/ym/easyAdmin/theme/WithdrawNotice?id='+item.id+'&status='+2).then(res=>{
                      alert('取消成功');
                      this.$emit('table',4)
                  })
                 }
                 
                   

            }else if(item1.tab===4&&item1.title==='确认打款'){
                 if(item.status==='1'){
                    alert('已打款');
                 }else{
                     this.check=item;
                   this.check.flag=true;
                 this.check_tab=4;
                 }
                 
            }else if(item1.tab===3&&item1.title==='确认打款'){
                 
                 this.check=item;
                 this.check.flag=true;
               this.check_tab=3;
            }




         },
		  	 hide(){
		  	 	 this.show.flag=false;
		  	 },
		  	 check1(){
		  	 	  this.check.flag=false;
		  	 },
		  	 
		  },
		  components:{
            show:show,
            check:check,
            pages:pages,
		  }

	}



</script>


<style scoped lang='less'>
	 .table_body{
	 	 width:90%;
	 	 height: auto;
	 	 margin: 0 auto;
     font-size: 13px;
     /*display: flex;
     justify-content: center;*/

	 }
     table span{
     	  height: 100%;

     }
     span.opr_index{
        color: blue;
        margin-right: 3px;
     }
    .pages{
    	 width: 1000px;
    	 height: auto;
    	 margin: 0 auto;
    	 display: flex;
    	 justify-content: center;
    	 margin-top: 40px;
         span{
         	 margin-left: 15px;
         }
    }


</style>