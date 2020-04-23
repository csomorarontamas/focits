import fs from "fs";
import Foci from './Foci';
export default class Megoldas {
    private Futball: Foci[] = [];
    constructor(forrás: string) {
        fs.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
                const aktSor = i.trim();
                if (aktSor.length > 0) this.Futball.push(new Foci(aktSor));
            });
    }

    public get HarmadikFeladat(): string {
        let gycsapatnev = "";
        for (let i = 0; i < Foci.length; i++) {
            if (this.Futball[i].GetHfelidogol === this.Futball[i].GetHfelidogol || this.Futball[i].GetHfelidogol < this.Futball[i].GetVfelidogol) gycsapatnev = this.Futball[i].GetHcsapat;
        }

        return gycsapatnev.toString();
    }
}