var $x = 0;
function get(element){return  document.querySelector(element);}
function show(element){get(element).style.display = 'block'}
function hide(element){get(element).style.removeProperty('display');}
function toggle(val){if( $x == 0 ){ show(val);  $x =1;}else{hide(val); --$x;}}
function DomEvent(element, type,  output) {get(element).addEventListener(type,output);}

DomEvent('#ham', 'click', function(){
    toggle('.list-item');
})