/* Javascript support for IEEE754 conversion *
 * 
 * (c) 2012-2013 by Harald Schmidt
 * 
 */

// defer updates by this ms to avoid sending too many requests to the server:
var updateDelay = 1;

// store the handler ID for the timeout, allowing to cancel it when another change occurs:
var requestHandlerTimeoutId;

// parameters of the last update being performed:
var pendingUpdate = "";

// update triggers a delayed update request.
// if another update is pending, that update is canceled.
// otherwise a timeout is registered to start the update in "updateDelay" ms (to 
// reduce number of server request when changing a value quickly).
// The update itself is executed by the realUpdate() function.
function update(changeparam) {
  if (requestHandlerTimeoutId !== undefined) {
    window.clearTimeout(requestHandlerTimeoutId);
    requestHandlerTimeoutId = undefined;
  }
  // remeber the value which is being asked for
  // to identify if a new server answer is the correct
  // one for the last sent request:
  pendingUpdate = changeparam;

  requestHandlerTimeoutId = window.setTimeout(function tmp() { realUpdate(changeparam); }, 0);
}

// actually perform the display update.
// Updates are performed by inserting a reference to a piece of javascript
// which is loaded from the server. Parameters are passed by adding them to the URL as 
// a parameter.
function realUpdate(changeparam) {
  requestHandlerTimeoutId = undefined;
  // being primitive here: just create new script node and load its content from server:
  var newScript = document.createElement("script");
  newScript.src = "binary.py?" + changeparam;
  document.body.appendChild(newScript);
}

// this function is called whenever the binary field is being changed.
// It transforms the checkbox-status into a string containing "0" and "1"
// and calls update() to request an update of the other displays.
function binaryChanged() {
  function getCheckboxValue(elemid) {
    if (window.document.getElementById(elemid).checked) {
      return "1";
    } else {
      return "0";
    }
  }
  var binaryValues = "";
  binaryValues += getCheckboxValue('cbsign');
  for (var i = 0; i < 8; i++) {
    binaryValues += getCheckboxValue('cbexp' + i);
  }
  for (var i = 0; i < 23; i++) {
    binaryValues += getCheckboxValue('cbmant' + i);
  }
  update("binary=" + binaryValues);
}

// function being called when the binary textfield was changed.
// does some sanity checks and requests an update.
function binaryTextfieldChanged() {
  binaryTextfield = window.document.getElementById("binary").value;
  for (var i = 0; i < binaryTextfield.length; i++) {
    if (binaryTextfield.charAt(i) != "0" && binaryTextfield.charAt(i) != "1") {
      // TODO: print error message somewhere on page
      return;
    }
  }
  while (binaryTextfield.length < 32) {
    binaryTextfield = "0" + binaryTextfield;
  }
  if (binaryTextfield.length > 32) {
    // error
    return;
  }
  update("binary=" + binaryTextfield);
}

// function being called when the decimal textfield was changed.
function decimalChanged() {
  update("decimal=" + window.document.getElementById("decimal").value);
}

// function being called when the hex textfield was changed.
function hexChanged() {
  update("hexadecimal=" + window.document.getElementById("hexadecimal").value);
}

// declare helper functions for updateDisplay()
function setElement(elemid, value) {
  window.document.getElementById(elemid).innerHTML = value;
}
function setCheckbox(checkboxid, value) {
  window.document.getElementById(checkboxid).checked = value;
}
function setTextField(textfieldid, value) {
  window.document.getElementById(textfieldid).value = value;
}

// updateDisplay() changes all display elements to reflect the values passed
// in the values object,
function updateDisplay(values) {
  // first thing to do is check whether the values here are still relevant
  // to the user, i.e. if the last input matches the values:
  if (pendingUpdate != "" && values.updateid != pendingUpdate) {
    window.dump("Update out of date: " + pendingUpdate + "/" + values.updateid + "\n");
    return;
  }
  
  // now update display elements with new values:
  setElement('actual_sign',     values.actual_sign);
  setElement('actual_exponent', values.actual_exponent);
  setElement('actual_mantissa', values.actual_mantissa);
  
  setElement('sign_value',     values.sign_value);
  setElement('exponent_value', values.exponent_value);
  setElement('mantissa_value', values.mantissa_value);

  setCheckbox('cbsign', values.sign_bool);
  for (var i = 0; i < 8; i++) {
    setCheckbox('cbexp'+i, values.exponent_array[i]);
  }
  for (var i = 0; i < 23; i++) {
    setCheckbox('cbmant'+i, values.mantisse_array[i]);
  }
  setTextField('binary', values.binaryRepr);
  setTextField('hexadecimal', values.hexadecimalRepr);
  setTextField('decimal', values.decimalRepr);
  setTextField('doubleprecision', values.doubleprecisionRepr);
  setElement('convstatus', values.infomessage);
}