// Adding JS toour projects
window.onload = function() {
    const value = document.getElementById("value");
    const Changebtn = document.getElementById("Change");
    Changebtn.addEventListener('click',function(event){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        value.innerHTML = ("#"+ randomColor);
        document.body.style.backgroundColor = "#"+ randomColor;
    })
};
