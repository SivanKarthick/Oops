function CreateClass() {
	this.myname = 1;
}

function createElemts(elementType,typeAttr,nameAttr) {
	var elem = document.createElement(elementType);
	elem.type = typeAttr;
	elem.name = nameAttr;
	if(typeAttr === "text" || typeAttr === "email") {
		divtag = document.createElement('div');
		labeltag = document.createElement('label');
		labeltag.innerHTML = nameAttr;
		divtag.appendChild(labeltag);
		divtag.appendChild(elem);
		divtag.className = "row";
		elem = divtag;
	}
	if(typeAttr === "button") {
		elem.value = nameAttr;
		elem.className = nameAttr;
	}
	return elem;
}

CreateClass.prototype.create = function() {
	var formElem, fName, lName;
	formElem = createElemts('form','','simpleForm');
	fName = createElemts('input','text','First Name');
	lName = createElemts('input','text','Last Name');
	eMail = createElemts('input','email','E Mail');
	submitbut = createElemts('input','button','Submit'); 
	formElem.appendChild(fName);
	formElem.appendChild(lName);
	formElem.appendChild(eMail);
	formElem.appendChild(submitbut);
	document.body.appendChild(formElem);
	submitbut.addEventListener('click',Validate,false);
	
}

function Validate() {	
	var vali = new Validation();
	vali.validationAll();
}