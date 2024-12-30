import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { EntityImmutable } from './immutable.entity';

@JsonObject()
export class EntityMutable extends EntityImmutable {
  @JsonProperty('updatedAtUtc')
  private updatedAtUtc?: Date;

  constructor(params: {
    id?: string;
    createdAtUtc?: Date;
    updatedAtUtc?: Date;
  }) {
    super(params);
    if (!params) return;
    this.setId(params?.id);
    this.setUpdatedAtUtc(params?.updatedAtUtc);
  }

  public getUpdatedAtUtc(): Date {
    return this.updatedAtUtc;
  }

  public setUpdatedAtUtc(updatedAtUtc: Date) {
    this.updatedAtUtc = updatedAtUtc;
  }
}
