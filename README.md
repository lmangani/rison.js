# rison.js
NodeJS Rison Library

### Usage
#### Import
```
import { encode,decode } from 'rison.js'
```
##### Encode JSON to Rison
```
var json = { "ami" : "correct", "array": ["one"] };
console.log( encode(json));
```

##### Decode Rison to JSON
```
var rison = '(ami:correct,array:!(one))'
console.log( decode(rison));
```
