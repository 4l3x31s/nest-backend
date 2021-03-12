import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: '172.50.0.4',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'prueba',
      schema: 'public',
      synchronize: true,
      entities: [__dirname + '/model/**/*{.ts,.js}'],
      autoLoadEntities: true,
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
