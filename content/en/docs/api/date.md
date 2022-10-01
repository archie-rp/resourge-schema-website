---
title: "Date"
description: "Date rules available."
lead: "Date rules available."
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
import { date } from '@resourge/schema';

date()
// or
date('Custom error message')
```

## Options

### today

Checks if date is today

```js,ts
date().today()
// with custom message
date().today('Custom error message')
```

## Contribution

In case you have different validations that you use, please tell us so we improve the library.
