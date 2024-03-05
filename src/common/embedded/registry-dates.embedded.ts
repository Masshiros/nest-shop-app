import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class RegistryDates {
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updateAt: Date;
}
