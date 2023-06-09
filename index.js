const QRCode = require('qrcode');
const fs = require('fs');

const data = 'https://example.com'; // The data you want to encode in the QR code

QRCode.toFile('qrcode.png', data, (err, url) => {
  if (err) throw err;
  console.log('QR code generated!');
});
