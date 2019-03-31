<template>
  <div id="container" v-if="show" @mouseover="stop" @mouseout="play">
    <div id="list" style="left: -600px;">
      <template v-for="(item,index) in Img">
        <img :key="index" v-bind:src="item.source" />
      </template>
    </div>
    <div id="buttons">
      <span v-for="i in 5" :key="i" :class="[i==1?'on':'']" :index="i"></span>
    </div>
    <a href="javascript:;" id="prev" class="arrow" @click="prevOnclick">&lt;</a>
    <a href="javascript:;" id="next" class="arrow" @click="nextOnclick">&gt;</a>
  </div>
</template>

<script>
export default {
  props: ['img'],
  data(){
    return {
      show: true,
      Img: this.img,
      elements:{},
    }
  },
  methods: {
    getElements() {
      if(!document.getElementById || !document.getElementsByTagName){
        this.show = false;
        return false;
      }
      this.elements.container = document.getElementById('container');
      this.elements.list = document.getElementById('list');
      this.elements.buttons = document.getElementsByTagName('span');
      this.elements.animated = false;
      this.elements.index = 1;
      this.elements.len = 5;
      this.elements.timer = '';
      return true;
    },
    showButton() {
      let buttons = this.elements.buttons;
      for(let i=0; i<buttons.length; i++){
        if(buttons[i].className == 'on'){
          buttons[i].className = '';
          break;
        }
      }
      buttons[this.elements.index-1].className = 'on';
    },
    prevOnclick() {
      if(this.elements.animated){
        return;
      }
      if(this.elements.index == 1){
        this.elements.index = 5;
      }
      else{
        this.elements.index--;
      }
      this.animate(600);
      this.showButton();
    },
    nextOnclick() {
      if(this.elements.animated){
        return;
      }
      if(this.elements.index == 5){
        this.elements.index = 1;
      }
      else{
        this.elements.index++;
      }
      this.animate(-600);
      this.showButton();
    },
    go(left,speed) {
      let list = this.elements.list;
      //console.log(list.style.left)
      if((speed > 0 && parseInt(list.style.left) <left) || (speed < 0 && parseInt(list.style.left) >left)){
        list.style.left = parseInt(list.style.left) + speed +'px';
        let _self = this;
        setTimeout(function() {_self.go(left,speed)},10);
      } 
      else{
        if(left < -600*this.elements.len){
          list.style.left = '-600px';
        }
        else if(left > -600) {
          list.style.left = -600 * this.elements.len + 'px';
        }
        this.elements.animated = false;
      }
    },
    animate(offset) {
      this.elements.animated = true;
      if(offset == 0){
        return;
      }

      let left = parseInt(this.elements.list.style.left) + offset;
      let time = 300;
      let interval = 10;
      let speed = offset/(time/interval);
      this.go(left, speed);
    },
    buttonEvent() {
      let buttons = this.elements.buttons;
      let _self = this;
      for(let i=0; i<buttons.length; i++){
        buttons[i].onclick = function() {
          if(_self.elements.animated){
            return;
          }
          if(this.className == 'on'){
            return;
          }
          let left = parseInt(_self.elements.list.style.left);
          let myIndex = parseInt(this.getAttribute('index'));
          var offset = -600 * (myIndex-_self.elements.index);

          _self.animate(offset);
          _self.elements.index = myIndex;
          _self.showButton();
        }
      }
    },
    stop(){
      clearTimeout(this.elements.timer);
    },
    play(){
      let _self = this;
      let next = document.getElementById('next');
      this.elements.timer = setTimeout(function(){
        _self.nextOnclick();
        _self.play();
      },3000);
    },
  },
  mounted(){
    this.getElements();
    this.buttonEvent();
    this.play();
  }
}
</script>

<style>
@import "../css/style.css";

</style>
