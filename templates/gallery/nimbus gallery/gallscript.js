

var txt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam praesentium asperiores consequatur commodi corporis accusamus doloremque.";
var i=0;
function typing() {
    
    if(i < txt.length)
    {
    document.getElementById('type').innerHTML+=txt.charAt(i);
    i++;
    setTimeout(typing,150);
    }
}
typing();