var myHeaders = new Headers();
myHeaders.append("Host", "lead-4820.intramanager.com");
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0");
myHeaders.append("Accept", "*/*");
myHeaders.append("Accept-Language", "en-US,en;q=0.5");
myHeaders.append("Accept-Encoding", "gzip, deflate");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
myHeaders.append("X-Requested-With", "XMLHttpRequest");
myHeaders.append("Content-Length", "492");
myHeaders.append("Origin", "https://lead-4820.intramanager.com");
myHeaders.append("Referer", "https://lead-4820.intramanager.com/users/me/");
myHeaders.append("Sec-Fetch-Dest", "empty");
myHeaders.append("Sec-Fetch-Mode", "cors");
myHeaders.append("Sec-Fetch-Site", "same-origin");
myHeaders.append("Te", "trailers");
myHeaders.append("Connection", "close");

var raw = "fullname=veen11&email=crematod11%40gmail.com&cellphoneprefixcountryid=8&cellphonenumber=&address=&zipcode=&city=&countryid=8&sex=0&birthday=&ssn=&personaldigits=&emergency-fullname=&emergency-email=&emergency-cellphoneprefixcountryid=8&emergency-cellphonenumber=&emergency-address=&emergency-postalcode=&emergency-city=&emergency-countryid=8&bank=&bankregnumber=&bankaccountnumber=&swift=&iban=&taxcard=0&timeformat=d-m-Y&timezone=Europe%2FCopenhagen&numberformatid=1&theme=dark&languageid=34";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://lead-4820.intramanager.com/users/edit-personal-data-action/2/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
