const modalControls = (() => {
//This function is to open form
const openModal = () => {
    modal.classList.remove('hide-modal');
};
//This function below is to close the form
const closeModal = () => {
    modal.classList.add('hide-modal');
    email.value = '';
    name.value = '';
    message.value = '';
    };
    
//Grasping all the elements
const openModalBtn = document.querySelector('.contact-modal-open-btn').addEventListener('click', openModal);
    const closeModalBtn = document.querySelector('#close-btn');
    closeModalBtn.addEventListener('click', closeModal);
    const modal = document.querySelector('#modal-with-form'); 
    const name = document.querySelector('#name'); 
    const email = document.querySelector('#email'); 
    const message = document.querySelector('#message'); 
})();
// To hide and show the contact me button
const contMe =document.getElementById("hideBtn");
function hide(){
   contMe.style.visibility = "hidden";

}
function visible(){
    contMe.style.visibility = "visible";
}