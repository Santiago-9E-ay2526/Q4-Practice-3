function lvlConfirm() {
     var lvlEntry = Number(document.getElementById('lvlId').value);

     switch (lvlEntry) {
          case 1:
               document.getElementById("lvlType").innerHTML = "Level: Easy Mode";
               break;
          case 2:
               document.getElementById("lvlType").innerHTML = "Level: Normal Mode";
               break;
          case 3:
               document.getElementById("lvlType").innerHTML = "Level: Hard Mode";
               break;
          default:
               window.alert("Invalid Section Number");
     }

}