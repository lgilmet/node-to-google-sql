# node-to-google-sql

Error Report: 

$ gcloud run deploy

... and then ...

Finished Step #1
PUSH
DONE
-------------------------------------------------------------------------------

Updating service [default] (this may take several minutes)...failed.
ERROR: (gcloud.app.deploy) Error Response: [9] 
Application startup error:

> nodeapi@1.0.0 start /app
> node server.js

API server started on:  8080
events.js:174
      throw er; // Unhandled 'error' event
      ^
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
Emitted 'error' event at:
    at Connection._handleProtocolError (/app/node_modules/mysql/lib/Connection.js:426:8)
    at Protocol.emit (events.js:198:13)
    at Protocol._delegateError (/app/node_modules/mysql/lib/protocol/Protocol.js:398:10)
    at Handshake.<anonymous> (/app/node_modules/mysql/lib/protocol/Protocol.js:153:12)
    at Handshake.emit (events.js:198:13)
    at Handshake.Sequence.end (/app/node_modules/mysql/lib/protocol/sequences/Sequence.js:78:12)
    at Protocol.handleNetworkError (/app/node_modules/mysql/lib/protocol/Protocol.js:369:14)
    at Connection._handleNetworkError (/app/node_modules/mysql/lib/Connection.js:421:18)
    at Socket.emit (events.js:198:13)
    at emitErrorNT (internal/streams/destroy.js:91:8)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! nodeapi@1.0.0 start: `node server.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the nodeapi@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2019-12-22T03_14_37_260Z-debug.log

PS C:\Users\iluca\source\repos\Portfolio\nodeApi> node run start
internal/modules/cjs/loader.js:797
    throw err;
    ^

Error: Cannot find module 'C:\Users\iluca\source\repos\Portfolio\nodeApi\run'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:794:15)
    at Function.Module._load (internal/modules/cjs/loader.js:687:27)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
    at internal/main/run_main_module.js:17:11 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
