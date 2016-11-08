function check(){
	var fileInShortcuts = "Shortcuts.txt"
	var fileInLinks = "ShortcutLinks.txt"
	$.get(fileInShortcuts, function(data) {
		$.get(fileInLinks, function(dataLinks) {
			var dataByLine = data.split("\n")
			var dataLinksByLine = dataLinks.split("\n")
			console.log(dataByLine[0].split("=")[0]+"|");
			var parent = document.getElementById("shortcut");

			for (i =0; i < dataByLine.length; i++){
				try{

					
   			/*if (dataByLine[i].split("=")[1].trim().toLowerCase() == "false"){
   				child = document.getElementById(dataByLine[i].split("=")[0].trim());
   				child.parentNode.removeChild(child);
   			}*/
   			
   			if (dataByLine[i].split("=")[1].trim().toLowerCase() == "true"){
   				var shortcutlink = document.createElement("a");
   				console.log(dataLinksByLine[i].trim());
   				shortcutlink.href = dataLinksByLine[i].trim();
   				var shortcut = new Image();
   				shortcut.width = "10%";
   				var srcStr = ("./Icons/"+dataByLine[i].split("=")[0].trim()+".png");
   				shortcut.src = srcStr;
   				shortcut.onload = function()
   				{

   				}
   				shortcut.className += "shortcut";
   				shortcutlink.appendChild(shortcut);
   				parent.appendChild(shortcutlink);

   			}
   		}catch(e){
   			console.log(e);
   		}
   	}
   }, 'text');
	}, 'text');


}

$( document ).ready(function() {
	console.log( "ready!" );
	check();
});