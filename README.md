## Steps to reproduce the behavior

First, run the development server (with the develper tools opened in the browser, on the Network tab):

```bash
npm run dev
# or
yarn dev
```

You'll notice that the page is correctly rendered, with the data that comes from the context.
That data is not rendered on the server side though. You can check that by inspecting the Network tab 
in the browser:

![Example Image](./docs-images/Screen%20Shot%202022-07-05%20at%2010.18.22.png)

In the image above, notice that we see the "I am the header" text on the page, but it's not there
on the html file sent by the server.
