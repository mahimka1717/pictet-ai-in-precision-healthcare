var nm = `@name`;
var domain = `@domain`;
var subdomain = domain + `/` + nm + `/`;
var embededHtml = `@html`

var scripts = [`index`];
var styles = [`index`];

var ag = document.getElementById(`ag-infographic`);
if(ag){
	
	ag.style.opacity = 0;

	for (var style of styles) {
		var lp = document.createElement(`link`);
		lp.rel=`preload`;
		lp.as=`style`;
		lp.href=subdomain+style+`.css`

		var ls = document.createElement(`link`);
		ls.rel=`stylesheet`;
		ls.href=subdomain+style+`.css`

		document.head.appendChild(lp);
		document.head.appendChild(ls);
	}

	for (var script of scripts) {

		var sc = document.createElement(`script`);
		sc.src = subdomain+script+`.js`;
		sc.async = true;
		document.body.appendChild(sc);
	}

	ag.innerHTML = embededHtml;

} 