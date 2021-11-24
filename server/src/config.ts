export const config = () => ({
    databaseProd: {  
        type: 'postgres',
        host: process.env.HOST_RENDER,
        port: 5432,
        username: process.env.USERNAME_RENDER,
        password: process.env.PASSWORD_RENDER,
        database: process.env.DATABASE_RENDER,
        entities: ['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
        logging:true,
        ssl: true,
    },
    database: {  
        type: 'postgres',
        host: process.env.HOST_LOCAL,
        port: 5432,
        username: process.env.USERNAME_LOCAL,
        password: process.env.PASSWORD_LOCAL,
        database: process.env.DATABASE_LOCAL,
        entities: ['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
        logging:true,
    }
});