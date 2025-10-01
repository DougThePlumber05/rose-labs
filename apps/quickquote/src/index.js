#!/usr/bin/env node

const parseArgs = (input) => {
  let service = '';
  let hours = 0;
  let rate = 0;
  input.split(',').forEach(part => {
    const parts = part.split(':');
    const key = parts[0].trim().toLowerCase();
    const value = parts[1].trim();
    if (key === 'service') {
      service = value;
    } else if (key === 'labor') {
      hours = parseFloat(value.replace('h', ''));
    } else if (key === 'rate') {
      rate = parseFloat(value);
    }
  });
  const total = hours * rate;
  console.log('Service: ' + service);
  console.log('Total due: $' + total.toFixed(2));
};

parseArgs(process.argv.slice(2).join(' '));
