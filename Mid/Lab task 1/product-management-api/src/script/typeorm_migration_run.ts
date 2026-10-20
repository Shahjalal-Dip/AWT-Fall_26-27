import { dataSourceOptions } from "@/config/database.config";
import { DataSource } from "typeorm";

async function migrateRun(): Promise<void> {
  const dataSource = new DataSource(dataSourceOptions);

  try {
    await dataSource.initialize();
    const migrations = await dataSource.runMigrations();
    console.log(
      migrations.length
        ? `Applied ${migrations.length} migration(s).`
        : "No pending migrations.",
    );
  } catch (error) {
    console.error("Migration failed:", error);
    process.exitCode = 1;
  } finally {
    if (dataSource.isInitialized) {
      await dataSource.destroy();
    }
  }
}

void migrateRun();
