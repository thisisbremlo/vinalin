#!/usr/bin/env node

/*
 * Backend health/availability check for Supabase.
 *
 * This script updates one dedicated operational row to confirm that Vinalin can
 * still reach Supabase. It does not create users, generate product traffic,
 * touch production content, or record artificial user activity.
 */

const healthCheckId = process.env.HEALTH_CHECK_ID || '1';
const source = process.env.HEALTH_CHECK_SOURCE || 'github-actions';
const supabaseUrl = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

function fail(message) {
  console.error(`Supabase health check failed: ${message}`);
  process.exit(1);
}

if (!supabaseUrl) {
  fail('SUPABASE_URL is not set.');
}

if (!serviceRoleKey) {
  fail('SUPABASE_SERVICE_ROLE_KEY is not set.');
}

if (!/^\d+$/.test(healthCheckId)) {
  fail('HEALTH_CHECK_ID must be a numeric row id.');
}

if (!source.trim() || source.length > 80) {
  fail('HEALTH_CHECK_SOURCE must be 1-80 characters.');
}

async function main() {
  const endpoint = new URL('/rest/v1/health_checks', supabaseUrl);
  endpoint.searchParams.set('id', `eq.${healthCheckId}`);
  endpoint.searchParams.set('select', 'id,checked_at,source');

  const response = await fetch(endpoint, {
    method: 'PATCH',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      checked_at: new Date().toISOString(),
      source,
    }),
  });

  const bodyText = await response.text();

  if (!response.ok) {
    fail(`Supabase returned HTTP ${response.status}: ${bodyText || response.statusText}`);
  }

  let rows;
  try {
    rows = bodyText ? JSON.parse(bodyText) : [];
  } catch {
    fail('Supabase returned a non-JSON response.');
  }

  if (!Array.isArray(rows) || rows.length !== 1) {
    fail(`Expected to update exactly one health_checks row, updated ${Array.isArray(rows) ? rows.length : 0}.`);
  }

  const row = rows[0];
  console.log(`Supabase health check updated row ${row.id} at ${row.checked_at} from ${row.source}.`);
}

main().catch((error) => {
  fail(error instanceof Error ? error.message : String(error));
});
