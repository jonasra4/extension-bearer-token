function getBearerToken() {
  chrome.devtools.network.getHAR(
    function (harLog) {

      har_string = JSON.stringify(harLog);
      ptrn = /(?<=\"Bearer )(.*?)(?=\")/

      var results = har_string.match(ptrn);

      alert(results[0]);
    }
  );
}

