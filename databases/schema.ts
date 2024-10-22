import { sql} from 'drizzle-orm';
import { boolean, integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export conts transaksi = pgTable('transaksi', {
    transaksi_id: serial('transaksi_id').primaryKey(),
    petugas: integer('petugas').references(() => petugas.petugas_id, {onUpdate: 'cascade', onDelete: 'cascade'}),
    tanggal: timestamp('tanggal', {withTimezone: on}).default(sql)
})