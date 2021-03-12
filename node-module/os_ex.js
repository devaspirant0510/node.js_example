const os = require("os");
//process.arch 와 동일
console.log(os.arch());
//cpu 정보
console.log(`cpu 정보 `);
console.log(os.cpus());
console.log(`cpu 코어개수 : ${os.cpus().length}`)
//운영체제 정보
console.log(os.type());
// 운영체제가 부팅이후 흐린시간을 보여줌 process.uptime()은 node 실행 후 흐린시간임
console.log(`부팅 이후 ${os.uptime()}초 동안 실행됨`);
// 컴퓨터 이름
console.log(`컴퓨터 이름 : ${os.hostname()}`);
// os 버전
console.log(`os 버전 : ${os.release()}`);
// 임시파일 저장 경로
console.log(`임시파일 저장 경로 : ${os.tmpdir()}`)
// 홈 디렉토리 경로
console.log(`홈 디렉토리 경로 : ${os.homedir()}`);
// 메모리 사용량 / 총 메모리
console.log(`메모리 사용량/전체 메모리 : ${os.freemem()}/${os.totalmem()}`);
// 네트워크 정보
console.log(`네트워크 정보 :`);
console.log(os.networkInterfaces());