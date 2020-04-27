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

    public MasodikFeladat(bek:number): string {
        let vcsapat = "";
        let hcsapat = "";
        let HFeredmeny = 0;
        let VFeredmeny = 0;
        let Hvegeredmeny = 0;
        let Vvegeredmeny = 0;

        for (let i = 0; i < Foci.length; i++) {
            if (this.Futball[i].GetFordulo == bek) {
                hcsapat == this.Futball[i].GetHcsapat;
                vcsapat == this.Futball[i].GetVcsapat;
                HFeredmeny == this.Futball[i].GetHfelidogol;
                VFeredmeny == this.Futball[i].GetVfelidogol;
                Hvegeredmeny == this.Futball[i].GetHazai;
                Vvegeredmeny == this.Futball[i].GetVendeg;
            }
        }

        return hcsapat + "-" + vcsapat + ": " + Hvegeredmeny + "-" + Vvegeredmeny + " (" + HFeredmeny + "-" + VFeredmeny + ")";
    }

    public get HarmadikFeladat(): string {
        let gycsapatnev = "";
        for (let i = 0; i < Foci.length; i++) {
            if (this.Futball[i].GetHfelidogol == this.Futball[i].GetHfelidogol || this.Futball[i].GetHfelidogol < this.Futball[i].GetVfelidogol) gycsapatnev = this.Futball[i].GetHcsapat;
        }

        return gycsapatnev.toString();
    }

    public NegyedikFeladat(bekeres:string): string {
        let csapat = "";

        for (let i = 0; i < Foci.length; i++) {
            if (this.Futball[i].GetVcsapat == bekeres) {
                csapat = this.Futball[i].GetVcsapat;
            }

            else if(this.Futball[i].GetHcsapat == bekeres) {
                csapat = this.Futball[i].GetHcsapat;
            }
        }

        return csapat;
    }

    public OtodikFeladat(bekeres:string): number {
        let lottgolok = 0;
        let kapottgolok = 0;

        for (let i = 0; i < Foci.length; i++) {
            if(this.Futball[i].GetHcsapat == bekeres) {
                lottgolok += this.Futball[i].GetHazai;
            }

            else if(this.Futball[i].GetVcsapat == bekeres) {
                kapottgolok += this.Futball[i].GetVendeg;
            }
        }

        return parseInt("Lőtt: " + lottgolok + ", Kapott: " + kapottgolok);
    }
}