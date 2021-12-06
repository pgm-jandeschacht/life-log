import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
    // With Express
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableCors();

    app.useGlobalPipes(new ValidationPipe());

    // add session
    app.use(
        session({
        secret: 'lifelog secret', // put in .env
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000} // 1h in ms, also other settings for security,
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    await app.listen(3000);
}
bootstrap();
