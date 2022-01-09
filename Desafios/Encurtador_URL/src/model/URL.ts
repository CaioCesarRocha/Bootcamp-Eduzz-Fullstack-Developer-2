import { prop, getModelForClass } from '@typegoose/typegoose';

export class Url {
    @prop()
    public hash!: string

    @prop()
    public originURL!: string

    @prop()
    public shortURL!: string
}

export const UrlModel = getModelForClass(Url);