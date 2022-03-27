import { Module } from "@nestjs/common";
import { ContentTypeModuleBase } from "./base/contentType.module.base";
import { ContentTypeService } from "./contentType.service";
import { ContentTypeController } from "./contentType.controller";
import { ContentTypeResolver } from "./contentType.resolver";

@Module({
  imports: [ContentTypeModuleBase],
  controllers: [ContentTypeController],
  providers: [ContentTypeService, ContentTypeResolver],
  exports: [ContentTypeService],
})
export class ContentTypeModule {}
