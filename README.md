# Tidy Props

Tidy Props is a small JavaScript library for *picking* or *removing* properties from target
objects.

## Why do I need it?
There doesn't seem to be a standardized way for dynamically removing properties (key/value pairs)
from JavaScript objects.
 
One of the proposed solutions is to remove them using Object destructuring
```JavaScript
const sourceObject = {
  banana: "remove me",
  apple: "keep me",
  lime: "also keep me"
};
const { banana, ...rest } = sourceObject;
console.log(rest); // { apple: 'keep me', lime: 'also keep me' }

```
This works very well for objects from which the props to be removed are 
either known, or can be dynamically declared and removed but won't scale as
nicely if we have, say, an array of 10 property keys we want 
to remove from the object.

For more details on the above solution see [Todd Motto's post](https://ultimatecourses.com/blog/remove-object-properties-destructuring) on the subject

## How does Tidy Props it work?
This library relies on **ES6 Proxies** for filtering out the object
properties (keeping or removing them) and returning an immutable copy of
that object with the modified properties

## Getting Started

Use npm to install to install Tidy Props.

```bash
npm install tidy-props
```

or yarn

```bash
yarn add tidy-props
```

## Usage

#### Removing properties from Object
```JavaScript
import { exclude } from "tidy-props";

const sourceObject = {
  banana: "remove me",
  apple: "keep me",
  lime: "also keep me"
};

const updatedObject = exclude(sourceObject, ["banana"]);

console.log(updatedObject); // { apple: 'keep me', lime: 'also keep me' }
```
#### Keeping only the desired properties in a given Object
```JavaScript
import { keep } from "tidy-props";

const sourceObject = {
  banana: "remove me",
  apple: "select me",
  lime: "also pick me"
};

const updatedObject = keep(sourceObject, ["apple", "lime"]);

console.log(updatedObject); // { apple:'select me', lime: 'also pick me' }
```

## Contributing
I have created this to tackle the main use cases I have stumbled across
while dealing with objects in JavaScript, if you feel like it should have
other purposes feel free to create pull requests or add suggestions 

## License
[MIT](https://choosealicense.com/licenses/mit/)
