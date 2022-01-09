import {Request, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";
import { UrlModel } from "../model/URL";

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void>{
        //ver se url ja existe
        const {originURL} = req.body;

        const url = await UrlModel.findOne({originURL})
        console.log("url criada:" , url)
        if (url){
            res.json(url);
            return;
        }
        //Criar hash pra URL        
        const hash = shortId.generate()
        const shortURL = `${config.API_URl}/${hash}`;
        //Salvar a url no banco
        
        const newURL = await UrlModel.create({hash, shortURL, originURL})
        //Retornar a URL que foi salva
        res.json(newURL);
    }

    public async redirect(req: Request, res: Response): Promise<void>{
        //pegar o hash da url
        const {hash} = req.params;
        const url = await UrlModel.findOne({hash: hash })
        ///encontrar a url original pelo hash
        if (url) {
            res.redirect(url.originURL);
            return
        };

        res.status(400).json({error: 'URL not found'});
        //redirecionar para url oroginal a partir do que foi encontrado    
        
    }
}

