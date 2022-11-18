import { SessionUser } from 'src/app/models/session-user';
import { PedidoDetail } from './pedidoDetail';
import { Product } from './product';
import { User } from "./user";

export class Pedido{
    id: number;
    mayorista: SessionUser;
    date: string;
    producto: Product[];
    details: PedidoDetail[];
}