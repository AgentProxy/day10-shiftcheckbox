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
        checkbox.nextSibling.nextSibling.classList.add('checked');
        if(isPressed == true && checkbox.checked==true){
            if(index>=lastCheckedIndex){
                for(x=lastCheckedIndex; x<index; x++){
                    checkboxes[x].checked = true;
                    checkboxes[x].nextSibling.nextSibling.classList.add('checked');
                }
            }
            else{
                for(x=lastCheckedIndex; x>index; x--){
                    checkboxes[x].nextSibling.nextSibling.classList.add('checked');
                    checkboxes[x].checked = true;
                }
            }
            lastCheckedIndex = index;
        }
        else if(checkbox.checked){
            lastCheckedIndex = index;
        }
        else{
            checkbox.nextSibling.nextSibling.classList.remove('checked');
            lastCheckedIndex = "";
        }
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