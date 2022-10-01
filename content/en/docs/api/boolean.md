---
title: "Boolean"
description: "Boolean rules available."
lead: "Boolean rules available."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "api"
weight: 130
toc: true
---

## Example

```js,ts
import { boolean } from '@resourge/schema';

boolean()
// or
boolean('Custom error message')
```

## Options

### mustBe

Checks if boolean is true or false

```js,ts
date().mustBe(true)
// with custom message
date().mustBe(true, 'Custom error message')
```

## Contribution

In case you have different validations that you use, please tell us so we improve the library.