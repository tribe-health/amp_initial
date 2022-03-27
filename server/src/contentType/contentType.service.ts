import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ContentTypeServiceBase } from "./base/contentType.service.base";

@Injectable()
export class ContentTypeService extends ContentTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
