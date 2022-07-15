# vercel 1.0.0-next.62 build errors with module not found

# Steps to reproduce

- install

```
npm install
```

- run build

```
npm run build
```

- error in build

```
> vite build

vite v3.0.0 building for production...
✓ 13 modules transformed.
.svelte-kit/output/client/_app/manifest.json                              1.19 KiB
.svelte-kit/output/client/_app/immutable/layout.svelte-c3373a0a.js        0.53 KiB / gzip: 0.35 KiB
.svelte-kit/output/client/_app/immutable/error.svelte-ccaf9407.js         1.56 KiB / gzip: 0.74 KiB
.svelte-kit/output/client/_app/immutable/pages/index.svelte-d5d3b574.js   0.80 KiB / gzip: 0.47 KiB
.svelte-kit/output/client/_app/immutable/chunks/index-bf1ed64f.js         6.85 KiB / gzip: 2.80 KiB
.svelte-kit/output/client/_app/immutable/start-7f2c5316.js                23.42 KiB / gzip: 8.84 KiB
vite v3.0.0 building SSR bundle for production...
✓ 15 modules transformed.
Generated an empty chunk: "hooks"
.svelte-kit/output/server/manifest.json                           1.27 KiB
.svelte-kit/output/server/index.js                                76.00 KiB
.svelte-kit/output/server/entries/endpoints/api/demo.json.ts.js   1.56 KiB
.svelte-kit/output/server/entries/fallbacks/layout.svelte.js      0.25 KiB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js       0.74 KiB
.svelte-kit/output/server/entries/pages/index.svelte.js           0.33 KiB
.svelte-kit/output/server/immutable/chunks/index-b9efae8a.js      2.61 KiB
.svelte-kit/output/server/immutable/chunks/hooks-d259abab.js      0.00 KiB

Run npm run preview to preview your production build locally.
(node:8720) ExperimentalWarning: buffer.Blob is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

> Using @sveltejs/adapter-vercel
Error: Failed to resolve dependency bson-ext:
Cannot find module 'bson-ext' loaded from D:\workspace\kit-mongoose-vercel-bug\node_modules\mongodb\lib\bson.js
    at D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:301:39
    at async Promise.all (index 1)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 1)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 36)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
Error: Failed to resolve dependency kerberos:
Cannot find module 'kerberos' loaded from D:\workspace\kit-mongoose-vercel-bug\node_modules\mongodb\lib\deps.js
    at D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:301:39
    at async Promise.all (index 2)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 19)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 36)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
Error: Failed to resolve dependency snappy:
Cannot find module 'snappy' loaded from D:\workspace\kit-mongoose-vercel-bug\node_modules\mongodb\lib\deps.js
    at D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:301:39
    at async Promise.all (index 4)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 19)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 36)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
Error: Failed to resolve dependency snappy/package.json:
Cannot find module 'snappy/package.json' loaded from D:\workspace\kit-mongoose-vercel-bug\node_modules\mongodb\lib\deps.js
    at D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:301:39
    at async Promise.all (index 5)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 19)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 36)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
Error: Failed to resolve dependency aws4:
Cannot find module 'aws4' loaded from D:\workspace\kit-mongoose-vercel-bug\node_modules\mongodb\lib\deps.js
    at D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:301:39
    at async Promise.all (index 7)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 19)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 36)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
Error: Failed to resolve dependency @mongodb-js/zstd:
Cannot find module '@mongodb-js/zstd' loaded from D:\workspace\kit-mongoose-vercel-bug\node_modules\mongodb\lib\deps.js
    at D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:301:39
    at async Promise.all (index 3)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 19)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 36)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
Error: Failed to resolve dependency mongodb-client-encryption:
Cannot find module 'mongodb-client-encryption' loaded from D:\workspace\kit-mongoose-vercel-bug\node_modules\mongodb\lib\encrypter.js
    at D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:301:39
    at async Promise.all (index 4)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 7)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 2)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
Error: Failed to resolve dependency supports-color:
Cannot find module 'supports-color' loaded from D:\workspace\kit-mongoose-vercel-bug\node_modules\debug\src\node.js
    at D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:301:39
    at async Promise.all (index 2)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 1)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
    at async Promise.all (index 3)
    at async Job.emitDependency (D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:287:9)
    at async D:\workspace\kit-mongoose-vercel-bug\node_modules\@vercel\nft\out\node-file-trace.js:316:21
  ✔ done
```

# workaround

- version `@sveltejs/adapter-vercel` version "1.0.0-next.60" works fine

- change the package.json to use version "1.0.0-next.60"
- as an example there is a file `package.working.json` added for reference

- revert to this version and then

```
npm install
```

```
npm run build
```

- output

```
> vite build

vite v3.0.0 building for production...
✓ 13 modules transformed.
.svelte-kit/output/client/_app/manifest.json                              1.19 KiB
.svelte-kit/output/client/_app/immutable/layout.svelte-c3373a0a.js        0.53 KiB / gzip: 0.35 KiB
.svelte-kit/output/client/_app/immutable/error.svelte-ccaf9407.js         1.56 KiB / gzip: 0.74 KiB
.svelte-kit/output/client/_app/immutable/pages/index.svelte-d5d3b574.js   0.80 KiB / gzip: 0.47 KiB
.svelte-kit/output/client/_app/immutable/start-fa5ebffe.js                23.42 KiB / gzip: 8.84 KiB
.svelte-kit/output/client/_app/immutable/chunks/index-bf1ed64f.js         6.85 KiB / gzip: 2.80 KiB
vite v3.0.0 building SSR bundle for production...
✓ 15 modules transformed.
Generated an empty chunk: "hooks"
.svelte-kit/output/server/manifest.json                           1.27 KiB
.svelte-kit/output/server/index.js                                76.00 KiB
.svelte-kit/output/server/entries/endpoints/api/demo.json.ts.js   1.56 KiB
.svelte-kit/output/server/entries/fallbacks/layout.svelte.js      0.25 KiB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js       0.74 KiB
.svelte-kit/output/server/entries/pages/index.svelte.js           0.33 KiB
.svelte-kit/output/server/immutable/chunks/index-b9efae8a.js      2.61 KiB
.svelte-kit/output/server/immutable/chunks/hooks-d259abab.js      0.00 KiB

Run npm run preview to preview your production build locally.
(node:12096) ExperimentalWarning: buffer.Blob is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

> Using @sveltejs/adapter-vercel
  ✔ done
```
