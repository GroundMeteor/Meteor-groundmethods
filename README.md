Ground Methods
==============

This package grounds Meteor method calls. It caches outstanding method calls when offline and resumes when online.

##Features:
* Ligth footprint
* Broad browser support Chrome, Safari, Firefox and Internet Explorer 9
* Resume of methods
* Works offline updating cross window tabs
* Uses `EJSON.minify` and `EJSON.maxify` to compress data in localstorage

##Concept
Localstorage is simple and widely supported - but slow - *Thats why we only use it for caching methods.*

GroundMethods saves outstanding methods and minimongo db into localstorage - The number of saves to localstorage is minimized.

When the app loads GroundMethods resumes methods calls.

##Resume of outstanding methods
Database changes and methods will be sent to the server just like normal. The methods are sent to server after relogin - this way `this.userId` isset when running on the server. In other words: `Just like normal`

##Events *- client-side*
The event api is as follows:
```js
GroundMethods.onQuotaExceeded = function() {};
GroundMethods.onResumeMethods = function() {};
GroundMethods.onCacheMethods = function() {};
GroundMethods.onMethodCall = function(methodCall) {};
GroundMethods.skipMethods = function(methodsToSkipObject)

// Reactive status of all subscriptions, ready or not:
GroundMethods.ready();
```

##Don't cache my method for offline resume
Sometimes one may want a method call not to be resumeable, so we can tell `GroundDB` to skip the method when caching method calls:
```js
  GroundDB.skipMethods({
    myOnlineOnlyMethod: true
  });
```
*Pr. default the login method call is skipped resume because the Accounts does resume of itself*

##Contributions
Feel free to send issues, pull requests all is wellcome

Kind regards Morten