import { PedidoDetail } from './pedidoDetail';
import { User } from "./user";

export class Pedido{
    id: number;
    mayorista: User;
    date: string;
    detallePedidos: PedidoDetail[];
}