var myHeaders = new Headers();
myHeaders.append("authority", "lead-4820.intramanager.com");
myHeaders.append("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
myHeaders.append("accept-language", "en-US,en;q=0.9");
myHeaders.append("cache-control", "no-cache");
myHeaders.append("cookie", "prism_27461310=e1aa5d95-8ed4-4e9a-97bd-6f57890dec6a; _ga=GA1.2.1742863745.1666460995; _gid=GA1.2.2118349409.1666460995; _fbp=fb.1.1666460995671.513545191; token-lead-1463=MIGtFT2xmDH8Qqw0gEePNiXh9ln7dJSL; session-lead-1463=1; Oh7SC9H9w9V3GKPYvaU0737fDx0jp8j4=c3O5Rwt7g1486Zo5U3K1u4W8q0q1hl95; token-lead-4820=Z7VCDkB5osjwvSY6eE2PMFagcQl0rAq9; session-lead-4820=2; qoQjRtPgFXYejGwKR1dU4H7M2LrBad9K=R3NTeHVSM0kycHdTYmorUjJiVG5jdz09IXp4dEFLYUY1U2E4QnphK09QNGxUTmpFNkRyd2NxMUREY1ZCZ0ZMRG1HcWs9IU5XUXhZak15Tm1NNE4yWXpOVE0wT1RNMk1EZGpNMlUxWW1GaVpHUTJPVE5pWVdZd1lUTmhNR1F4TWpVMFlXWmtabVZsWm1VeFl6RmlZMlkyTmpKa1pnPT0%3D");
myHeaders.append("pragma", "no-cache");
myHeaders.append("referer", "https://lead-4820.intramanager.com/users/profile/2/overview/");
myHeaders.append("sec-ch-ua", "\"Not-A.Brand\";v=\"99\", \"Opera\";v=\"91\", \"Chromium\";v=\"105\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("sec-fetch-dest", "document");
myHeaders.append("sec-fetch-mode", "navigate");
myHeaders.append("sec-fetch-site", "same-origin");
myHeaders.append("sec-fetch-user", "?1");
myHeaders.append("upgrade-insecure-requests", "1");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 OPR/91.0.4516.77");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://lead-4820.intramanager.com/users/delete-access-usergroup-action/2/1/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
