const crypto = require("crypto");
// 해시와 암호의 차이
// 암호는 암호화 시킨걸 복호화 시킬수 있지만
// 해시는 복호화 못시킴
// 실제로 데이터베이스에 비밀번호를 해시화 시킨걸 저장하고
// 매치 시킬때도 입력받은 비밀번호를 해시 시킨거랑 데이터베이스에 저장된 해시시킨 비밀번호를 비교함

//============해시============
let data1 = "a";
let data2 = "aa";
// 현재 md5, sha1 은 이미 취약점이 발견되었다고 함
// a 와 aa 비슷한 문자열을 해시화 시켰는데 해시된 값은 완전 다른값
console.log(`base64 ${crypto.createHash('sha512').update(data1).digest("base64")}`);
console.log(`base64 ${crypto.createHash('sha512').update(data2).digest("base64")}`);

console.log(`base64 ${crypto.createHash('sha512').update("1234").digest("hex")}`);

//============암호화============
// 양방향 암호화
// >> 대칭형 암호화 : key 가 사용됨 암호화 하고 복호화 할때 동일한 key 가 있어야됨
const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456"

const message = "오늘 2시에 밥먹는다";

const cipher = crypto.createCipheriv(algorithm,key,iv);
let encryption = cipher.update(message,'utf-8','base64');
encryption += cipher.final("base64");
console.log("암호화 : "+encryption);

const decipher = crypto.createDecipheriv(algorithm,key,iv);
let decryption = decipher.update(encryption,"base64","utf-8");
decryption += decipher.final('utf-8');
console.log("복호화 : "+decryption)



