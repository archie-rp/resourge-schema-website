---
title: "Object"
description: "Object rules available."
lead: "Object rules available."
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

```javascript
import { object } from '@resourge/schema';

object({
  name: string().required(),
  age: number().min(18).required()
})
// with message
object({
  name: string().required(),
  age: number().min(18).required()
}, 'Custom error message')
```

## Contribution

In case you have different validations that you use, please tell us so we improve the library.
