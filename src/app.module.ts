import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommentController } from './comment/comment.controller'

@Module({
  imports: [],
  controllers: [AppController, CommentController],
  providers: [AppService]
})
export class AppModule {}
