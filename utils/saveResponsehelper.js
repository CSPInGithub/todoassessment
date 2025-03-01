import fs from 'fs';
import path from 'path';


export function saveApiResponse(body, testInfo) {
  // Define folder path in project root
  const folderPath = path.join(process.cwd(), 'apiResponses');

  // Create a valid filename from the test name
  const fileName = `${testInfo.title.replace(/\s+/g, '_')}.json`;
  const filePath = path.join(folderPath, fileName);

  // Ensure the folder exists
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Save response as JSON
  fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');

  console.log(`✅ API response saved at: ${filePath}`);
}
