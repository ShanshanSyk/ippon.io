// Firebaseの初期設定
// このファイルを他のページより先に読み込むことで、
// db（データベース）が使えるようになります。

const firebaseConfig = {
  apiKey: "AIzaSyBbMRJfjp1DbHLwS30CAo8SdIQ0HVUZY4c",
  authDomain: "ippon-gp-73.firebaseapp.com",
  projectId: "ippon-gp-73",
  storageBucket: "ippon-gp-73.firebasestorage.app",
  messagingSenderId: "230460981460",
  appId: "1:230460981460:web:ff76549581a0d217143b41",
  measurementId: "G-CJKG5T53MP"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 名前の長さチェック（全角文字は2バイト、半角は1バイトとして数える。20バイト＝全角10文字程度）
function nameByteLength(str){
  let bytes = 0;
  for(const ch of String(str)){
    bytes += ch.charCodeAt(0) > 255 ? 2 : 1;
  }
  return bytes;
}
const NAME_MAX_BYTES = 20;

