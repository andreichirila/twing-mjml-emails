# Disclaimer

This repository is highly WIP and the following README is more of an outlook of what i *want* to implement - not of what I already implemented ;)

# Twig-MJML-Emails

The idea of this repository is to grant a convenient way of working with Email templates consisting of Twig + MJML. 

The repository contains two projects:

- a NodeJS server that compiles given Email templates written in Twig + MJML applying given parameters and returning the resulting HTML
- an Angular client consuming the NodeJS API and displaying the Emails with example-data accordingly.

## Development

After installing node, npm and executing npm install you can execute

`npm run api-start` for a dev api-server. It is written in TypeScript and will recompile and live-reload whenever you change a *.ts file in the corresponding project.
It will serve api for compiling an Email template from the "emails/" directory applying passed data and returning the resulting compiled template (applying Twing & MJML compiler).

`ng serve` for an Angular dev client to browse the existing Emails with given example-data.
