var http = require('http');
var url = require('url');
console.log('listening...')

http.createServer(function (req, res) {
	
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
        console.log('favicon requested');
        return;
    }
    else if(req.url.startsWith('/image')){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("success");
        var q = url.parse(req.url, true).query;
        send({
            to: q.phone1,
            from: conf.from,
            text: `${q.phone1}님께 ${q.url_1} 링크를 열고 이미즈를 보기를 바랍니다`,
            type: `CTA`,
            kakaoOptions: {
                pfId: 'KA01PF20rfasgdfsaadsfSgB8488024v'
            }
        })

        return;
    }
    else if(req.url.startsWith('/recommend')) {
        res.writeHead(200, {'Content-Type': 'text/html'});

        var q = url.parse(req.url, true).query;
        res.end("success!!");
        send({
            to: q.phone2,
            from: conf.from,
            text: `${q.phone1}님께서 ${q.phone2}님께 수강권 포인트를 보내셨습니다.\n${q.phone2}\n아래 '수강권 포인트 받기'  버튼을 누르세요.`,
            type: `ATA`,
            kakaoOptions: {
                pfId: 'KA01PasdfasdfsadfgB8488024v',
                templateId: 'KA0sdfsdfsdfdsf85707eg4RrRXHOt',
                disableSms: false,
                buttons: [
                    {
                        buttonName: '수강권 포인트 받기',
                        buttonType: 'BK'
                    }
                ]
            }
        })
    }
	port = process.env.PORT || 8080;
}).listen(port);//


const { config, Group } = require('solapi')
const conf = require('./config')



config.init({
    apiKey: conf.apiKey,
    apiSecret: conf.apiSecret
})

async function send (message, agent = {}) {
    console.log(message);
    try {
        console.log(await Group.sendSimpleMessage(message, agent))
    } catch (e) {
        console.log(e)
    }
}