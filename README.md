# JP-wrapper

This is a javascript/typescript wrapper for the [JP-backend](https://github.com/Tch1b0/JP-backend)

## Purpose

Easily use the JP-backend in Javascript. <br>
I mainly made this api for [my frontend](https://github.com/Tch1b0/JP)

## Example

```ts
import { Requester, PostCollection } from "jp-wrapper";

var r = new Requester();

var pc = new PostCollection(r);

var MoGo = pc.by_title("MoGo");

console.log(MoGo.description);
```

```
MoGo is a Discord Bot
```
