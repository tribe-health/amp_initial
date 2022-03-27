import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContentTypeService } from "./contentType.service";
import { ContentTypeControllerBase } from "./base/contentType.controller.base";

@swagger.ApiTags("contentTypes")
@common.Controller("contentTypes")
export class ContentTypeController extends ContentTypeControllerBase {
  constructor(
    protected readonly service: ContentTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
