// node 버전
console.log(`노드 버전 : ${process.version}`);
// architecture 정보
console.log(`아키텍처정보 : ${process.arch}`);
// cpu 사용량
const cpu = process.cpuUsage();
console.log(`cpu 사용량 : { system:${cpu.system}, user:${cpu.user} }`);
// 운영체제 플랫폼 정보
console.log(`운영체재 플랫폼 : ${process.platform}`);
// 프로세스 아이디
console.log(`프로세스 아이디 : ${process.pid}`);
// 프로세스가 시작된후 흐른시간
console.log(`실행 시간 : ${process.uptime()}`);
// 노드 경로
console.log(`노드경로 : ${process.execPath}`);
// 실행 경로
console.log(`실행경로 : ${process.cwd()}`);
// nextTick
// 우선순위 nextTick->promise->(setTimeout,setImmediate) 환경에 따라 우선순위 다름
console.log("=======callback======")
setImmediate(()=>{
    console.log("immediate");
})
process.nextTick(()=>{
    console.log("nextTick");
});
// 0일경우 Immediate 쓰는것을 추천함
setTimeout(()=>{
    console.log("setTimeout");
},0);
Promise.resolve().then(()=>{
    console.log("promise")
})
