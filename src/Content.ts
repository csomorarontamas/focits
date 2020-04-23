import fs from "fs";
import http from "http";
import url from "url";
import Megoldas from "./Megoldas";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Foci</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // 1. Olvassa be a meccs.txt állományban talált adatokat, s annak felhasználásával oldja meg a következő feladatokat! Ha az állományt nem tudja beolvasni, az első 10 mérkőzés adatait jegyezze be a programba és dolgozzon azzal!
        const megold: Megoldas = new Megoldas("meccs.txt");

        //3. Feladat: 
        res.write("3. feladat:");
        res.write(`<p>Győztes csapat:\t${megold.HarmadikFeladat}</p>`);

        /*res.write("5. feladat:");
        res.write(`<p>${megold.LegtobbBent} voltak a legtöbben bent.</p>`);*/

        res.write("</body></html>");
        res.end();
    }
}