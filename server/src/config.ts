export const config = () => ({
    databaseProd: {  
        type: 'postgres',
        host: process.env.HOST,
        port: 5432,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        entities: ['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
        logging:true,
        ssl: true,
    },
    database: {  
        type: 'postgres',
        host: process.env.HOST,
        port: 5432,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        entities: ['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
        logging:true,
    }
});