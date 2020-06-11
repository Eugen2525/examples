module.exports = {
// 계정의 ApiKey와 ApiSecret을 입력해주세요
// https://solapi.com/credentials
  apiKey: 'NsadfsadfH4XH4N',
  apiSecret: 'AE2A1FRsdfasdfdsV0RCCKRMU7XNUZXWLI',
  type: 'SMS', // 문자 타입 (SMS, LMS, MMS, CTA, ATA)
  to: '01022223333', // 문자를 받을 수신번호
  from: '01022223333', // https://solapi.com/senderids 에서 등록한 발신번호
  text: 'hello' // 문자 내용
}
