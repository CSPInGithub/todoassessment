import fs from 'fs';
import path from 'path';


export function readJsonFile(fileName) {
  const filePath = path.join(process.cwd(), 'test-data/apidata', fileName);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
