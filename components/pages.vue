<template>
	
   <div class='pages'>
   	   <span class='buton' @click='pre()' :class='{"index":num===1}'>上一页</span>
   	   <span><input disabled="disabled" v-model='num' type="num"><span>/{{page}}</span></span>
   	   <span class='buton' @click='next()' :class='{"index":num===page}'>下一页</span>
   </div>

</template>


<script>
	export default{
		  data(){
		  	  return{
                 num:1,
		  	  }
		  },
		  props:['page','pageTab'],
		  methods:{
		  	 pre(){
		  	 	if(this.num===1){

		  	 	}else{
                   this.num--;
                   this.$emit('pageData',this.num);
		  	 	}
		  	 },

		  	 next(){
		  	 	  if(this.num>=this.page){
                     
		  	 	  }else{
		  	 	  	 
		  	 	  	  this.num++;
		  	 	  	  this.$emit('pageData',this.num);
		  	 	  	  
		  	 	  }
		  	 }
		  	
		  }

	}



</script>


<style scoped lang='less'>
	.pages{
		  width: 300px;
		  height: 40px;
		  display: flex;
		  justify-content: space-between;
		  align-items: center;
		  input{
		  	 width: 30px;
		  	 height: 30px;
		  }
		  span{
		  	  width: 50px;
		  	  height: 40px;
		  	  display: flex;
		  	  align-items: center;
		  	  font-size: 18px;
		  }
		  .buton{
		  	  border: 1px solid #e1e1e1;
		  	  font-size: 15px;
		  }
		  .index{
		  	 /*background-color: grey;*/
		  	 cursor:not-allowed;

		  }
		
	}


</style>