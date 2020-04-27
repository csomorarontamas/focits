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

        const params = url.parse(req.url as string, true).query;
        // 1. Olvassa be a meccs.txt állományban talált adatokat, s annak felhasználásával oldja meg a következő feladatokat! Ha az állományt nem tudja beolvasni, az első 10 mérkőzés adatait jegyezze be a programba és dolgozzon azzal!
        const megold: Megoldas = new Megoldas("meccs.txt");

        //2. feladat:
        res.write("2. feladat:");
        const beker: string = params.bek as string;
        res.write(`\nKérem az azonosítót: <input type='number' name='bek' value=${beker} style='max-width:100px;' onChange='this.form.submit();'>\n`);
        res.write(megold.MasodikFeladat(parseInt(beker)));

        //3. Feladat:
        res.write("\n3. feladat:");
        res.write(`<p>Győztes csapat:\t${megold.HarmadikFeladat}</p>`);

        //4. Feladat:
        res.write("4. feladat:");
        const bekeres: string = params.negyedik as string;
        res.write(`\nKérem a csapatnevet: <input type='string' name='negyedik' value=${bekeres} style='max-width:100px;' onChange='this.form.submit();'>\n`);
        res.write(megold.NegyedikFeladat(bekeres).toString());

        //5. Feladat:
        res.write("5. feladat:");
        res.write(`<p>${megold.OtodikFeladat}</p>`);
        res.write("</body></html>");
        res.end();
    }
}
