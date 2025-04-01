import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export function getPackageVersion(): string {
  try {
    // ESM doesn't have __dirname, so we need to calculate it
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    // Navigate to the package.json from the current file
    const packageJsonPath = join(__dirname, '..', '..', 'package.json');
    
    // Read and parse package.json
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version || '1.0.0';
  } catch (error) {
    // Return a default version if we can't read the package.json
    return '1.0.0';
  }
}
