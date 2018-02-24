# ReScope

[![Build Status](https://travis-ci.org/CaipiLabs/ReScope.svg?branch=master)](https://travis-ci.org/CaipiLabs/ReScope)
[![NPM Version](https://badge.fury.io/js/rescope.svg?style=flat)](https://npmjs.org/package/rescope)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](#)


## What ?

ReScope is a flexible, effective and easy to use State management system inspired by ReactJS methods.

## How ?

By using independent, specialized & serializable "Data Stores" in a Flux oriented architecture.

### Stores ?

ReScope stores look like "React components for data".<br>
They use determining values and the others store data as state,<br>
and maintains the corresponding data accordingly.

Stores can manage part of, or the entire App state's determining values,<br>
maintain intermediate, possibly asynchronous resources,<br>
And/or finals or ready-to-render data.

When a component injects one of the stores available in its Scope, <br>
ReScope instantiates synchronously (if possible) theirs dependencies. <br>

Next, when a store receives a state mutation, <br>
the resulting data update is propagated to the stores and listening components.

### Scopes ?

To deal with complex architectures the Scopes allow :
- normalized contexts for modules & views
- to inherit & mix other Scopes,
- automatic & chained destroy
- ...

## What else ?

- React "high order components" factories ( react-rescope )
- Allow to keep related stuff in the same store files (actions, mutations, helpers, states, etc...)
- Allow to remove 99.9% of all the tpls code and put them in clean, reusable & specialized stores,
- Easy pairing of remote / webworker based stores
- Easy remapping & aliasing of dependencies data,
- 1 stem super class to rule all the async process
- Semaphores like API ( wait, release, retain, dispose )
- Promise like APIs
- Inheritable ES6 class
- Easy, partial or complete scopes serialization
- Synchronised injection & init (React SSR) (as long as stores transformations stay sync)
- Lazy stores instantiation & active stores auto destroy
- Library agnostic
- Another alternative to Redux & co
- etc..

## Doc ?

### [Work in progress doc](doc/readme.md)

#### [About Stores](doc/Store.md)
#### [About Scopes](doc/Scope.md)
#### [About React HOCs](doc/React.md)

### (Dumb) Simple \& working examples [here](src/examples)

\*: The Store's scope is common to the vanilla & react example

### And the [tests](test/Rescope.test.js)

## What's next ?

- Optimize
- @reScope stores state / data ?
- Possibly some semantic/normalisation updates
- Even better deps definition
- Many more tests
- Cosmetics rewrites & more comments
- better refs management

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)
<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

