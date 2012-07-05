var urlstr = window.location.host + window.location.pathname;
urlstr = urlstr.replace(/\//g, '.');
if (urlstr.substring(0,4) == 'www.') {
	urlstr = urlstr.substring(4);
}

var pagecounter = "";
var wtsp ="";
var wtcgn ="";
var wtcgs ="";
var category = "";
var wtTag = document.getElementsByTagName("meta");
for (var i = 0; i<wtTag.length; i++){
	if (wtTag[i].name == 'WT.sp'){
		wtsp = wtTag[i].content;}
	if (wtTag[i].name == 'WT.cg_n'){
		wtcgn = wtTag[i].content;}
	if (wtTag[i].name == 'WT.cg_s'){
		wtcgs = wtTag[i].content;}
}
if(wtsp!=="" && wtcgn!==""){
	
	if(wtsp.length !==0 ){
		category = category + wtsp;
	}
	if(wtcgn.length !==0 ){
		category = category + "." + wtcgn;
	}
	if(wtcgs.length !==0 ){
		category = category + "." + wtcgs;
	}

	ns_p = {
		src: 'http' + (document.location.href.charAt(4) == 's' ? 's' : '') + '://fr.sitestat.com/srg/srf-test/s?'+escape(urlstr)+"&sp="+escape(wtsp)+"&cgn="+escape(wtcgn)+"&cgs="+escape(wtcgs)+"&category="+escape(category)
	};

(function () {
   	if (self.dcsInit) {
       	if (dcsInit.images && dcsInit.images[dcsInit.index - 1] !== null) {
       	    for (var b = 0, a = dcsInit.index; b < a; b++) {
           	    var d = dcsInit.images[b].src;
           	    if (d !== null && d.indexOf("?") > -1) {
	                d = d.substring(d.indexOf("?") + 1);
	                if (d.indexOf("&") !== 0) {
               	        d += "&";
                   	}
                    sitestat(ns_p.src + d);
                }
            }
        } else {
            var c = "wt_",
                d = [c + "dcsid=" + dcsInit.dcsid, c + "domain=" + dcsInit.domain, c + "fpc=" + dcsInit.fpc, c + "fpcdom=" + dcsInit.fpcdom, c + "onsitedomains=" + dcsInit.onsitedomains, c + "timezone=" + dcsInit.timezone, c + "trackevents=" + dcsInit.trackevents, c + "i18n=" + dcsInit.i18n, c + "enabled=" + dcsInit.enabled];
            if (document.cookie.indexOf(dcsInit.fpc + "=") != -1) {
                d[d.length] = c + "fpc_ck=1";
            }
            if (document.cookie.indexOf("WTLOPTOUT=") != -1) {
                d[d.length] = c + "optout=1";
            }
            sitestat(ns_p.src + "&" + d.join("&"));
        }
    } else {
        sitestat(ns_p.src);
    }
})();

}
function sitestat(u){var d=document,l=d.location;ns_pixelUrl=u+"&ns__t="+(new Date().getTime());u=ns_pixelUrl+"&ns_c="+((d.characterSet)?d.characterSet:d.defaultCharset)+"&ns_ti="+escape(d.title)+"&ns_jspageurl="+escape(l&&l.href?l.href:d.URL)+"&ns_referrer="+escape(d.referrer);var m=u.lastIndexOf("&");if(u.length>2000&&m>=0){u=u.substring(0,m+1)+"ns_cut="+u.substring(m+1,u.lastIndexOf("=")).substring(0,40);}(d.images)?new Image().src=u:d.write('<'+'p><'+'img src="'+u+'" height="1" width="1" alt="*"'+'><'+'/p>');}
