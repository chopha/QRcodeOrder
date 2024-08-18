const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('frontend'));
// 바디 파서를 설정하여 JSON 데이터 처리
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.post('/checkout', (req, res) => {
    const cart = req.body.cart;

    if (cart && cart.length > 0) {
        // 주문 처리 로직 (예: 데이터베이스에 저장)
        console.log('Order received:', cart);
        // 성공 응답 전송
        res.json({ success: true });
    } else {
        // 실패 응답 전송
        res.json({ success: false });
    }
});

// 서버 시작
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});