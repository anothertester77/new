var myHeaders = new Headers();
myHeaders.append("accept", "*/*");
myHeaders.append("accept-language", "en-US,en;q=0.9");
myHeaders.append("cache-control", "no-cache");
myHeaders.append("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
myHeaders.append("cookie", document.cookie);
myHeaders.append("pragma", "no-cache");
myHeaders.append("sec-ch-ua", "\"Not-A.Brand\";v=\"99\", \"Opera\";v=\"91\", \"Chromium\";v=\"105\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-origin");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 OPR/91.0.4516.77");
myHeaders.append("x-requested-with", "XMLHttpRequest");

var raw = "fullname=barbera1&email=barbera41%40gmail.com&divisionid=1&usergroups-search=&usergroups%5B%5D=1&cellphoneprefixcountryid=8&cellphonenumber=&initials=&usernumber=&leader-user-id=&referredbyuserid=&startdate=22-10-2022+19%3A59&stopdate-future=&email_personal=&cellphoneprefixcountryid_personal=8&cellphonenumber_personal=&address=&zipcode=&city=&countryid=8&sex=&birthday=&ssn=&personaldigits=&bank=&bankregnumber=&bankaccountnumber=&swift=&iban=&taxcard=1&predefined-hourly-wage=-1&hourlywagecurrencyid=20&hourlywage=&predefined-sick-wage=-1&sickhourlywagecurrencyid=20&sickhourlywage=&predefined-permanent-wage=-1&permanentwagehourstype=0&permanentwagecurrencyid=20&permanentwage=&predefined-social-costs=-1&socialcoststype=0&socialcostscurrencyid=20&socialcosts=&predefined-holiday-pay=-1&holidaypaytype=0&holidaypaycurrencyid=20&holidaypay=&wagenumber=&paytypeid=&wage-holiday=0&wage-break=";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://lead-1461.intramanager.com/users/edit-user-action/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
