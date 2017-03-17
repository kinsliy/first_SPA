<template>
	
    <div class='show_body' v-if='item.flag' @click='hide()'>
    	   
        <div class='show_content' @click.stop='hide1'>
            
        	<div>
        		「{{item.mobile}}」{{tab}}
        	</div>

             
            <div>
            	<div class='bg-info'>
            		<span v-for='item in item1.td1s'>{{item}}</span>
            	</div>
            	<div>
            		<span>
                        {{item.mobile}}
                    </span>

                    <span>
                        {{item.city_id}}-{{item.district_id}}-{{item.community_name}}-{{item.address}}
                    </span>
                    
                    <span>{{item.landlord_contract_end}}</span>
                    <span>{{item.lease_contract_start}}</span>

                    <span>{{item.lease_price}}</span>
                    <span>{{item.receive_name}}</span>
                    <span>{{item.receive_bank_no}}</span>
                    <span>{{item.pay_bank}}</span>
                   
                    <span>{{item.personal_type}}</span>
                    










            	</div>

            	<div class='bg-info'>
            		<span v-for='item in item1.td3s'>{{item}}</span>
            		<span></span>
            	</div>
            	<div>
            		<span>{{item.apply_type}}</span>
                    <span>{{item.landlord_contract_start}}</span>
                    <span>{{item.landlord_price}}</span>
                    <span>{{item.lease_contract_end}}</span>

                    <span>{{item.reform_price}}</span>
                    <span>{{item.receive_bank}}</span>
                    <span>{{item.pay_name}}</span>
                    <span>{{item.pay_bank_no}}</span>
                   





            		<span></span>
            	</div>

            </div>


            <div>
            	 <div>
            	 	 <span>申请人身份证</span>
            	 </div>
            	 <div>
            	 	<img v-for='item in item.apply_id_card_pics' :src="item">
            	 </div>
            </div>

            <div>
            	 <div>
            	 	 <span>芝麻信用截图</span>
            	 	 <span>征信报告图片</span>
            	 </div>

            	 <div>
            	 	<img v-for='item in item.zm_credit_pics' :src="item">
                    <img v-for='item in item.credit_report_pics' :src="item">
            	 </div>
            </div>


            <div>
            	 <div>
            	 	 <span>房态图片</span>
            	 	
            	 </div>

            	 <div>
            	 	<img v-for='item in item.house_status_pics' :src="item">
            	 </div>
            </div> 



            <div>
            	 <div>
            	 	 <span>包租合同图片
            	 	 </span>
            	 	 
            	 </div>

            	 <div>
            	 	<img v-for='item in item.landlord_contract_pics' :src="item">
            	 </div>
            </div>

            <div>
            	 <div>
            	 	 <span>业主房产证图片
            	 	 </span>
            	 	 <span>业务委托书图片
            	 	 </span>
            	 	 <span>业主身份证图片
            	 	 </span>
            	 	 
            	 </div>

            	 <div>
            	 	<img v-for='item in item.landlord_property_pics' :src="item">
                    <img v-for='item in item.landlord_trust_pics' :src="item">
                    <img v-for='item in item.landlord_id_pics' :src="item">

            	 </div>
            </div>



             <div>
            	 <div>
            	 	 <span>业主流水图片
            	 	 </span>
            	 	 
            	 	 
            	 </div>

            	 <div>
            	 	<img v-for='item in item.landlord_cashflow_pics' :src="item">
            	 </div>
            </div>

            <div>
            	 <div>
            	 	 <span>租客合同图片
            	 	 </span>
            	 	 
            	 	 
            	 </div>

            	 <div>
            	 	<img v-for='item in item.user_contract_pics' :src="item">
            	 </div>
            </div>
            <div>
            	 <div>
            	 	 <span>租客流水图片
            	 	 </span>
            	 	 
            	 	 
            	 </div>

            	 <div>
            	 	<img v-for='item in item.user_cashflow_pics' :src="item">
            	 </div>
            </div>
            <div>
            	 <div>
            	 	 <span>租客身份证
            	 	 </span>
            	 	 <span></span>
            	 	 <span>租客委托书</span>
            	 	 
            	 	 
            	 </div>

            	 <div>
            	 	<img v-for='item in item.user_id_pics' :src="item">
                    <img v-for='item in item.user_trust_pics' :src="item">
            	 </div>
            </div>
            <div>
            	 <div>
            	 	 <span>公司营业执照
            	 	 </span>
            	 	 <span>公司办公图片</span>
            	 	 
            	 	 
            	 </div>

            	 <div>
            	 	<img v-for='item in item.company_license_pic' :src="item">
                    <img v-for='item in item.company_pics' :src="item">
            	 </div>
            </div>



        </div>

    </div>

</template>


<script>
	export default{
		 data(){
		 	  return {
                  item1:{
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
                        '收款银行',
                        '付款人姓名',
                        '付款银行账号',
                        
                        
                   ],
                  

                  },


		 	  }
		 },
		 props:['item','tab'],
		 methods:{
		 	  hide(){
		 	  	  this.$emit('hide')
		 	  },
               hide1(){
                  this.$emit('hide')
              },
		 	  
		 }
	}



</script>

<style scoped lang='less'>
  .img{
  	 width: 100%;
	  height: auto;
	  margin-top: 20px;
	     >div:nth-child(1){
	     	 display: flex;
	     }

	 	 >div span{
	 	   width: 24%;
	 	    height: 40px;
	 	    display: flex;
	 	   align-items: center;
	 	   padding-left: 5px;
	 	 }
         >div:nth-child(2){
              display: flex;
              flex-wrap:wrap;
              justify-content: flex-start;
         }
	 	 >div img{
	 	      width: 22%;
	 	      height: 180px;
	 	      /*margin-left: 20px;*/
              margin-bottom: 10px;
              margin-right: 15px;
	 	  }
	 	>div img:nth-child(1){
	 	    margin-left: 0px;
	 	 }
  }


	 .show_body{
	 	 position: fixed;
	 	 width: 100%;
	 	 height: 100%;
         font-size: 14px;
	 	 top: 0px;
	 	 left: 0px;
	 	 overflow-y: scroll;
	 	 background-color: rgba(11,111,111,0.4);
	 	 
	 	 .show_content{
	 	 	  width: 800px;
	 	 	  height: auto;
	 	 	  padding: 0 20px 30px 20px;
	 	 	  margin: 0 auto;
	 	 	  background-color: white;
	 	 	  display: flex;
	 	 	  flex-direction: column;
	 	 	  align-items: center;
	 	 	  >div:nth-child(1){
	 	 	  	 
	 	 	  	 height: 50px;
	 	 	  	 font-size: 22px;
	 	 	  	 display: flex;
	 	 	  	 align-items: center; 

	 	 	  }
        
              >div:nth-child(2){
              	margin-top: 20px;
              	 width: 100%;
              	 height: auto;
              	 display: flex;
              	 border-bottom: 1px solid black;
              	 border-right: 1px solid black;
              	 >div{
                    width: 25%;
                    height: auto;
                    span{
                    	 width: 100%;
                    	 height: 35px;
                    	 display: flex;
                    	 justify-content: center;
                    	 align-items: center;
                    	 border-left: 1px solid black;
                    	 border-top: 1px solid black;
                    }
                    span:nth-child(2){
                          font-size: 12px;
                    }

              	 }
              }

	 	      >div:nth-child(3){
	 	      	.img
	 	      }
             
              >div:nth-child(4){
	 	      	  .img
	 	      }
	 	      >div:nth-child(5){
	 	      	.img
	 	      }
             
              >div:nth-child(6){
	 	      	  .img
	 	      }
	 	      >div:nth-child(7){
	 	      	  .img
	 	      }
	 	      >div:nth-child(8){
	 	      	.img
	 	      }
             
              >div:nth-child(9){
	 	      	  .img
	 	      }
	 	      >div:nth-child(10){
	 	      	  .img
	 	      }
	 	      >div:nth-child(11){
	 	      	.img
	 	      }
             
              >div:nth-child(12){
	 	      	  .img
	 	      }



	 	 }
	 }


</style>