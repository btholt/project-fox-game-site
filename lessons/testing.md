---
path: "/testing"
title: "Testing"
order: "2G"
description: "The Project"
section: "Frontend Infra"
---

Testing is always important. I tend to err on the side of less tests. The only thing worse than having no tests is having bad tests. They could be bad because they're stale, testing the wrong things, or the worst of all: finnicky and tempermental. The worst test is the one that you don't trust the results, whether that's tests that will fail when they should pass or the test that passes what it should fail. Any test like that I tend to delete.

This will not be a class on testing. We're only going to do some light unit testing. There are other Frontend Masters courses that go into much better depth than I do.

My general rule of thumb is to test important modules thoroughly, test the cases you expect to hit with less important modules (maybe a few error cases), and lightly smatter tests around the rest. When you hit a production bug, a good method to debug is to write a test that would have caught the bug you hit in production, and then fix it. With this strategy you should end up with a healthy battery of dependable tests.

## Framework

I'm fine any testing framework. I've used them all professionally: Jest, Jasmine, Mocha, AVA, etc. We're going to stick to [Jest][jest]. It's the one I know the best and they have a bunch of nice convenience features. Beyond that, like Parcel, it tends to just work out of the box.

In your project, run

```bash
npm install -D jest
```

Add to npm scripts

```json
{
  […]
  "scripts": {
    […]
    "test": "jest"
  }
}
```

That's it! Jest is very intelligent and opinionated on how it finds your tests. As long as we name our tests `*.test.js` it'll fine them by default! How cool is that?

[jest]: https://jestjs.io/
