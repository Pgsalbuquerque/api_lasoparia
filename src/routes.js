import { Router } from 'express';

import PedidoSopasController from './app/controllers/PedidoSopasController'

const routes = new Router();

routes.post("/api/fazerpedido", PedidoSopasController.store)

routes.get("/api/pedidosdia", PedidoSopasController.index)

routes.get("/api/pedidossemana", PedidoSopasController.week)

routes.get("/api/pedidosmes", PedidoSopasController.month)

routes.get("/api/pedidosall", PedidoSopasController.all)



export default routes;