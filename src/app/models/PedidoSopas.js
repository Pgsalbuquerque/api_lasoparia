import Sequelize, { Model } from 'sequelize';

class PedidosSopas extends Model {
    static init(sequelize) {
        super.init(
            {
                sopas: Sequelize.STRING,
                value: Sequelize.INTEGER,
                pagamento: Sequelize.STRING,
                rua: Sequelize.STRING,
                bairro: Sequelize.STRING,
                numero: Sequelize.STRING,
                referencia: Sequelize.STRING,
            },
            {
                sequelize,
            }
        )
    }
}

export default PedidosSopas;