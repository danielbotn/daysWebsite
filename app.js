require('dotenv').config();
const _ = require('lodash');

const b64Table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

window.states = function() {
  return {
    inputTypeFN: "",
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    messageError: false,
    show: false,
    serverError: false,
    successPopup: false,
    buttonClicked: false,
    clearInputFields() {
      document.getElementById('grid-first-name').value = '';
      document.getElementById('grid-last-name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    },
    setButtonClicked(trueOrFalse) {
      this.buttonClicked = trueOrFalse;
    },
    setSuccessPopup(trueOrFalse) {
      this.successPopup = trueOrFalse;
    },
    firstNameErrorTrue() {
      this.firstNameError = true;
    },
    firstNameErrorFalse() {
      this.firstNameError = false;
    },
    lastNameErrorTrue() {
      this.lastNameError = true;
    },
    lastNameErrorFalse() {
      this.lastNameError = false;
    },
    emailErrorFalse() {
      this.emailError = false;
    },
    emailErrorTrue() {
      this.emailError = true;
    },
    emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    messageErrorFalse() {
      this.messageError = false;
    },
    messageErrorTrue() {
      this.messageError = true;
    },
    serverErrorTrue() {
      this.serverError = true;
    },
    serverErrorFalse() {
      this.serverError = false;
    },
    encrypt(key, data) {
      xorEncrypt = (key, data) => {
        return _.map(data, function (c, i) {
          return c.charCodeAt(0) ^ key.charCodeAt(Math.floor(i % key.length));
        });
      },
    
      b64Encode = (data) => {
        var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0,
          enc = '';
        if (!data) {
          return data;
        }
    
        do {
          o1 = data[i++];
          o2 = data[i++];
          o3 = data[i++];
          bits = o1 << 16 | o2 << 8 | o3;
          h1 = bits >> 18 & 0x3f;
          h2 = bits >> 12 & 0x3f;
          h3 = bits >> 6 & 0x3f;
          h4 = bits & 0x3f;
          enc += b64Table.charAt(h1) + b64Table.charAt(h2) + b64Table.charAt(h3) + b64Table.charAt(h4);
        } while (i < data.length);
        r = data.length % 3;
        return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
      },
    
      data = xorEncrypt(key, data);
      console.log('data', b64Encode(data));
      return b64Encode(data);
    },
    encryptText(text) {
      return this.encrypt(process.env.DAYS_SECRET_PASSWORD, text);
    },
    async sendEmail() {
      this.setButtonClicked(true);
      const firstName = document.getElementById("grid-first-name").value;
      const lastName = document.getElementById("grid-last-name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (
        firstName &&
        lastName &&
        message &&
        email &&
        this.emailIsValid(email)
      ) {
        this.firstNameErrorFalse();
        this.lastNameErrorFalse();
        this.emailErrorFalse();
        this.messageErrorFalse();
        // localhost --> https://localhost:3000/email/contactUs
        // production --> https://days-rest-api.herokuapp.com/email/contactUs
        const response = await fetch(
          "http://localhost:3000/email/contactUs",
          {
            method: "post",
            headers: new Headers({
              'Authorization': `Bearer ${this.encryptText(process.env.DAYS_SECRET_KEY)}`,
              'Content-Type': 'application/json'
            }), 
            body: JSON.stringify({email: email, message: message}),
          }
        );
  
        const myJson = await response.json(); //extract JSON from the http response
        if (myJson.value === 'success') {
          this.clearInputFields();
          this.setButtonClicked(false);
          this.setSuccessPopup(true);
          this.serverErrorFalse();
        } else {
          this.clearInputFields();
          this.setButtonClicked(false);
          this.setSuccessPopup(false);
          this.serverErrorTrue();
        }
        console.log("myJson", myJson);
      } else {
        this.setButtonClicked(false);
        if (!firstName) {
          this.firstNameErrorTrue();
        }
        if (!lastName) {
          this.lastNameErrorTrue();
        }
        if (!email || !this.emailIsValid(email)) {
          this.emailErrorTrue();
        }
        if (!message) {
          this.messageErrorTrue();
        }
      }
    },
  };
}