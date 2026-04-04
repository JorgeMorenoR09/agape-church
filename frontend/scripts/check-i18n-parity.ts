/**
 * Script de paridad i18n ES ↔ EN
 *
 * Regla: toda clave que exista en src/i18n/es.ts debe existir en
 * src/i18n/en.ts y viceversa. Si se agrega contenido en español,
 * DEBE agregarse su traducción en inglés antes de hacer deploy.
 *
 * Uso: npm run test:parity
 */

import es from '../src/i18n/es.ts';
import en from '../src/i18n/en.ts';

type AnyObject = Record<string, unknown>;

/**
 * Extrae todas las claves hoja del objeto de forma recursiva.
 * Los arrays se representan como clave[length=N] para detectar
 * diferencias en la cantidad de elementos.
 */
function getLeafKeys(obj: AnyObject, prefix = ''): string[] {
  const keys: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (Array.isArray(value)) {
      keys.push(`${fullKey}[length=${value.length}]`);
      // Inspeccionar las claves del primer objeto del array, si aplica
      if (value.length > 0 && typeof value[0] === 'object' && value[0] !== null) {
        keys.push(...getLeafKeys(value[0] as AnyObject, `${fullKey}[*]`));
      }
    } else if (value !== null && typeof value === 'object') {
      keys.push(...getLeafKeys(value as AnyObject, fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys;
}

const esKeys = new Set(getLeafKeys(es as unknown as AnyObject));
const enKeys = new Set(getLeafKeys(en as unknown as AnyObject));

const missingInEN = [...esKeys].filter((k) => !enKeys.has(k));
const missingInES = [...enKeys].filter((k) => !esKeys.has(k));

let hasErrors = false;

if (missingInEN.length > 0) {
  console.error('\n❌  Claves presentes en ES pero ausentes en EN:');
  missingInEN.forEach((k) => console.error(`      • ${k}`));
  hasErrors = true;
}

if (missingInES.length > 0) {
  console.error('\n❌  Keys present in EN but missing in ES:');
  missingInES.forEach((k) => console.error(`      • ${k}`));
  hasErrors = true;
}

if (hasErrors) {
  console.error(
    '\n⚠️  Paridad rota. Agrega las claves faltantes en el archivo correspondiente antes de continuar.\n',
  );
  process.exit(1);
} else {
  console.log('\n✅  Paridad ES ↔ EN verificada — todas las claves están sincronizadas.\n');
}
