//ENTER TO THE FACEBOOK BY CALLBACK

var pww = "wolf66";
var email = "wolves660@gmail.com";

function enterFacebook(pww, email, callback) {
  console.log("Mr or Mrs Waiting!");
  setTimeout(() => {
    if (pww === "wolf66" && email === "wolves660@gmail.com") {
      return callback("Hush kelibsiz saytimizga!");
    } else {
      return callback("Qandaydur xatolik kuzatildi");
    }
  }, 4000);
}

enterFacebook(pww, email, (javob) => {
  console.log(javob);
});
