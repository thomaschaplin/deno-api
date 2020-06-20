export const env = Deno.env.toObject();
export const PORT = env.PORT || 4000;
export const HOST = env.HOST || "localhost";
export const DB_NAME = env.DB_NAME || "deno_api";
export const DB_URL = env.DB_URL || "mongodb://localhost:27017";
export const JWT_KEY = env.JWT_KEY || "wbwyCge0lsYhW9Gt34nF";
