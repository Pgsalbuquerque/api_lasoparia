import {startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth} from 'date-fns';
import { Op } from 'sequelize';

import PedidosSopas from '../models/PedidoSopas'
import Sopas from '../models/Sopas'

class PedidoSopasController {
    async store (req, res) {
        const { sopas: sopas, pagamento: pagamento, rua: rua,  bairro: bairro, numero: numero, referencia: referencia} = req.body;
        sopas.replace(" ", "")
        if (sopas == "") {
            return res.sendStatus(400)
        }
        if (pagamento == "") {
            return res.sendStatus(400)
        }
        if (rua == "") {
            return res.sendStatus(400)
        }
        if (bairro == "") {
            return res.sendStatus(400)
        }
        if (numero == "") {
            return res.sendStatus(400)
        }

        let sopasArray = sopas.split([","])

        let qt = sopasArray.length
        for (let i = 0; i < qt; i++) {
            sopasArray[i] = sopasArray[i].toUpperCase()
        }

        let Sopas = ""
        sopasArray.forEach(element => {
            if (Sopas.indexOf(element) != -1) {
                Sopas += element;
                
            } 
        });

        if (Sopas == "") {
            return res.sendStatus(400)
        }

        const value = qt < 3 ? qt * 11 : qt * 10

        const pedido = await PedidosSopas.create({
            sopas,
            value,
            pagamento,
            rua,
            bairro,
            numero,
            referencia
        })

        let data =  pedido.createdAt.getTime() - ((3*60*60)*1000)
        data = new Date(data)
        let d = `${data.getDate()}/${(data.getMonth() + 1).toString().length == 1 ? '0' + (data.getMonth() + 1).toString() : (data.getMonth() + 1).toString()}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        console.log(data)
        return res.json({sopas, value, pagamento, rua, bairro, numero, referencia, d} )
    }

    
    async index (req, res) {
        const date = new Date();

        const pedidos = await PedidosSopas.findAll({
            where: { 
                created_at: {
                    [Op.between]: [startOfDay(date), endOfDay(date)],
                },
            },
            attributes:
            [ 'id','sopas', 'value', 'pagamento', 'rua', 'bairro', 'numero', 'referencia' ,'created_at'  ],
        }
        )

        return res.json(pedidos);
    }

    async week (req, res) {
        const date = new Date();

        const pedidos = await PedidosSopas.findAll({
            where: { 
                created_at: {
                    [Op.between]: [startOfWeek(date), endOfWeek(date)],
                },
            },
            attributes:
            [ 'id','sopas', 'value', 'pagamento', 'rua', 'bairro', 'numero', 'referencia' ,'created_at'  ],
        }
        )

        return res.json(pedidos);
    }

    async month (req, res) {
        const date = new Date();
        console.log("start of month: ", startOfMonth(date))
        console.log("end of month: ", endOfMonth(date))
        const pedidos = await PedidosSopas.findAll({
            where: { 
                created_at: {
                    [Op.between]: [startOfMonth(date), endOfMonth(date)],
                },
            },
            attributes:
            [ 'id','sopas', 'value', 'pagamento', 'rua', 'bairro', 'numero', 'referencia' ,'created_at'  ],
        }
        )

        return res.json(pedidos);
    }

    async all (req, res) {

        const pedidos = await PedidosSopas.findAll({
            attributes:
            [ 'id','sopas', 'value', 'pagamento', 'rua', 'bairro', 'numero', 'referencia' ,'created_at'  ],
        }
        )

        return res.json(pedidos);
    }
}



export default new PedidoSopasController();
