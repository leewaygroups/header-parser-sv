module.exports = {
   getIP: function (req) {
      var ipAddr = req.headers["x-forwarded-for"];
      if (ipAddr){
        var list = ipAddr.split(",");
        ipAddr = list[list.length-1];
      } else {
        ipAddr = req.connection.remoteAddress;
      }

      return ipAddr;
   },
   getLanguage: function(req){
     return req.headers["accept-language"].substring(0, 5);
   },
   getSoftware: function(req){
     return  req.headers["user-agent"].split(') ')[0].split(' (')[1];
   }
};