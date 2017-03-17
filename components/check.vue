<template>
	
   <div class='check_body' v-if='check.flag'>
   	    <div class='check_content'  v-if='tab==1'>
   	    	 <div>
   	    	 	<span>「{{check.mobile}}」申请受理</span>
   	    	 </div>
   	    	 <div>
   	    	   <select class="form-control" v-model='check.status'>
   	    	      <option value='0'>是否受理</option>
				  <option value='100'>受理</option>
				  <option value='200'>不受理</option>
			   </select>
   	    	 </div>

             <div>
                 <span>备注</span>
             	 <textarea class="form-control"  rows="6"  v-model='check.remark_apply'>
             	 	
             	 </textarea>
             </div>
             
            <div>
            	<div>
            		 <span class='btn btn-primary' @click='checkSubmit()'>确定</span>
            	  <span @click='checkCancel()'  class='btn btn-info'>取消</span>
            	</div>

            </div>
              <div>
                 <p>确定操作不可逆，请确定之后再提交</p>
              </div>
   	    </div>

       

       




        <div class='check_content3'  v-if='tab===2'>
   	    	 <div>
   	    	 	<span>「{{check.mobile}}」上会确认</span>
   	    	 </div>
   	    	 <div>
   	    	   <select class="form-control" v-model='status'>
   	    	      <option value=''>是否通过</option>
				  <option value='300'>通过</option>
				  <option value='400'>不通过</option>
			   </select>
   	    	 </div>
              <div>
                 <input type="text" class="form-control" placeholder="上会确认评估价" v-model='evaluated'>
              </div>
              <div>
                 <input type="text" class="form-control" placeholder="合作月份" v-model='cooperation'>
              </div>
              <div>
                 <input type="text" class="form-control" placeholder="服务费比例" v-model='service'>
                  <input type="text"  class="form-control"placeholder="奖励费比例" v-model='award'>
              </div>
              <div>
                <span>租金贷实付金额：￥{{item.price}}</span>
             </div>
         
             <div>
                 <span>备注</span>
             	 <textarea v-model='remark' class="form-control"  rows="6">
             	 	
             	 </textarea>
             </div>
             
            <div>
            	<div>
            		 <span class='btn btn-primary' @click='checkSubmit2()'>确定</span>
            	<span @click='checkCancel2()'  class='btn btn-info'>取消</span>
            	</div>
            </div>
            <div>
                 <p>确定操作不可逆，请确定之后再提交</p>
              </div>
   	    </div>



        <div class='check_content4'  v-if='item.id==5'>
   	    	 <div>
   	    	 	<span>「{{check.id}}」财务审核</span>
   	    	 </div>
   	    	 <div>
   	    	   <select class="form-control" >
   	    	      <option>是否受理</option>
				  <option value=''>受理</option>
				  <option>不受理</option>
			   </select>
   	    	 </div>

             <div>
                 <span>备注</span>
             	 <textarea class="form-control"  rows="6">
             	 	
             	 </textarea>
             </div>
             
            <div>
            	<div>
            		 <span class='btn btn-primary' @click='checkSubmit()'>确定</span>
            	<span @click='checkCancel()'  class='btn btn-info'>取消4</span>
            	</div>
            </div>
   	    </div>



   
             <div class='check_content5'  v-if='tab===4'>
   	    	 <div>
   	    	 	<span>「{{check.mobile}}」确认打款</span>
   	    	 </div>
   	    	 <div>
   	    	    <span>打款金额：￥{{check.withdraw}}</span>
   	    	 </div>

             <div>
                 <span>账单等其他凭证</span>
             	 <textarea class="form-control"  rows="6" v-model='remark4'>
             	 	
             	 </textarea>
             </div>
             
            <div>
            	<div>
            		 <span class='btn btn-primary' @click='checkSubmit4()'>确定</span>
            	<span @click='checkCancel4()'  class='btn btn-info'>取消</span>
            	</div>
            </div>
   	    </div>


          <div class='check_content5'  v-if='tab===3'>
             <div>
               <span>「{{check.mobile}}」确认打款</span>
             </div>
             <div>
                <span>打款金额：￥{{check.withdraw}}</span>
             </div>

             <div>
                 <span>账单等其他凭证</span>
                <textarea class="form-control"  rows="6" v-model='remark4'>
                  
                </textarea>
             </div>
             
            <div>
               <div>
                   <span class='btn btn-primary' @click='checkSubmit3()'>确定</span>
               <span @click='checkCancel3()'  class='btn btn-info'>取消</span>
               </div>
            </div>
          </div>







   </div>

</template>

<script>
	export default{
		  data(){  
            return{
               item:{
               	 id:1,
               },
               status:'',
                evaluated:'',
               cooperation:'',
                service:'',
                 award:'',
                  remark:'',
                  remark4:'',
            }

		  },
		  props:['check','tab'],
		  methods:{
		  	  checkSubmit(){
               

             this.$http.post('/ym/easyAdmin/theme/ApplyShouli',{orderid:this.check.order_id,
                status:this.check.status,
                remark_apply:this.check.remark_apply,
               }).then(res=>{
                  
                  this.$emit('cancel');
                  this.$emit('applyData',1);
             })
		  	  	  
		  	  },
		  	  checkCancel(){
		  	  	   this.$emit('cancel');
		  	  },
           checkSubmit2(){
               

             this.$http.post('/ym/easyAdmin/theme/subAffirm',{order_id:this.check.order_id,
                status:this.status,
                evaluated:this.evaluated,
               cooperation:this.cooperation,
                service:this.service,
                 award:this.award,
                  remark:this.remark,
               }).then(res=>{
                  
                  this.$emit('cancel');
                  this.$emit('applyData',2);
             })
              
           },
           checkCancel2(){
               this.$emit('cancel');
           },


         checkSubmit4(){
               

             this.$http.post('/ym/easyAdmin/theme/WithdrawNotice',{id:this.check.id,
                status:1,
                remark:this.remark4,
               }).then(res=>{
                  
                  this.$emit('cancel');
                  this.$emit('applyData',4);
             })
              
           },
           checkCancel4(){
               this.$emit('cancel');
           },
           checkSubmit3(){
               

             this.$http.post('/ym/easyAdmin/theme/ConfirmMoney',{id:this.check.id,
               
                remark:this.remark4,
               }).then(res=>{
                  
                  this.$emit('cancel');
                  this.$emit('applyData',3);
             })
              
           },
           checkCancel3(){
               this.$emit('cancel');
           }
		  }




	}


</script>

<style scoped lang='less'>

 .red{

 }



	  .check_body{
	  	 position: fixed;
	 	 width: 100%;
	 	 height: 100%;
	 	 top: 0px;
	 	 left: 0px;
	 	 display: flex;
	 	 justify-content: center;
	 	 align-items: center;
	 	 background-color: rgba(11,111,111,0.4);
         .check_content{
         	 width:500px;
         	 height:400px;
         	 background-color: white; 
         	

         	  
         	 >div:nth-child(1){
         	 	  width: 100%;
         	 	  height: 40px;
         	 	  display: flex;
         	 	  justify-content: center;
         	 	  align-items: center;
         	 	  font-size: 20px;
         	 	  margin-top: 20px;
         	 }
         	 >div:nth-child(2){
         	 	 display: flex;
         	 	 justify-content: center;
         	 	 margin-top: 30px;
         	 	 select{
         	 	 	  width: 80%;
         	 	 }
         	 }
         	 >div:nth-child(3){
         	 	 display: flex;
         	 	 align-items: center;
         	 	 margin-top: 20px;
         	 	 flex-direction: column;
         	 	 span{
         	 	 	 width: 80%;
         	 	 	 display: flex;
         	 	 	 justify-content: flex-start;
         	 	 }
         	 	 textarea{
         	 	 	  width: 80%;
         	 	 	  overflow-y: scroll;
         	 	 	  resize: none;
         	 	 }
         	 }

         	 >div:nth-child(4){
         	 	  display: flex;
         	 	  width: 100%;
         	 	  justify-content: center;
         	 	  margin-top: 20px;
         	 	  div{
         	 	  	 width: 80%;
         	 	  	 height: auto;
         	 	  	 display: flex;
         	 	  	 justify-content: center;
         	 	  	 span{
         	 	  	 	 margin-right: 30px;
         	 	  	 }
         	 	  }


         	 }
             >div:nth-child(5){
                display: flex;
                width: 100%;
                justify-content: center;
                  p{
                    width: 80%;
                    font-size: 20px;
                    color: red;
                    display: flex;
                    justify-content: center;
                 }
             }


	  
         }

         .check_content1{
         	  width:500px;
         	 height: 400px;
         	 background-color: white; 
         	 
         	  
         	 >div:nth-child(1){
         	 	  width: 100%;
         	 	  height: 40px;
         	 	  display: flex;
         	 	  justify-content: center;
         	 	  align-items: center;
         	 	  font-size: 20px;
         	 	  margin-top: 20px;
         	 }
         	 >div:nth-child(2){
         	 	 display: flex;
         	 	 justify-content: center;
         	 	 margin-top: 30px;
         	 	 input{
         	 	 	  width: 80%;
         	 	 }
         	 }
         	 >div:nth-child(3){
         	 	 display: flex;
         	 	 align-items: center;
         	 	 margin-top: 20px;
         	 	 flex-direction: column;
         	 	 span{
         	 	 	 width: 80%;
         	 	 	 display: flex;
         	 	 	 justify-content: flex-start;
         	 	 }
         	 	 textarea{
         	 	 	  width: 80%;
         	 	 	  overflow-y: scroll;
         	 	 	  resize: none;
         	 	 }
         	 }

         	 >div:nth-child(4){
         	 	  display: flex;
         	 	  width: 100%;
         	 	  justify-content: center;
         	 	  margin-top: 20px;
         	 	  div{
         	 	  	 width: 80%;
         	 	  	 height: auto;
         	 	  	 display: flex;
         	 	  	 justify-content: center;
         	 	  	 span{
         	 	  	 	 margin-right: 30px;
         	 	  	 }
         	 	  }

         	 }
         }

         .check_content2{

         	  width:500px;
         	 height: 400px;
         	 background-color: white; 
         	 
         	  
         	 >div:nth-child(1){
         	 	  width: 100%;
         	 	  height: 40px;
         	 	  display: flex;
         	 	  justify-content: center;
         	 	  align-items: center;
         	 	  font-size: 20px;
         	 	  margin-top: 20px;
         	 }
         	 >div:nth-child(2){
         	 	 display: flex;
         	 	 align-items: center;
         	 	 margin-top: 10px;
         	 	 flex-direction: column;
         	 	 select{
         	 	 	 width: 80%;
         	 	 	 margin-bottom: 10px;
         	 	 }
         	 	 input{
         	 	 	  width: 80%;
         	 	 }
         	 }
         	 >div:nth-child(3){
         	 	 display: flex;
         	 	 align-items: center;
         	 	 margin-top: 10px;
         	 	 flex-direction: column;
         	 	 span{
         	 	 	 width: 80%;
         	 	 	 display: flex;
         	 	 	 justify-content: flex-start;
         	 	 }
         	 	 textarea{
         	 	 	  width: 80%;
         	 	 	  overflow-y: scroll;
         	 	 	  resize: none;
         	 	 }
         	 }

         	 >div:nth-child(4){
         	 	  display: flex;
         	 	  width: 100%;
         	 	  justify-content: center;
         	 	  margin-top: 20px;
         	 	  div{
         	 	  	 width: 80%;
         	 	  	 height: auto;
         	 	  	 display: flex;
         	 	  	 justify-content: center;
         	 	  	 span{
         	 	  	 	 margin-right: 30px;
         	 	  	 }
         	 	  }

         	 }
         }
         
         .check_content3{
         	    width:500px;
         	 height: 600px;
         	 background-color: white; 
         	 
         	  
         	 >div:nth-child(1){
         	 	  width: 100%;
         	 	  height: 40px;
         	 	  display: flex;
         	 	  justify-content: center;
         	 	  align-items: center;
         	 	  font-size: 20px;
         	 	  margin-top: 20px;
         	 }
         	 >div:nth-child(2){
         	 	 display: flex;
         	 	 justify-content: center;
         	 	 margin-top: 30px;
         	 	 select{
         	 	 	  width: 80%;
         	 	 }
         	 }

            >div:nth-child(3){
               display: flex;
                justify-content: center;
                margin-top: 10px;
                input{
                    width: 80%;
                }
            }

           >div:nth-child(4){
               display: flex;
                justify-content: center;
                margin-top: 10px;
                input{
                    width: 80%;
                }
            }
            >div:nth-child(5){
               display: flex;
                justify-content: center;
                margin-top: 10px;
                input{
                    width: 40%;
                }
            }

            >div:nth-child(6){
               display: flex;
                justify-content: center;
                margin-top: 10px;
                span{
                    width: 80%;
                    font-size: 18px;
                    color: red;
                }
            }


         	 >div:nth-child(7){
         	 	 display: flex;
         	 	 align-items: center;
         	 	 margin-top: 20px;
         	 	 flex-direction: column;
         	 	 span{
         	 	 	 width: 80%;
         	 	 	 display: flex;
         	 	 	 justify-content: flex-start;
         	 	 }
         	 	 textarea{
         	 	 	  width: 80%;
         	 	 	  overflow-y: scroll;
         	 	 	  resize: none;
         	 	 }
         	 }

         	 >div:nth-child(8){
         	 	  display: flex;
         	 	  width: 100%;
         	 	  justify-content: center;
         	 	  margin-top: 20px;
         	 	  div{
         	 	  	 width: 80%;
         	 	  	 height: auto;
         	 	  	 display: flex;
         	 	  	 justify-content: center;
         	 	  	 span{
         	 	  	 	 margin-right: 30px;
         	 	  	 }
         	 	  }

         	 }
             >div:nth-child(9){
                  display: flex;
                width: 100%;
                justify-content: center;
                  p{
                    width: 80%;
                    font-size: 20px;
                    color: red;
                    display: flex;
                    justify-content: center;
                 }
             
             }
         }
         
         .check_content4{
         	  width:500px;
         	 height: 400px;
         	 background-color: white; 
         	 
         	  
         	 >div:nth-child(1){
         	 	  width: 100%;
         	 	  height: 40px;
         	 	  display: flex;
         	 	  justify-content: center;
         	 	  align-items: center;
         	 	  font-size: 20px;
         	 	  margin-top: 20px;
         	 }
         	 >div:nth-child(2){
         	 	 display: flex;
         	 	 justify-content: center;
         	 	 margin-top: 30px;
         	 	 select{
         	 	 	  width: 80%;
         	 	 }
         	 }
         	 >div:nth-child(3){
         	 	 display: flex;
         	 	 align-items: center;
         	 	 margin-top: 20px;
         	 	 flex-direction: column;
         	 	 span{
         	 	 	 width: 80%;
         	 	 	 display: flex;
         	 	 	 justify-content: flex-start;
         	 	 }
         	 	 textarea{
         	 	 	  width: 80%;
         	 	 	  overflow-y: scroll;
         	 	 	  resize: none;
         	 	 }
         	 }

         	 >div:nth-child(4){
         	 	  display: flex;
         	 	  width: 100%;
         	 	  justify-content: center;
         	 	  margin-top: 20px;
         	 	  div{
         	 	  	 width: 80%;
         	 	  	 height: auto;
         	 	  	 display: flex;
         	 	  	 justify-content: center;
         	 	  	 span{
         	 	  	 	 margin-right: 30px;
         	 	  	 }
         	 	  }

         	 }
         }
         
         .check_content5{
         	  width:500px;
         	 height: 400px;
         	 background-color: white; 
         	 
         	  
         	 >div:nth-child(1){
         	 	  width: 100%;
         	 	  height: 40px;
         	 	  display: flex;
         	 	  justify-content: center;
         	 	  align-items: center;
         	 	  font-size: 20px;
         	 	  margin-top: 20px;
         	 }
         	 >div:nth-child(2){
         	 	 display: flex;
         	 	 justify-content:center;
         	 	 margin-top: 30px;
         	 	span{
         	 		 width: 80%;
         	 		 display: flex;
         	 		 justify-content: flex-start;
         	 	}
         	 	 
         	 }
         	 >div:nth-child(3){
         	 	 display: flex;
         	 	 align-items: center;
         	 	 margin-top: 20px;
         	 	 flex-direction: column;
         	 	 span{
         	 	 	 width: 80%;
         	 	 	 display: flex;
         	 	 	 justify-content: flex-start;
         	 	 }
         	 	 textarea{
         	 	 	  width: 80%;
         	 	 	  overflow-y: scroll;
         	 	 	  resize: none;
         	 	 }
         	 }

         	 >div:nth-child(4){
         	 	  display: flex;
         	 	  width: 100%;
         	 	  justify-content: center;
         	 	  margin-top: 20px;
         	 	  div{
         	 	  	 width: 80%;
         	 	  	 height: auto;
         	 	  	 display: flex;
         	 	  	 justify-content: center;
         	 	  	 span{
         	 	  	 	 margin-right: 30px;
         	 	  	 }
         	 	  }

         	 }
         }

	  }



</style>