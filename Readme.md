# About

Solution for nodejs `HTTP 431` issue that results in:

```
HTTP/1.1 431 Request Header Fields Too Large
Connection: close
```

## How to run

* To run with default 16 KB headers, run `node index.js` or `npm run start`.
* To run with 32 KB headers, run `node --max-http-header-size=32768 index.js` or `npm run startBig`

## How to test

Use `humao.rest-client` VS Code extension and open `test.http` file to send a request with large headers.