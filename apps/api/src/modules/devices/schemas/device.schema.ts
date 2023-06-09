import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type DeviceDocument = HydratedDocument<Device>;

@Schema()
export class Device {
  @Prop()
  public isActivated: boolean;

  @Prop({ required: true, unique: true })
  public activationCode: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
