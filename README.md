# unhal

Take JSON in HAL format, and canonize it back to a normal JSON object, without the `_links` and `_embedded` properties.
See http://stateless.co/hal_specification.html for details.


## As a command-line tool

Install with `npm install -g unhal` and then you can pipe JSON through it as a command.

    unhal < test.json


## As a library

    const unhal = require('unhal')

    const json = {
      _links: "this will be removed"
      _embedded: {
        foo: "this will be hoisted"
      }
    }

    const result = unhal(json)


This should result in:

    {
      foo: "this will be hoisted"
    }
