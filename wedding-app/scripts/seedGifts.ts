import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Necesario en ESM para obtener __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas a archivos
const serviceAccountPath = path.resolve(
  __dirname,
  "../serviceAccountKey.json"
);
const giftsPath = path.resolve(__dirname, "../gifts.seed.json");

// Leer archivos JSON
const serviceAccount = JSON.parse(
  fs.readFileSync(serviceAccountPath, "utf-8")
);

const gifts = JSON.parse(
  fs.readFileSync(giftsPath, "utf-8")
) as {
  name: string;
  imageUrl?: string;
  productUrl?: string;
  order: number;
}[];

// Inicializar Firebase Admin
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function seedGifts() {
  const batch = db.batch();

  gifts.forEach((gift) => {
    const ref = db.collection("gifts").doc();
    batch.set(ref, {
      name: gift.name,
      imageUrl: gift.imageUrl || null,
      productUrl: gift.productUrl || null,
      order: gift.order,
      selected: false,
    });
  });

  await batch.commit();
  console.log("✅ Gifts cargados correctamente");
}

seedGifts().catch(console.error);
