/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images:{
    domains:['firebasestorage.googleapis.com'],
  },
  env:{
    NEXT_PUBLIC_FIREBASE_API_KEY: 'AIzaSyAk86F24UPCi-uMt2E5qnh_iig3XWs8NR4',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'rits-browser-26f01.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'rits-browser-26f01',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'rits-browser-26f01.appspot.com',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '8025615781',
    NEXT_PUBLIC_FIREBASE_APP_ID: '1:8025615781:web:2e3d6238d2032c5a89cc4c',
    GOOGLE_ID: '8025615781-ckoej5panofd9o8ipqbi1a7mrcs367mc.apps.googleusercontent.com',
    GOOGLE_SECRET: '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',
    NEXTAUTH_URL: 'http://localhost:3000',
  }
}

