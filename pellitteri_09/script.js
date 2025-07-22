function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // "onpointerdown" = listener, "pointerDrag"=executer
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
       // console.log - there for de-bugging 
        console.log(e);
      // curser position
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
       // 
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}
// saying: call and execute the function "dragElement" for plant x 
dragElement(document.getElementById('bear'));
dragElement(document.getElementById('tie-dye'));
dragElement(document.getElementById('tshirt'));
dragElement(document.getElementById('dress'));
dragElement(document.getElementById('overalls'));
