import {Injectable} from '@nestjs/common';
import {TwingEnvironment, TwingLoaderFilesystem} from 'twing';

@Injectable()
export class TwingService {

    // TODO: make private (currently breaks build)
    public readonly twing: TwingEnvironment;

    constructor() {
        this.twing = this.createTwingEnvironment();
    }

    public getTemplates(): void {
        console.log('get templates');
    }

    private createTwingEnvironment(): TwingEnvironment {
        // TODO: put parts to an assets service
        console.log('create twing environment');
        const path = require('path');
        const appRoot = path.resolve(__dirname);
        console.log(appRoot);
        const templatesRoot = `${appRoot}/assets/templates/`;
        const loader = new TwingLoaderFilesystem(templatesRoot);
        return new TwingEnvironment(loader);
    }

}

// import * as express from 'express';
//
// const mjml2html = require('mjml');
//
// const api = express();
// const twing = createTwingEnvironment();

// // TODO: set up API listener to receive data instead of file and hard coded
// const templateName = 'confirmation';
// const params = {users: [{name: 'Node'}, {name: 'Twig'}, {name: 'MJML'}, {name: 'Angular'}]};
//
// const templatePath = a`${templateName}/${templateName}.twig`;
// const compiledTemplate = await compileTemplate(templatePath, params);
//
// // TODO: return compiled template via API instead of just logging it
// console.log(compiledTemplate);

//
// async function compileTemplate(templatePath: string, params: object): Promise<string> {
//     const template = await applyTwig(templatePath, params);
//     return await applyMJML(template);
// }
//
// async function applyTwig(templatePath: string, params: object): Promise<string> {
//     return twing.load(templatePath).then(tpl => tpl.render(params));
// }
//
// async function applyMJML(template: string): Promise<string> {
//     const compiled = mjml2html(template, {minify: true, minifyOptions: {minifyCSS: true}, keepComments: false});
//     if (compiled.errors.length) {
//         const error = compiled.errors[0];
//         throw new Error(`on ${error.tagName} at line ${error.line}: ${error.message}`);
//     }
//     return compiled.html;
// }
