## Sample Blog with API-based CMS and handlebars as template engine

This is a fork of the current Prismic Blog example but using `Handlebars` instead and `Pug`

Original : https://github.com/prismicio/nodejs-blog/

Node.js blog is a blog template with content managed in prismic.io (an API-based CMS).

You will need to update the config to your current endpoint, in `prismic-configuration.js` :

```
apiEndpoint: 'https://****.prismic.io/api/v2'
```

And also on the template, in `main.hbs`

```
<script>window.prismic = { endpoint: 'https://****.prismic.io/api/v2' };</script>
```

#### Getting started

Read [this guide](https://intercom.help/prismicio/examples/nodejs-samples/sample-blog-with-api-based-cms-in-nodejs) for instructions to create your repository and use the sample blog.

## Todo
- [ ] Add some test
- [ ] Make the template helpers global
- [ ] Set the CSS in a bundle with Webpack (less or sass)
- [ ] Add more handlebars helpers for the template
