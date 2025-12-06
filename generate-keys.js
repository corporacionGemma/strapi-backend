// Script para generar claves secretas para Strapi en producción
// Uso: node generate-keys.js

const crypto = require("crypto");

console.log("\n🔑 Generando claves secretas para Strapi en producción...\n");
console.log("Copia estos valores en tu archivo .env de producción:\n");
console.log("=".repeat(80));

// Generar APP_KEYS (4 claves)
const appKeys = [];
for (let i = 0; i < 4; i++) {
  appKeys.push(crypto.randomBytes(32).toString("base64"));
}
console.log(`APP_KEYS="${appKeys.join(",")}"`);

// Generar otros secretos
console.log(`API_TOKEN_SALT=${crypto.randomBytes(32).toString("base64")}`);
console.log(`ADMIN_JWT_SECRET=${crypto.randomBytes(32).toString("base64")}`);
console.log(`TRANSFER_TOKEN_SALT=${crypto.randomBytes(32).toString("base64")}`);
console.log(`JWT_SECRET=${crypto.randomBytes(32).toString("base64")}`);
console.log(`ENCRYPTION_KEY=${crypto.randomBytes(16).toString("hex")}`);

console.log("=".repeat(80));
console.log("\n⚠️  IMPORTANTE: Guarda estas claves de forma segura.");
console.log("⚠️  NO las compartas ni las subas a repositorios públicos.\n");
