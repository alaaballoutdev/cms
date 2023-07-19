import PocketBase from "pocketbase";

export class Database {
  private static globalPocket: { db: PocketBase } = global as unknown as {
    db: PocketBase;
  };

  public static getConnection() {
    if (!this.globalPocket.db) {
      this.globalPocket.db = new PocketBase(process.env.POCKET_BASE_URL);
    }
    this.globalPocket.db.autoCancellation(false);
    return this.globalPocket.db;
  }
}
