if(typeof window.localStorage == "undefined" && typeof window.sessionStorage==undefined) 

(function () {
   
     var localStorage = function () {
          Object.defineProperty(this, 'length', {
            value: (function () {
                var cookieList = [];
                var splt = decodeURI(document.cookie);
                splt = splt.split(";");

                for (var i = 0; i < splt.length; i++) {
                    //if(splt[i].includes("expires"))
                    cookieList[splt[i].split("=")[0].trim()] = splt[i].split("=")[1].trim();
                }
                
                return cookieList;
            })().length;
            writable: false,
            enumerable: false,
            configurable: false,
        });
     };



    localStorage.prototype.setItem = function (cookieName, cookieVal) {    
        var expDate = new Date();
        expDate.setMonth(expDate.getMonth()+3);
        document.cookie = cookieName + "=" + cookieVal + ";" + "expires=" + expDate.toUTCString();
        localStorage[cookieName] = cookieVal;
        this.length++;
    };
    
    
    /*localStorage.prototype.setItem = function (cookieName, cookieVal) {
        if (arguments[2]) {
            document.cookie = cookieName + "=" + cookieVal + ";" + "expires=" + expDate.toUTCString();
        } else {
            document.cookie = cookieName + "=" + cookieVal;
        }
    };*/

    localStorage.prototype.getItem = function (cookieName) {

        //console.log(this);
        var clst = (function () {
                var cookieList = [];
                var splt = decodeURI(document.cookie);
                splt = splt.split(";");

                for (var i = 0; i < splt.length; i++) {
                    if(splt[i].includes("expires"))
                    cookieList[splt[i].split("=")[0].trim()] = splt[i].split("=")[1].trim();
                }
                
                return cookieList;
            })();
        return clst[cookieName];
    };

    localStorage.prototype.removeItem = function (cookieName) {
        var newDate = new Date();
        newDate.setTime(newDate.getTime() - 86400000);
        document.cookie = cookieName + "=;expires=" + newDate.toUTCString();
        delete localStorage[cookieName];

    };
    
    localStorage.prototype.clear = function () {
        for (var i in localStorage.prototype){
            if(typeof i != "clear")
            delete localStorage[cookieName];
        }
        /*var newDate = new Date();
        newDate.setTime(newDate.getTime() - 86400000);
        document.cookie = cookieName + "=;expires=" + newDate.toUTCString();*/

    };


    /*Ck.prototype.hasCookie = function (cookieName) {
        //console.log(this);
        var cklst = this.allCookieList();
        for (var c in cklst) {
            if (c == cookieName) return true;
        }

        return false;
    };*/

    window.localStorage = new localStorage; //new
    
    
    
    var sessionStorage = function () {
         Object.defineProperty(this, 'length', {
            value: (function () {
                var cookieList = [];
                var splt = decodeURI(document.cookie);
                splt = splt.split(";");

                for (var i = 0; i < splt.length; i++) {
                    //if(splt[i].includes("expires"))
                    cookieList[splt[i].split("=")[0].trim()] = splt[i].split("=")[1].trim();
                }
                
                return cookieList;
            })().length;
            writable: false,
            enumerable: false,
            configurable: false,
        });
     };



    sessionStorage.prototype.setItem = function (cookieName, cookieVal) {    
        //var expDate = new Date();
        //expDate.setMonth(expDate.getMonth()+3);
        document.cookie = cookieName + "=" + cookieVal + ";" ;//+ "expires=" + expDate.toUTCString();
        localStorage[cookieName] = cookieVal;
        this.length++;
    };
    
    
    /*localStorage.prototype.setItem = function (cookieName, cookieVal) {
        if (arguments[2]) {
            document.cookie = cookieName + "=" + cookieVal + ";" + "expires=" + expDate.toUTCString();
        } else {
            document.cookie = cookieName + "=" + cookieVal;
        }
    };*/

    sessionStorage.prototype.getItem = function (cookieName) {

        //console.log(this);
        var clst = (function () {
                var cookieList = [];
                var splt = decodeURI(document.cookie);
                splt = splt.split(";");

                for (var i = 0; i < splt.length; i++) {
                    //if(splt[i].includes("expires"))
                    cookieList[splt[i].split("=")[0].trim()] = splt[i].split("=")[1].trim();
                }
                
                return cookieList;
            })();
        return clst[cookieName];
    };

    sessionStorage.prototype.removeItem = function (cookieName) {
        /*var newDate = new Date();
        newDate.setTime(newDate.getTime() - 86400000);
        document.cookie = cookieName + "=;expires=" + newDate.toUTCString();*/
        delete sessionStorage[cookieName];

    };
    
    sessionStorage.prototype.clear = function () {
        for (var i in localStorage.prototype){
            if(typeof i != "clear")
            delete sessionStorage[cookieName];
        }
        /*var newDate = new Date();
        newDate.setTime(newDate.getTime() - 86400000);
        document.cookie = cookieName + "=;expires=" + newDate.toUTCString();*/

    };


    /*Ck.prototype.hasCookie = function (cookieName) {
        //console.log(this);
        var cklst = this.allCookieList();
        for (var c in cklst) {
            if (c == cookieName) return true;
        }

        return false;
    };*/

    window.sessionStorage = new sessionStorage; //new
})();
