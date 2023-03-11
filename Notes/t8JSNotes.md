## Event Loop:- 
    1. Everything runs on it (event loop is single thread)
    2. JS is single threaded language.

## Web API and libuv
    1. WEB api gets task assigned by event loop and WEB API assigns this task to sutiable worker.
    2. workers -> workers perform that task.
    3. JS is non-blockable language

## Asynchronus programming
    1. get request -> to event loop -> decide if done by event loop or api -> if (perform by API): Give OP to event -> ti=rigger callback 
    2. Asynchronus programming dosen't work sequentially
        ex: tut8 sync_async.js
    3. Async is apne marjika malik, dosen't care bakike kab run hote hai

## Callbacks
> Callbacks are functions which are passed as arguments.

> triggired when requested, 
`setTimeout(function(){ console.log("Third") }, 1)` 
> here "function" is callback

## sync and async
> if two callbacks sync and async are running and sync callback enters event loop then `sync function will always be executed before async` as it `occupies event loop`.

    1. Async function will console error (if inbuilt error handling)
    2. Sync will throw error

## callback hell
###     Async functions
> biggest problem of callback is that if another callback is dependent on that, it will be nasted inside first callback.

> this makes ***nested callback***, which can become difficult to handle.