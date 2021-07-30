const invitedListBtn = document.getElementById('invited-list-btn');
const invitedBox = document.getElementById('invited-box')
let isOpen = false;

invitedListBtn.addEventListener('click', () => {

    if(isOpen){
        invitedListBtn.classList.add('open')
        invitedBox.classList.add('open')
        isOpen = !isOpen
    }else{
        invitedListBtn.classList.remove('open')
        invitedBox.classList.remove('open')
        isOpen = !isOpen
    }
})