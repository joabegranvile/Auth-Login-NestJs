import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export abstract class EntityImmutable {
  @JsonProperty('id')
  private id: string;

  @JsonProperty('createdAtUtc')
  private createdAtUtc: Date;

  constructor(params: { id?: string; createdAtUtc?: Date }) {
    if (!params) return;
    this.setId(params?.id);
    this.setCreatedAtUtc(params?.createdAtUtc);
  }

  public setId(id: string) {
    this.id = id ?? crypto.randomUUID();
  }

  public getId(): string {
    return this.id;
  }

  public getCreatedAtUtc(): Date {
    return this.createdAtUtc;
  }

  public setCreatedAtUtc(createInUtc?: Date): void {
    this.createdAtUtc = createInUtc ?? new Date();
  }
}
