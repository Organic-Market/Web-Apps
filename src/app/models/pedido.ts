import { PedidoDetail } from './pedidoDetail';
import { User } from "./user";

export class Pedido{
    id: number;
    user: User;
    date: string;
    details: PedidoDetail[];
}