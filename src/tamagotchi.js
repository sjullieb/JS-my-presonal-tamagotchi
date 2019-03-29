export class Tamagotchi
{
  constructor(name, timerUnit)
  {
    console.log("constructor");
    this.name = name;
    this.hunger = 0;
    this.happieness = 10;
    this.tiredness = 0;
    this.timerUnit = timerUnit;
    // this.feedBerries = this.feed(1);
    // this.feedMeat = this.feed(3);
  }
  //
  // feed(amount){
  //   if (this.hunger > 0){
  //     return () => {
  //       this.hunger -= amount;
  //     }
  //     console.log("feed" + amount);
  //   }
  // }

  feed(){
    if (this.hunger > 0){
      this.hunger -= 1;
      console.log("feed");
    }
  }

  sleep(){
    if(this.tiredness > 0){
      this.tiredness = 0;
      console.log("sleep");
    }
  }

  play(){
    if (this.happieness < 10){
      this.happieness++;
      console.log("play");
    }
  }

  decreaseHappieness(){
    if (this.happieness > 0){
      this.happieness--;
    }
  }

  increaseHunger(){
    if(this.hunger < 10){
      this.hunger++;
    }
    //console.log("hunger " + this.hunger);
  }

  increaseTiredness(){
    if(this.tiredness < 10){
      this.tiredness++;
    }
    //console.log("tiredness " + this.tiredness);
  }

  isDead(){
    if((this.tiredness == 10) || (this.hunger == 10) || (this.happieness == 0)){
      console.log("tiredness " + this.tiredness);
      console.log("happieness " + this.happieness);
      console.log("hunger " + this.hunger);
      clearInterval(this.timer);
      this.checking();
      return true;
    } else {
      return false;
    }
  }

  start(stopChecking){
    this.checking = stopChecking;

    this.timer = setInterval( () => {
      this.decreaseHappieness();
      this.increaseHunger();
      this.increaseTiredness();
      this.isDead();
    }, this.timerUnit);
  }
}
