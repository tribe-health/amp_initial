import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ContentTypeResolverBase } from "./base/contentType.resolver.base";
import { ContentType } from "./base/ContentType";
import { ContentTypeService } from "./contentType.service";

@graphql.Resolver(() => ContentType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ContentTypeResolver extends ContentTypeResolverBase {
  constructor(
    protected readonly service: ContentTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
