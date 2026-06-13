import 'dotenv/config';

import Airtable from 'airtable';
import { writeFile, mkdir } from 'node:fs/promises';

const token = process.env.AIRTABLE_TOKEN;
if (!token) {
  console.error('AIRTABLE_TOKEN не задан');
  process.exit(1);
}

Airtable.configure({ endpointUrl: 'https://api.airtable.com', apiKey: token });
const base = Airtable.base('appwl7ytcI8w3EdWC');

// перечисли ВСЕ таблицы, которые сейчас запрашивают три твоих файла:
const tables = ['Table 2'];

await mkdir('src/data', { recursive: true });

for (const name of tables) {
  const records = await base(name).select({ maxRecords: 100 }).all();
  // сохраняем в том же виде, что отдаёт SDK: { id, fields }
  const data = records.map((r) => ({ id: r.id, fields: r.fields }));
  const file = name.toLowerCase().replace(/\s+/g, '-'); // 'Table 2' -> 'table-2'
  await writeFile(`src/data/${file}.json`, JSON.stringify(data, null, 2));
  console.log(`✓ src/data/${file}.json (${data.length} записей)`);
}