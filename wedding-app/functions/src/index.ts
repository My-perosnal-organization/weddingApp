import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { google } from "googleapis";

export const onGiftSelectionCreated = onDocumentCreated(
  {
    document: "giftSelections/{id}",
    region: "us-central1",
  },
  async (event) => {
    const data = event.data?.data();
    if (!data) return;

    const auth = new google.auth.GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: "1crzFTw293zubVGYezeZAVCsp6r-vpTMlZMrqfnCtAUQ",
      range: "A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString(),
            data.giftName || "",
            data.senderName || "",
            data.visibility === "anonymous" ? "Sí" : "No",
            data.message || "",
          ],
        ],
      },
    });
  }
);
