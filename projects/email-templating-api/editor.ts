import {TwingEnvironment, TwingLoaderFilesystem} from 'twing';
import * as express from 'express';

const path = require('path');
const mjml2html = require('mjml');

const api = express();
const twing = createTwingEnvironment();

(async () => {
  api.get('/render-email', (req, res) => {
    console.log(req.query.id);
    console.log(req.query.params);
    return res.send('worked');
  });
})();

const port = process.env.PORT || 5200;
api.listen(port, () => {
  console.log(`Email service listening on port ${port}...`);
});

// // TODO: set up API listener to receive data instead of file and hard coded
// const templateName = 'confirmation';
// const params = {users: [{name: 'Node'}, {name: 'Twig'}, {name: 'MJML'}, {name: 'Angular'}]};
//
// const templatePath = `${templateName}/${templateName}.twig`;
// const compiledTemplate = await compileTemplate(templatePath, params);
//
// // TODO: return compiled template via API instead of just logging it
// console.log(compiledTemplate);

function createTwingEnvironment(): TwingEnvironment {
  const appRoot = path.resolve(__dirname);
  const templatesRoot = `${appRoot}/../emails/templates/`;
  const loader = new TwingLoaderFilesystem(templatesRoot);
  return new TwingEnvironment(loader);
}

async function compileTemplate(templatePath: string, params: object): Promise<string> {
  const template = await applyTwig(templatePath, params);
  return await applyMJML(template);
}

async function applyTwig(templatePath: string, params: object): Promise<string> {
  return twing.load(templatePath).then(tpl => tpl.render(params));
}

async function applyMJML(template: string): Promise<string> {
  const compiled = mjml2html(template, {minify: true, minifyOptions: {minifyCSS: true}, keepComments: false});
  if (compiled.errors.length) {
    const error = compiled.errors[0];
    throw new Error(`on ${error.tagName} at line ${error.line}: ${error.message}`);
  }
  return compiled.html;
}
