/*
Write a function that when given a URL as a string, 
parses out just the domain name and returns it as 
a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/
function domainName(url) {
	if (url.includes("org") && !url.includes("//")) {
		let splitted = url.split(".");
		return splitted.splice(0, 1).toString();
	}
	if (url.indexOf("//") > -1 && !url.includes("www")) {
		let splitted = url.split("//");
		let x = (anotherSplit = splitted.splice(1, 1).toString());
		return x.split(".", 1).toString();
	}
	if (url.indexOf(".") > -1) {
		let splitted = url.split(".");
		return splitted.splice(1, 1).toString();
	}
}

//test
domainName("http://google.com");
//"google"
domainName("http://google.co.jp");
//"google"
domainName("www.xakep.ru");
//"xakep"
domainName("https://youtube.com");
//"youtube"
domainName("https://www.cnet.com");
//cnet
domainName("icann.org");
//"icann"
domainName("https://hyphen-site.org");
