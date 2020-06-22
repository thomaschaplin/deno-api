import { MongoClient, Database } from "../deps.ts";

class MongoDatabase {
  public client: MongoClient;
  constructor(public dbName: string, public url: string) {
    this.dbName = dbName;
    this.url = url;
    this.client = {} as MongoClient;
  }
  connect(): void {
    const client: MongoClient = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }
  get getDatabase(): Database {
    return this.client.database(this.dbName);
  }
}

export default MongoDatabase;
