import { EntityMutable } from 'src/core/common_models/mutable.entity';
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import * as bcrypt from 'bcrypt';

@JsonObject()
export class User extends EntityMutable {
  private static readonly salt = 10;

  @JsonProperty()
  email: string;

  @JsonProperty()
  password: string;

  @JsonProperty()
  name: string;

  constructor(params: {
    id?: string;
    email: string;
    password: string;
    name: string;
    createdAtUtc?: Date;
    updatedAtUtc?: Date;
  }) {
    super({
      ...params,
    });
    if (!params) return;
    Object.assign(this, params);
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }

  public getPassword(): string {
    return this.password;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setPassword(password: string) {
    this.password = password;
  }
  async comparePassword(password: string): Promise<boolean> {
    if (!this.password) return false;
    return await bcrypt.compare(password, this.password);
  }

  static async hashPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, User.salt);
    return hash;
  }
}
