export default class Foci {
    private fordulo: number;
    private hazai: number;
    private vendeg: number;
    private hfelidogol: number;
    private vfelidogol: number;
    private hcsapat: string;
    private vcsapat: string;
    constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this.fordulo = parseInt(m[0]);
        this.hazai = parseInt(m[1]);
        this.vendeg = parseInt(m[2]);
        this.hfelidogol = parseInt(m[3]);
        this.vfelidogol = parseInt(m[4]);
        this.hcsapat = m[5];
        this.vcsapat = m[6];
    }

    public get GetFordulo(): number {
        return this.fordulo;
    }

    public get GetHazai(): number {
        return this.hazai;
    }

    public get GetVendeg(): number {
        return this.vendeg;
    }

    public get GetHfelidogol(): number {
        return this.hfelidogol;
    }

    public get GetVfelidogol(): number {
        return this.hfelidogol;
    }

    public get GetHcsapat(): string {
        return this.hcsapat;
    }

    public get GetVcsapat(): string {
        return this.vcsapat;
    }
}