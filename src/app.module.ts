import { Module } from '@nestjs/common';
import { AdminModule } from './module/admin/admin.module';
import { ToolsService } from './service/tools/tools.service';

@Module({
  imports: [AdminModule],
  controllers: [],
  providers: [ToolsService],
})
export class AppModule {}
