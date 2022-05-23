let shuffle_btn_click = document.querySelector(".shuffle_btn");

shuffle_btn_click.addEventListener("click", ()=>{

        let loop_user =  setInterval(() => {
        let user_lists = ["Sharmin" , "Jannatul" , "Abdul" , "Fatema" , "Sadia" , "Taslima" , "Tania" , "Salma" , "Asma" , "Muhammad" , "Nasrin" , 
                         "Abdullah" , "Farjana" , "Khadiza" , "Nusrat" , "Aadhira" , "Aaditri" , "Saadat" ,"Saara" , "Sabaa" , "Sabburah"]

         let create_random_number = Math.floor(Math.random()*21);
         let users_input = document.querySelector(".user_lists");
         users_input.placeholder = user_lists[create_random_number];
         shuffle_btn_click.disabled = true;

 }, 50);


 let get_user_shuffle_time = document.querySelector(".user_shuffle_time");
 let time_out = get_user_shuffle_time.value + 0 + 0 +0;

if(time_out > 900 ) {

   setTimeout(()=>{
       let winner_text = document.querySelector(".winner_info");
       winner_text.style.opacity = "1";
       clearInterval(loop_user)
   },time_out)
}

else {

    setTimeout(()=>{
        let winner_text = document.querySelector(".winner_info");
        winner_text.style.opacity = "1";
        clearInterval(loop_user)
    },2000)

}
})
