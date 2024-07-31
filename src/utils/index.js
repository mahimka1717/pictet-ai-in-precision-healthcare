export function isValidUrl (urlString) {
	try { 
		return Boolean(new URL(urlString)); 
	}
	catch(e){ 
		return false; 
	}
}

export function getSections (){
	// return [6];
	return [1,2,3,4,5,6,7];
}