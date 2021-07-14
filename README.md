# Issue
https://github.com/nuxt/vite/issues/164

-----

I am trying to setup a project with `Nuxt` + `Vite` and `TailwindCSS` but I have some problems.

With some specific versions, `TailwindCSS` doesn't work and can't start dev server.

With some other specific versions, hot reload doesn't work well with tailwind and nuxt-vite.
It seems that tailwind is not catching changes in the `<template>` tag.
But changes in the `<style>` tag along with `@apply` still work.

See the following table for more details.

### Reproduction & Versions
https://github.com/phamhongphuc/nuxt-vite-tailwindcss
| branch          | nuxt-vite | @nuxtjs/tailwindcss | jit mode | dev server | hot reload |
|-----------------|-----------|---------------------|----------|-------|------------|
| `tw-jit`          | ❌         | `4.2.1`             | ✔        | ✔     | ✔          |
| `vite-old-tw-jit` | `0.1.1`   | `4.2.0`            | ✔        | ✔     | ❌          |
| `vite-tw-jit`     | `0.1.1`   | `4.2.1`             | ✔        | ❌     | ❌          |
| `vite-tw-no-jit`  | `0.1.1`   | `4.2.1`             | ❌        | ✔     | ✔          |

### Description

#### 1. Hot Reload issue
Related to #159 
#### 2. Start dev server failed
```bash
 ERROR  Cannot read property 'importedModules' of undefined                                                   14:47:14

  at warmup (node_modules\nuxt-vite\dist\nuxt-vite.js-vite.js:387:71)
  at async Promise.all (index 3)
  at async warmup (node_modules\nuxt-vite\dist\nuxt-vite.js-vite.js:388:5)
  at async Promise.all (index 5)
  at async warmup (node_modules\nuxt-vite\dist\nuxt-vite.js-vite.js:388:5)
  at async Promise.all (index 8)
  at async warmup (node_modules\nuxt-vite\dist\nuxt-vite.js-vite.js:388:5)
  at async Promise.all (index 4)
  at async warmup (node_modules\nuxt-vite\dist\nuxt-vite.js-vite.js:388:5)
  at async Promise.all (index 0)
  at async warmupViteServer (node_modules\nuxt-vite\dist\nuxt-vite.js-vite.js:390:3)

i Waiting for file changes                                                                                    14:47:14
i Memory usage: 94.1 MB (RSS: 170 MB)                                                                         14:47:14
i Listening on: http://localhost:3000/
```

![image](https://user-images.githubusercontent.com/11532116/125583826-103f0460-4327-49ca-b4b7-6e58786dc05f.png)
