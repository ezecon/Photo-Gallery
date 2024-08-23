function updatePhoto(element){
    var image = document.getElementById('mainImg');
    image.style.opacity=0

    setTimeout(()=>{
        image.src=element.src;
        image.style.opacity=1
    },500)//1second delay
   
}