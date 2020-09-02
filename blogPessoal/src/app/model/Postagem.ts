import { Tema } from './Tema';
import { Data } from '@angular/router';

export class Postagem {
    public id: number;
    public titulo: string;
    public texto: string;
    public data: Date;
    public tema: Tema
}