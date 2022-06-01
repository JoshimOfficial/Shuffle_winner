let shuffle_btn_click = document.querySelector(".shuffle_btn");
let winner_animation = document.querySelector(".animation_winner_sec");


let alert_audio = new Audio ("mp3/less_than_5.mp3");
let winner_audio = new Audio ("mp3/winner.mp3");
let winner_audio_sec = new Audio ("mp3/winner_sec.mp3");


shuffle_btn_click.addEventListener("click", ()=>{

        let loop_user =  setInterval(() => {
        let user_lists = ["Sharmin" , "Jannatul" , "Abdul" , "Fatema" , "Sadia" , "Taslima" , "Tania" , "Salma" , "Asma" , "Muhammad" , "Nasrin" , 
                         "Abdullah" , "Farjana" , "Khadiza" , "Nusrat" , "Aadhira" , "Aaditri" , "Saadat" ,"Saara" , "Sabaa" , "Sabburah"]

         let create_random_number = Math.floor(Math.random()*21);
         let users_input = document.querySelector(".user_lists");
         users_input.placeholder = user_lists[create_random_number];
         shuffle_btn_click.disabled = true;

 }, 50);
 
 let user_sec = document.querySelector("#select_time");
 let user_set_time = user_sec.value + 0 + 0 + 0;
 let set_opacity_of_left_time = document.querySelector(".shuffle_count_down");
 set_opacity_of_left_time.style.opacity = 1;

 let set_left_time = document.querySelector(".count_down");
 set_left_time.innerText = user_sec.value;

   setTimeout(()=>{
       let winner_text = document.querySelector(".winner_info");
       winner_text.style.opacity = "1";
       clearInterval(loop_user)
   },user_set_time)



   let balance_sec = user_sec.value - 1;
   let timer_sec_id = document.querySelector("#timer_sec");
   
   let count_down = setInterval(() => {
     set_left_time.innerText = balance_sec--;

     
     if(set_left_time.innerText < 6 ) {
      timer_sec_id.classList.remove("text-success");
      timer_sec_id.classList.add("text-danger");
      timer_sec_id.style.fontWeight = "bold";

      //play audio
      alert_audio.play();
     }
   }, 990);


setTimeout(() => {
  clearInterval(count_down)
  
  winner_animation.style.display = "block";
  alert_audio.pause();
  winner_audio.play();
  winner_audio_sec.play();





}, user_set_time);

})




