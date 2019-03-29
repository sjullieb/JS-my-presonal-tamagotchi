import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Tamagotchi } from './tamagotchi.js'

$(document).ready(function() {
  let tama;
  let checking;

  $("#newTamagotchi").submit(function(event){
    event.preventDefault();
    console.log(1);
    tama = new Tamagotchi($("#name").val(), 1000);
    console.log(tama);

    checking = setInterval( () => {
      console.log("in");
      //if(!tama.isDead()){
        console.log("not dead yet");
        $("#hunger").text(tama.hunger);
        $("#happieness").text(tama.happieness);
        $("#tiredness").text(tama.tiredness);
    //  }
    //  else {
    //    $("#dead").text("Tamagotchi left you!");
        //console.log("dead");
        //clearInterval();
    //  }
    }, 1000);
    console.log("checking log", checking);
    tama.start(stopChecking);

    //clearInterval(checking);
  });

  function stopChecking()
  {
    console.log("clear Interval");
    $("#dead").text("Tamagotchi left you!");
    clearInterval(checking);
  }

  $("#sleep").click(function(){
    tama.sleep();
    console.log('sleep');
  });

  $("#play").click(function(){
    tama.play();
  });

  $("#feed").click(function(){
    tama.feed();
  });
});
