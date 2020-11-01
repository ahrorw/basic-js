const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isReverse) {
    this.isReverse = ((isReverse === true) || (isReverse === null) || (isReverse === undefined)) ? false : true;
  }

  encrypt(txtMsg, txtKey) {
    if ((txtMsg === undefined) || (txtKey === undefined)) throw new Error;

    let i;
    let y = 0;
    let msgLen = txtMsg.length; 
    let keyLen = txtKey.length; 
    let txtMsgUp = txtMsg.toUpperCase();
    let txtKeyUp = txtKey.repeat(Math.round(msgLen/keyLen + 1)).substring(0, msgLen).toUpperCase();
    let txtResult = '';
    let signKey;
    let signMsg;
    let signCode;

    for (i = 0; i < msgLen; i++){
      signKey = txtKeyUp[y];
      signMsg = txtMsgUp[i];

      if ((signMsg.charCodeAt(0) >= 65) && (signMsg.charCodeAt(0) <= 90)) {
        signCode = 65 + (signKey.charCodeAt(0) - 65) + (signMsg.charCodeAt(0) - 65);
        if (signCode > 90) signCode = signCode - 26;
        y++;

        txtResult += String.fromCharCode(signCode);
      } else {
        txtResult += signMsg;
      }
    }

    return  (!this.isReverse) ? txtResult : txtResult.split("").reverse().join("");
  }    




  decrypt(txtMsg, txtKey) {
    if ((txtMsg === undefined) || (txtKey === undefined)) throw new Error;

    let i;
    let y = 0;
    let msgLen = txtMsg.length; 
    let keyLen = txtKey.length; 
    let txtMsgUp = txtMsg.toUpperCase();
    let txtKeyUp = txtKey.repeat(Math.round(msgLen/keyLen + 1)).substring(0, msgLen).toUpperCase();
    let txtResult = '';
    let signKey;
    let signMsg;
    let signCode;

    for (i = 0; i < msgLen; i++){
      signKey = txtKeyUp[y];
      signMsg = txtMsgUp[i];

      if ((signMsg.charCodeAt(0) >= 65) && (signMsg.charCodeAt(0) <= 90)) {
        signCode = signMsg.charCodeAt(0) + 65 - signKey.charCodeAt(0);
        if (signCode < 65) signCode = signCode + 26;
        y++;  

        txtResult += String.fromCharCode(signCode);
      } else {
        txtResult += signMsg;
      }
    }

    return  (!this.isReverse) ? txtResult : txtResult.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;