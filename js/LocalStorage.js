var numLinks = 0;

function loadPage(){
if (typeof(Storage)!== "undefined") {
	if(localStorage.getItem("version") == "2.1"){
		loadBG();
		buildDescrip();
		buildShortcuts();
	}else{
		establishLocalStore();
		loadBG();
		buildDescrip();
		buildShortcuts();
		location.reload();
	}

} else {
   noStoreAvail();
   document.getElementById("settings").style.display = "none";
}
 }

function noStoreAvail(){
	//build shortcuts
	addShortcut("Youtube","https://www.youtube.com");
	addShortcut("Gitlab","https://gitlab.cas.mcmaster.ca");
	addShortcut("Github","https://github.com");
	addShortcut("Gmail","https://mail.google.com");
	addShortcut("Facebook","https://www.facebook.com");
	addShortcut("Avenue","http://avenue.mcmaster.ca");
	addShortcut("Mosaic","https://epprd.mcmaster.ca/psp/prepprd/?cmd=login");
	addShortcut("OscarPlus","https://www.oscarplusmcmaster.ca/home.htm");
	addShortcut("Weather","https://www.theweathernetwork.com/ca/weather/ontario/hamilton");
	addShortcut("Linkedin","https://www.linkedin.com");
	addShortcut("Mega","https://mega.nz");
	addShortcut("Dropbox","https://www.dropbox.com");
	addShortcut("GoogleDrive","https://drive.google.com/drive/my-drive");
	addShortcut("Bitly","http://bitly.com");

	//set Links
	var parent = document.getElementById("classInfo");

	var i1 = document.createElement("a");
	i1.href = "https://avenue.cllmcmaster.ca/d2l/home/189241";
	i1.innerHTML =  "SWFR ENG 3I03";

	var i2 = document.createElement("a");
	i2.href = "https://avenue.cllmcmaster.ca/d2l/home/185905";
	i2.innerHTML =  "ENG ECON 2B03";

	var i3 = document.createElement("a");
	i3.href = "https://avenue.cllmcmaster.ca/d2l/home/196496";
	i3.innerHTML =  "SWFR ENG 3A04";

	var i4 = document.createElement("a");
	i4.href = "https://avenue.cllmcmaster.ca/d2l/home/202806";
	i4.innerHTML =  "SWFR ENG 3S03";

	parent.appendChild(i1);
	parent.appendChild(document.createElement("br"));
	parent.appendChild(i2);
	parent.appendChild(document.createElement("br"));
	parent.appendChild(i3);
	parent.appendChild(document.createElement("br"));
	parent.appendChild(i4);

	backgroundSet("./BG/WallFall.jpg");
}

function backgroundSet(url){
	var body = document.getElementsByTagName("body");
	var newinfo = "";// body[0].style;
	newinfo += " "+"background-image: url('"+url+"'); background-size: cover; background-repeat: no-repeat;";
	body[0].setAttribute("style",newinfo);// = newinfo;
	console.log(newinfo);
}
function addShortcut(shortName,shortURL){
	var parent = document.getElementById("shortcut");
	var shortcutlink = document.createElement("a");
	shortcutlink.href = shortURL;
	var shortcut = new Image();
   	shortcut.width = "10%";
   	var srcStr = ("./Icons/"+shortName+".png");
   	shortcut.src = srcStr;
   		
   	shortcut.className += "shortcut";
   	shortcutlink.appendChild(shortcut);
   	parent.appendChild(shortcutlink);
}

function establishLocalStore(){
	localStorage.setItem("NumPos","14");
	localStorage.setItem("version", "2.1");

	localStorage.setItem("ShortcutValue1", "true");
	localStorage.setItem("ShortcutName1", "Youtube");
	localStorage.setItem("ShortcutURL1", "https://www.youtube.com");

	localStorage.setItem("ShortcutValue2", "true");
	localStorage.setItem("ShortcutName2", "Gitlab");
	localStorage.setItem("ShortcutURL2", "https://gitlab.cas.mcmaster.ca");

	localStorage.setItem("ShortcutValue3", "true");
	localStorage.setItem("ShortcutName3", "Github");
	localStorage.setItem("ShortcutURL3", "https://github.com");

	localStorage.setItem("ShortcutValue4", "true");
	localStorage.setItem("ShortcutName4", "Gmail");
	localStorage.setItem("ShortcutURL4", "https://mail.google.com");

	localStorage.setItem("ShortcutValue5", "true");
	localStorage.setItem("ShortcutName5", "Facebook");
	localStorage.setItem("ShortcutURL5", "https://www.facebook.com");

	localStorage.setItem("ShortcutValue6", "true");
	localStorage.setItem("ShortcutName6", "Avenue");
	localStorage.setItem("ShortcutURL6", "http://avenue.mcmaster.ca");

	localStorage.setItem("ShortcutValue7", "true");
	localStorage.setItem("ShortcutName7", "Mosaic");
	localStorage.setItem("ShortcutURL7", "https://epprd.mcmaster.ca/psp/prepprd/?cmd=login");

	localStorage.setItem("ShortcutValue8", "true");
	localStorage.setItem("ShortcutName8", "OscarPlus");
	localStorage.setItem("ShortcutURL8", "https://www.oscarplusmcmaster.ca/home.htm");

	localStorage.setItem("ShortcutValue9", "true");
	localStorage.setItem("ShortcutName9", "Weather");
	localStorage.setItem("ShortcutURL9", "https://www.theweathernetwork.com/ca/weather/ontario/hamilton");

	localStorage.setItem("ShortcutValue10", "true");
	localStorage.setItem("ShortcutName10", "Linkedin");
	localStorage.setItem("ShortcutURL10", "https://www.linkedin.com");

	localStorage.setItem("ShortcutValue11", "true");
	localStorage.setItem("ShortcutName11", "Mega");
	localStorage.setItem("ShortcutURL11", "https://mega.nz");

	localStorage.setItem("ShortcutValue12", "true");
	localStorage.setItem("ShortcutName12", "Dropbox");
	localStorage.setItem("ShortcutURL12", "https://www.dropbox.com");

	localStorage.setItem("ShortcutValue13", "true");
	localStorage.setItem("ShortcutName13", "GoogleDrive");
	localStorage.setItem("ShortcutURL13", "https://drive.google.com/drive/my-drive");

	localStorage.setItem("ShortcutValue14", "true");
	localStorage.setItem("ShortcutName14", "Bitly");
	localStorage.setItem("ShortcutURL14", "http://bitly.com");


	//
	//   LINKS IN HEADER
	//
	localStorage.setItem("NumLinks","4");

	localStorage.setItem("LinkName1", "SWFR ENG 3I03");
	localStorage.setItem("LinkURL1", "https://avenue.cllmcmaster.ca/d2l/home/189241");

	localStorage.setItem("LinkName2", "ENG ECON 2B03");
	localStorage.setItem("LinkURL2", "https://avenue.cllmcmaster.ca/d2l/home/185905");

	localStorage.setItem("LinkName3", "SWFR ENG 3A04");
	localStorage.setItem("LinkURL3", "https://avenue.cllmcmaster.ca/d2l/home/196496");

	localStorage.setItem("LinkName4", "SWFR ENG 3S03");
	localStorage.setItem("LinkURL4", "https://avenue.cllmcmaster.ca/d2l/home/202806");

	//
	//  DEFAULTS
	//

	localStorage.setItem("Background","./BG/Default.jpg");
}

function loadBG() {
	var mystore = localStorage;
	var bg = mystore.getItem("Background");
	backgroundSet(bg);
}

function buildShortcuts(){
	var mystore = localStorage;
	var numLinks = parseInt(mystore.getItem("NumPos"),10);

	//build shortcuts
	var parent = document.getElementById("shortcut");
	for (i = 1; i < (numLinks+1); i++){

		console.log("addShortcut(\""+mystore.getItem("ShortcutName"+i)+"\",\""+mystore.getItem("ShortcutURL"+i)+"\"\);");

		if ((mystore.getItem("ShortcutValue"+i) != "true")){
			continue;
		}
		var shortcutlink = document.createElement("a");
		shortcutlink.href = mystore.getItem("ShortcutURL"+i);
		var shortcut = new Image();
   		shortcut.width = "10%";
   		var srcStr = ("./Icons/"+mystore.getItem("ShortcutName"+i)+".png");
   		shortcut.src = srcStr;
   		
   		shortcut.className += "shortcut";
   		shortcutlink.appendChild(shortcut);
   		parent.appendChild(shortcutlink);
	}
}

function buildDescrip(){
	var mystore = localStorage;
	var numLinks = parseInt(mystore.getItem("NumLinks"),10);

	//build shortcuts
	var parent = document.getElementById("classInfo");
	for (i = 1; i < (numLinks+1); i++){


		var link = document.createElement("a");
		link.href = mystore.getItem("LinkURL"+i);
		link.innerHTML = mystore.getItem("LinkName"+i);

		parent.appendChild(link);
		parent.appendChild(document.createElement("br"));
	}
}

function buildEdit(){
	var mystore = localStorage;
	var numLinks = parseInt(mystore.getItem("NumPos"),10);
	

	//<input type="checkbox" id="test5" checked="checked" />
    //<label for="test5">Red

	//build shortcuts
	var parent = document.getElementById("shortcutEdit");
	for (i = 1; i < (numLinks+1); i++){
		var breaker = document.createElement("br");
		var shortcutlink = document.createElement("input");
		shortcutlink.setAttribute('type',"checkbox");
		shortcutlink.setAttribute('id',""+i);
		shortcutlink.checked = (mystore.getItem("ShortcutValue"+i) == "true");
		var shortcutLabel = document.createElement("label");
		shortcutLabel.setAttribute('for',""+i);
		shortcutLabel.innerHTML = mystore.getItem("ShortcutName"+i);
		parent.appendChild(shortcutlink);
   		parent.appendChild(shortcutLabel);
   		parent.appendChild(breaker);
	}

	var numLinks = parseInt(mystore.getItem("NumLinks"),10);


	//build shortcuts
	var parent = document.getElementById("pageDisp");


	var table = document.createElement("ul");
	table.setAttribute("class", "collection");
	table.setAttribute("id", "DECRIPTABLE");

	for (var i = 1; i < (numLinks+1); i++){

		var row = document.createElement("li");
		row.setAttribute("id","decrip"+i)
		row.setAttribute("class", "collection-item avatar");

		var doStuff = document.createElement("ul");
		doStuff.setAttribute("id","doStuff"+i)



		var edit = document.createElement("i");
		edit.setAttribute("class", "waves-effect waves-light material-icons circle blue");
		edit.innerHTML = "lock_open";
		edit.setAttribute("id",""+i)
		edit.setAttribute("onclick", "decripMod(this)");


		var content = document.createElement("p");
		content.setAttribute("class","DATADESCRIP");
		content.setAttribute("id",""+i);

		var breaker = document.createElement("br");

		var info1pre = document.createElement("a");
		info1pre.setAttribute("class", "greyText");
		info1pre.innerHTML = "Name: ";

		var info1Cont = document.createElement("span");
		info1Cont.setAttribute("id", "info1Cont"+i);
		info1Cont.setAttribute("class", "MinStuff");

		var info1 = document.createElement("a");
		info1.setAttribute("class", "greyText info1");
		info1.setAttribute("id", "info1"+i);
		info1.innerHTML = mystore.getItem("LinkName"+i);



		var info2pre = document.createElement("a");
		info2pre.setAttribute("class", "greyText");
		info2pre.innerHTML = "URL: ";

		var info2Cont = document.createElement("span");
		info2Cont.setAttribute("id", "info2Cont"+i);
		info2Cont.setAttribute("class", "MinStuff");

		var info2 = document.createElement("a");
		info2.setAttribute("class", "greyText info2");
		info2.setAttribute("id", "info2"+i);
		info2.innerHTML =   mystore.getItem("LinkURL"+i);


		info1Cont.appendChild(info1);
		info2Cont.appendChild(info2);

		content.appendChild(info1pre);
		content.appendChild(info1Cont);
		content.appendChild(breaker);
		content.appendChild(info2pre);
		content.appendChild(info2Cont);

		doStuff.appendChild(edit);

		row.appendChild(doStuff);
		row.appendChild(content);

		table.appendChild(row);
	}

	var row = document.createElement("li");
	row.setAttribute("id","rowNEW")
	row.setAttribute("class", "collection-item avatar");

	var edit = document.createElement("i");
	edit.setAttribute("class", "waves-effect waves-light material-icons circle blue");
	edit.innerHTML = "playlist_add";
	edit.setAttribute("id","NEW");
	edit.setAttribute("onclick", "descripAdd(this)");

	var content = document.createElement("h5");

	content.setAttribute("class", "Title greyText");
	content.innerHTML = "ADD ANOTHER LINK";

	row.appendChild(edit);
	row.appendChild(content);

	table.appendChild(row);

	parent.appendChild(table);
}

function deleteThis(i){
console.log(i);
	var table = document.getElementById("DECRIPTABLE");

	removeItem = document.getElementById("modify"+i.id);
	table.removeChild(removeItem);
console.log(removeItem);
}

function decripMod(i) {
	console.log(i.id);

	console.log(i.id);
	var row = document.getElementById("decrip"+i.id);
	row.setAttribute("id","modify"+i.id);
    row.classList.add("modify");

	var cont1 = document.getElementById("info1Cont"+i.id);
	var cont2 = document.getElementById("info2Cont"+i.id);

	var info1Click = document.getElementById("info1"+i.id);
	var info2Click = document.getElementById("info2"+i.id);

	cont1.removeChild(info1Click);
	cont2.removeChild(info2Click);

	var info1 = document.createElement("input");
	info1.setAttribute("class", "greyText");
	info1.setAttribute("name", "LinkName");
	info1.setAttribute("id", "info1"+i.id);
	info1.setAttribute("value", info1Click.innerHTML);


	var info2 = document.createElement("input");
	info2.setAttribute("class", "greyText");
	info2.setAttribute("name", "LinkName");
	info2.setAttribute("id", "info2"+i.id);
	info2.setAttribute("value", info2Click.innerHTML);

	cont1.appendChild(info1);
	cont2.appendChild(info2);

	var removeItem = document.createElement("li");
	removeItem.setAttribute("class", "btn-floating blue");
	removeItem.setAttribute("id",""+i.id);
	removeItem.setAttribute("onclick", "deleteThis(this)")

	var removeItemIcon = document.createElement("i");
	removeItemIcon.setAttribute("class", "material-icons delete");
	removeItemIcon.innerHTML = "delete";
	removeItemIcon.setAttribute("id",""+i.id)
	removeItemIcon.setAttribute("onclick", "deleteThis(this)");



	removeItem.appendChild(removeItemIcon);

	document.getElementById("doStuff"+i.id).appendChild(removeItem);


	i.innerHTML = "lock_outline";

	i.setAttribute("onclick", "decripModed(this)");
}

function decripModed(i){
	console.log(i.id);

	console.log(i.id);
	var row = document.getElementById("modify"+i.id);
	console.log(row);
	row.setAttribute("id","decrip"+i.id);
	row.classList.remove("modify");

	var removeDeleteHolder = document.getElementById("doStuff"+i.id);
	removeDeleteHolder.removeChild(removeDeleteHolder.querySelectorAll("li")[0]);

	document.getElementsByClassName("DATADESCRIP");

	var cont1 = document.getElementById("info1Cont"+i.id);
	var cont2 = document.getElementById("info2Cont"+i.id);

	var info1Click = document.getElementById("info1"+i.id);
	var info2Click = document.getElementById("info2"+i.id);
	console.log(info1Click);

	cont1.removeChild(info1Click);
	cont2.removeChild(info2Click);

	var info1 = document.createElement("a");
	info1.setAttribute("class", "greyText info1");
	info1.setAttribute("id", "info1"+i.id);
	info1.innerHTML = info1Click.value;

	var info2 = document.createElement("a");
	info2.setAttribute("class", "greyText info2");
	info2.setAttribute("id", "info2"+i.id);
	info2.innerHTML = info2Click.value;

	cont1.appendChild(info1);
	cont2.appendChild(info2);

	i.innerHTML = "lock_open";
	i.setAttribute("class", "waves-effect waves-light material-icons circle blue");

	i.setAttribute("onclick", "decripMod(this)");
}

function descripAdd(i) {

	var mystore = localStorage;
	var data = document.getElementById("DECRIPTABLE").querySelectorAll(".DATADESCRIP");
	var numLinks = data.length;
	console.log(numLinks);

	console.log(i.id);
	var table = document.getElementById("DECRIPTABLE");
	var newRow = document.getElementById("rowNEW");

	table.removeChild(newRow);

	var row = document.createElement("li");
	row.setAttribute("id","modify"+(numLinks+1));
	row.setAttribute("class", "collection-item avatar");
	row.classList.add("modify");

		var doStuff = document.createElement("ul");
		doStuff.setAttribute("id","doStuff"+(numLinks+1));

	var edit = document.createElement("i");
	edit.setAttribute("class", "waves-effect waves-light material-icons circle red");
	edit.innerHTML = "lock_outline";
	edit.setAttribute("id",""+(numLinks+1));
	edit.setAttribute("onclick", "decripModed(this)");

	var content = document.createElement("p");
	content.setAttribute("class","DATADESCRIP");
	content.setAttribute("id",""+(numLinks+1));

	var breaker = document.createElement("br");

	var info1pre = document.createElement("a");
	info1pre.setAttribute("class", "greyText");
	info1pre.innerHTML = "Name: ";

	var info1Cont = document.createElement("span");
	info1Cont.setAttribute("id", "info1Cont"+(numLinks+1));
	info1Cont.setAttribute("class", "MinStuff");

	var info1 = document.createElement("input");
	info1.setAttribute("class", "greyText info1");
	info1.setAttribute("name", "LinkName");
	info1.setAttribute("placeholder", "Google")
	info1.setAttribute("id", "info1"+(numLinks+1));

	var info2pre = document.createElement("a");
	info2pre.setAttribute("class", "greyText");
	info2pre.innerHTML = "URL: ";

	var info2Cont = document.createElement("span");
	info2Cont.setAttribute("id", "info2Cont"+(numLinks+1));
	info2Cont.setAttribute("class", "MinStuff");

	var info2 = document.createElement("input");
	info2.setAttribute("class", "greyText info2");
	info2.setAttribute("name", "LinkName");
	info2.setAttribute("placeholder", "https://www.google.com");
	info2.setAttribute("id", "info2"+(numLinks+1));

	var removeItem = document.createElement("li");
	removeItem.setAttribute("class", "btn-floating red");
	removeItem.setAttribute("id",""+(numLinks+1));
	removeItem.setAttribute("onclick", "deleteThis(this)")

	var removeItemIcon = document.createElement("i");
	removeItemIcon.setAttribute("class", "material-icons delete");
	removeItemIcon.innerHTML = "delete";
	removeItemIcon.setAttribute("id",""+(numLinks+1))
	removeItemIcon.setAttribute("onclick", "deleteThis(this)");



	removeItem.appendChild(removeItemIcon);


	info1Cont.appendChild(info1);
	info2Cont.appendChild(info2);

	content.appendChild(info1pre);
	content.appendChild(info1Cont);
	content.appendChild(breaker);
	content.appendChild(info2pre);
	content.appendChild(info2Cont);

	doStuff.appendChild(edit);
	doStuff.appendChild(removeItem);
	row.appendChild(doStuff);
	row.appendChild(content);

	table.appendChild(row);
	table.appendChild(newRow);
	numLinks++;
}

function saveShortcuts(){
	var mystore = localStorage;
	var numLinks = parseInt(mystore.getItem("NumPos"),10);
	for (i = 1; i < (numLinks+1); i++){
		var tmp =  document.getElementById(""+i);
		mystore.setItem("ShortcutValue"+i,tmp.checked);
	}
	location.reload();
}

function saveDescrip() {
	var mystore = localStorage;
	var numLinks = parseInt(mystore.getItem("NumLinks"), 10);

	var check = document.getElementById("DECRIPTABLE").querySelector(".modify");
	console.log(check);
	if (!check) {


		var table = document.getElementById("DECRIPTABLE");
		var data = document.getElementById("DECRIPTABLE").querySelectorAll(".DATADESCRIP");
		console.log(data[0].querySelector(".info1"));

		for (var i = 1; i < (numLinks + 1); i++) {
			localStorage.removeItem("LinkName" + i);
			localStorage.removeItem("LinkURL" + i);
		}
		localStorage.removeItem("NumLinks");

		for (var i = 0; i < data.length; i++) {
			localStorage.setItem("LinkName" + (i + 1), data[i].querySelector(".info1").innerHTML);
			localStorage.setItem("LinkURL" + (i + 1), data[i].querySelector(".info2").innerHTML);
		}
		localStorage.setItem("NumLinks", "" + data.length);
	    location.reload();
	} else {
		window.alert("Lock All Changes Before Saving");
	}
}

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
	  $('#modal2').modal();
  });

  function launchModal(){
  	$('#modal1').modal();
	  $('#modal2').modal();
  }


