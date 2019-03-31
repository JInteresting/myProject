<template>
  <div>
    <p id="message">HelloWorld!</p>
    <input :value="person.name" @input="person.name = $event.target.value" @change="show($event,'aaa')"/>
    <button @click="show($event,'aaa')">AAAA</button>
  </div>
</template>

<script>
import move from "@/js/move.js";
export default {
  name: 'HelloWorld', 
  data () {
    return {
      person:{name:"ray",age:19},
    }
  },
  mounted(){
    move.addLoadEvent(move.positionMessage('message', 50, 100));
    /*
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    let element = document.getElementById("message");
    //console.log(element);
    move.positionMessage('message', 50, 100);
    */
  },
  methods: {
    show(e, str){
      console.log(e.target);
    }
  }
}
</script>

<style scoped>

</style>
