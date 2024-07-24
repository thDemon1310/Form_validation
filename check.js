// ----------------passward---------------------
function password_check() {
  var password = document.getElementById("password").value;
  var j = 0;
  if (password.length == 0) {
    // console.log("Please enter the passward");
    document.getElementById("password_message").innerHTML =
      "<span style='color: red;'>* Please enter the password</span>";
  } else if (password.length < 8) {
    // console.log("passward requires min. 8 latters");
    document.getElementById("password_message").innerHTML =
      "<span style='color: red;'>* passward requires min. 8 latters</span>";
      return 0;
  } else {
    for (let i = 0; i < password.length; i++) {
      if (password[i] == " ") {
        // console.log("please dont enter space in password");
        document.getElementById("password_message").innerHTML =
          "<span style='color: red;'>* please dont enter space in password</span>";
          return 0;
      } else {
        j++;
      }
    }
    if (j == password.length && j != 0) {
      // console.log("passward syntex is correct");
      document.getElementById("password_message").innerHTML =
        "<span style='color: green;'>passward syntex is correct</span>";
        return 1;
    }
  }
}

// ------------------email--------------------------
function email_check() {
  var email = document.getElementById("email").value;
  var j = (m = 0);
  var validdomain = ["gmail.com", "yahoo.com", "outlook.com", "mail.com"];
  var emailpart = [];
  emailpart = email.split("@");
  localpart = emailpart[0];
  domainpart = emailpart[1];
  console.log(emailpart, localpart, domainpart);
  if (emailpart.length == 1) {
    // console.log("Your Email syntax is incorrect it has no @");
    document.getElementById("email_message").innerHTML="<span style='color: red'>* Your Email syntax is incorrect it has no @</span>";
    return 0;
  } else if (emailpart.length > 2) {
    // console.log("your email syntax is incorrect it has more then one @");
    document.getElementById("email_message").innerHTML="<span style='color: red'>* your email syntax is incorrect it has more then one @</span>";
    return 0;
  } else if (localpart.length == 0 || domainpart == 0) {
    // console.log("Please enter your email");
    document.getElementById("email_message").innerHTML="<span style='color: red'>* Please enter your email</span>";
  } else {
    for (let i = 0; i < localpart.length; i++) {
      if (
        localpart[0] == "_" ||
        localpart[0] == "-" ||
        localpart[0] == "." ||
        (localpart[0] >= "0" && localpart[0] <= "9") ||
        (localpart[i] >= "A" && localpart[i] <= "Z") ||
        localpart[i] == " "
      ) 
      {
        console.log("Working");
        document.getElementById("email_message").innerHTML="<span style='color: red'>* Your Email syntax is incorrect</span>";
        return 0
      } else if (
        (localpart[i] >= "a" && localpart[i] <= "z") ||
        (localpart[i] >= "0" && localpart[i] <= "9") ||
        localpart[i] == "_" ||
        localpart[i] == "."
      ) {
        j++;
      }
    }
    for (let k = 0; k < validdomain.length; k++) {
      if (validdomain[k] == domainpart) {
        m++;
      }
    }
    if (m == 1 && j== localpart.length) {
      // console.log("Your email syntax is correct");
      document.getElementById("email_message").innerHTML="<span style='color: green'> Your email syntax is correct</span>";
      return 1;
    } else {
      // console.log("Your email syntax is invalid");
      document.getElementById("email_message").innerHTML="<span style='color: red'>* Your Email domian is invalid</span>";
      return 0;
    }
  }
}

// ------------------name------------------------
function name_check() {
  var uname = document.getElementById("uname").value;
  var j = 0;

  // console.log(uname);
  if (uname.length == 0) {
    document.getElementById("name_message").innerHTML =
      "<span style='color:red;'>* Please enter your name</span>";
  } else {
    for (let i = 0; i < uname.length; i++) {
      password_message;
      if (
        (uname[i] >= "a" && uname[i] <= "z") ||
        (uname[i] >= "A" && uname[i] <= "Z") ||
        uname[i] == " "
      ) {
        j++;
      } else {
        break;
      }
    }
    if (j == uname.length) {
      // console.log("Your name syntax is correct");
      document.getElementById("name_message").innerHTML =
        "<span style='color: green;'>Your name syntax is correct</span>";
        return 1;
    } else {
      document.getElementById("name_message").innerHTML =
        "<span style='color: red;'>* Please remove number from name</span>";
        return 0;
    }
  }
}

// --------------------contact-----------------------
function contact_check() {
  var contect = document.getElementById("contact").value;
  var j = 0;
  console.log(contect);
  if (contect.length < 10) {
    // console.log("Please Enter your correct no.");
    document.getElementById("contact_massage").innerHTML =
      "<span style='color: red;'>* The no. should contain 10 letters</span>";
      return 0;
  } else {
    for (let i = 0; i < 10; i++) {
      if (
        contect[i] >= "1" &&
        contect[i] <= "9" &&
        contect[0] >= "6" &&
        contect[0] <= "9"
      ) {
        j++;
      } else {
        // console.log("Please Enter your correct no.");

        // document.getElementById("contact_massage").innerHTML="Nouber syntex is not correct".style.color="red"; // this syntax is wrong

        // document.getElementById("contact_massage").innerHTML="<style: color: red>"+"Number syntex is not correct"+"</style>" // this syntax is also not correct
        document.getElementById("contact_massage").innerHTML =
          "<span style='color: red;'>Number syntax is not correct</span>";
        return 0;
      }
    }
    if (j == contect.length) {
      // console.log("No. syntex is correct");
      document.getElementById("contact_massage").innerHTML =
        "<span style='color: green;'>Number syntex is correct</span>";
        return 1;
    }
  }
}
// ================Submit============
function submit_check() {
var pr,er,nr,cr;
pr=password_check();
er=email_check();
nr=name_check();
cr=contact_check();
if (pr == 0 || er == 0 || nr == 0 || cr == 0) {
  // console.log("The passwad syntax is wrong");
  document.getElementById("submit").disabled=true;
}
else{
  document.getElementById("submit").disabled=false;
}
}