let lastCheckedIndex = "";
let isPressed = false;
const checkboxes = document.querySelectorAll('.checkbox');

var views = {
    setupEventListener: function(){
        let index = 0;
        checkboxes.forEach((checkbox,index) => {
            checkbox.addEventListener('change', function(){
                handlers.checkUncheck(index);
            });
        });
        window.addEventListener('keydown', handlers.shiftPressed);
        window.addEventListener('keyup', handlers.shiftUnpressed);
    }
}

var handlers = {
    checkUncheck: function(index){
        let checkbox = checkboxes[index];
        if(isPressed == true && checkbox.checked==true){
            if(index>=lastCheckedIndex){
                for(x=lastCheckedIndex; x<index; x++){
                    checkboxes[x].checked = true;
                }
            }
            else{
                for(x=lastCheckedIndex; x>index; x--){
                    checkboxes[x].checked = true;
                }
            }
            lastCheckedIndex = index;
        }
        else if(checkbox.checked){
            // alert('falls');
            lastCheckedIndex = index;
        }
        else{
            lastCheckedIndex = "";
        }
        // alert(lastCheckedIndex);
    },
    shiftPressed: function(e){
        if(e.keyCode == 16){
            isPressed = true;
        }else{
            return false;
        }
        e.preventDefault();
    },
    shiftUnpressed: function(e){
        if(e.keyCode == 16){
            isPressed = false;
        }else{
            return false;
        }
        e.preventDefault();
    }
}

views.setupEventListener();