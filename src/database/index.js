import Sequelize from 'sequelize';

import PedidosSopas from '../app/models/PedidoSopas';

import databaseConfig from '../config/database'

const models = [PedidosSopas]

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);

        models.map( model => model.init(this.connection));
    }
}

export default new Database();