
import $ from 'jquery';

export class Tamagotchi {
  constructor(name) {
    this.name = name,
    this.foodLevel = 10
  }

setPopUp() {
  setTimeout(() => {
    $("#popUp").show();
  }, 2000);
  setTimeout(() => {
    $("#popUp").hide();
  }, 4000);
}

setHunger() {
  setInterval(() => {
    this.foodLevel--;
  }, 1000);
}

feed() {
  this.foodLevel = 10;
}

updateStatus(){
  setInterval(() => {
    $("#yourPetHunger").text(this.foodLevel);
    if (this.foodLevel === -10) {
      $("#hideMe").hide();
      $("#end").show();
    }else if (this.foodLevel <= -5) {
      $("#starving").show();
      $("#feedMe").hide();
    }else if (this.foodLevel > 0) {
      $("#feedMe").hide();
      $("#starving").hide();
    }else if(this.foodLevel <= 0){
      $("#feedMe").show();
    }else {
      return this.foodLevel;
    }
  }, 50);
}

}
