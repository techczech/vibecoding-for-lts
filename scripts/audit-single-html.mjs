#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const filePath = process.argv[2];
const strict = process.argv.includes("--strict");

if (!filePath) {
  console.error("Usage: node scripts/audit-single-html.mjs dist/index.html [--strict]");
  process.exit(2);
}

const absolutePath = path.resolve(filePath);
const html = fs.readFileSync(absolutePath, "utf8");
const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

if (!/<!doctype html>/i.test(html)) fail("Missing doctype.");
if (/<script\b[^>]+\bsrc=/i.test(html)) fail("External script tag remains.");
if (/<link\b[^>]+\brel=["']?stylesheet/i.test(html)) fail("External stylesheet link remains.");
if (/<link\b[^>]+\brel=["']?modulepreload/i.test(html)) fail("Modulepreload link remains.");
if (/\b(?:src|href)=["']\/(?!\/)/i.test(html)) fail("Root-absolute asset URL remains.");
if (/\b(?:src)=["']https?:\/\//i.test(html)) fail("Remote media/script source remains.");
if (/\bfetch\s*\(/.test(html)) fail("Runtime fetch call found.");
if (/type=["']module["'][^>]*\bsrc=/i.test(html)) fail("External module script remains.");
if (/\/assets\//.test(html)) fail("Vite asset path remains.");

const sizeMb = Buffer.byteLength(html, "utf8") / 1024 / 1024;
if (sizeMb > 30) warn(`Large single HTML file: ${sizeMb.toFixed(1)} MB.`);

console.log(`Audited ${absolutePath}`);
console.log(`Size: ${sizeMb.toFixed(2)} MB`);

for (const warning of warnings) console.warn(`Warning: ${warning}`);
for (const failure of failures) console.error(`Failure: ${failure}`);

if (failures.length && strict) process.exit(1);
