/*
var container = document.getElementById('container');
var list = document.getElementById('list');
var buttons = document.getElementById('buttons').getElementsByTagName('span');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var animated = false;
var index = 1;
*/
var carousel = {
  data:{
    container: document.getElementById('container'),
    list: document.getElementById('list'),
    buttons: document.getElementsByTagName('span'),
    prev: document.getElementById('prev'),
    next: document.getElementById('next'),
    animated: false,
    index: 1
  },
  animated(offset) {
    if(offset == 0){
      return;
    }
    let left = parseInt(this.data.list.style.left);
    this.data.list.style.left = (left + offset) + 'px';
  },
  nextOnclick() {
    if(this.data.animated){
      return;
    }
    this.animated(-600);
  },
  prevOnclick() {
    if(this.data.animated){
      return;
    }
    this.animated(600);
  }
};

export default carousel;