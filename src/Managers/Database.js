const { PrismaClient } = require('@prisma/client')
const { bold, getTime, info, success } = require('../utils/logger.js')
const prisma = new PrismaClient()

async function main() {
    await prisma.$connect()
}

module.exports = (client) => {

    main()
        .catch((e) => {
            console.log(bold(`[${info('PRISMA')}] ${getTime(new Date())} > Ocorreu um erro ao conectar na database`));
            throw e;
        })
        .then(() => {
            console.log(success(`[${info('PRISMA')}] ${getTime(new Date())} > Conectado na database`));
            client.db = prisma;
        });

}