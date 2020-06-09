import {Injectable} from '@nestjs/common';

@Injectable()
export class PathsService {

    public readonly appRootPath: string;
    public readonly assetPath: string;
    public readonly templatesPath: string;

    constructor() {
        this.appRootPath = this.getAppRootPath();
        this.assetPath = this.getAssetPath();
        this.templatesPath = this.getTemplatesPath();
    }

    private getAppRootPath(): string {
        const path = require('path');
        return path.resolve(__dirname);
    }

    private getAssetPath(): string {
        return `${this.getAppRootPath()}/assets`;
    }

    private getTemplatesPath(): string {
        return `${this.getAssetPath()}/templates`;
    }

}
