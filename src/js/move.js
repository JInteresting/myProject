var operation = {
  positionMessage(element, x, y) {
    //console.log('AAA');
    if(!document.getElementById) return false;
    if(!document.getElementById(element)) return false;
    var elem = document.getElementById(element);
    elem.style.position = "absolute";
    elem.style.left = x+"px";
    elem.style.top = y+"px";
    //console.log(elem.style.top);
    this.moveMessage(element, 100, 200, 5000);
  },
  moveMessage(element, x, y, interval) {
    if(!document.getElementById) return false;
    if(!document.getElementById(element)) return false;
    var elem = document.getElementById(element);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == x && ypos == y){
      return true;
    }
    if (xpos < x){
        xpos++;
    }
    if (xpos > x){
        xpos--;
    }
    if (ypos < y){
        ypos++;
    }
    if (ypos > y){
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    //console.log(elem);
    var movement = setTimeout(this.moveMessage(element,x,y,interval), interval);
  },
  addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof oldonload != 'function'){
      window.onload = func;
    }
    else{
      window.onload = function(){
        oldonload(),
        func();
      }
    }
  }
};

export default operation;