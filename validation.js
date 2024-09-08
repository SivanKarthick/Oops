var $ = this, fName = "", lName = "", eMail = "";
function charValidation(inputString) {
	inputString = inputString.trim();
	if(inputString.search(/[^a-zA-Z ]/g) != -1) {
		return false;
	} else {
		return true;
	}
}

function emailCheck(inputString) {
	var mailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (!mailcheck.test(inputString)) {
		return false;
	} else {
		return true;
	}
}

function Validation() {
	$.fName = document.simpleForm[0];
	$.lName = document.simpleForm[1];
	$.eMail = document.simpleForm[2];
}


Validation.prototype.validationAll = function () {
	//alert($.fName.value);
	
	if($.fName.value == "") {
		alert("Please Enter Your First Name");
		$.fName.focus();
		return false;
	} else if(!charValidation($.fName.value) || $.fName.value.length < 5) {
		alert("Please Enter Your Valid First Name");
		$.fName.focus();
		return false;
	} else if($.lName.value == "") {
		alert("Please Enter Your Last Name");
		$.lName.focus();
		return false;
	} else if(!charValidation($.lName.value) || $.lName.value.length < 5) {
		alert("Please Enter Your Valid Last Name");
		$.lName.focus();
		return false;
	} else if($.eMail.value == "") {
		alert("Please Enter Your Mail ID");
		$.eMail.focus();
		return false;
	} else if(!emailCheck($.eMail.value)) {
		alert("Please Enter Your Valid Mail ID");
		$.eMail.focus();
		return false;
	} else {
		alert("Success");
		return true;
	}
}