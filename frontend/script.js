// 전역 장바구니 배열
let cart = [];

// 모달에서 "Add to Cart" 버튼을 눌렀을 때 호출되는 함수
function addToCartFromModal() {
    const foodName = document.getElementById('modal-food-name').innerText;
    const foodPrice = parseFloat(document.getElementById('modal-food-price').innerText.replace('$', ''));
    const quantity = parseInt(document.getElementById('quantity').innerText);

    // 장바구니에 해당 아이템이 이미 있는지 확인
    let item = cart.find(product => product.name === foodName);
    if (item) {
        // 이미 장바구니에 있으면 수량만 증가
        item.quantity += quantity;
    } else {
        // 장바구니에 없으면 새로 추가
        cart.push({ name: foodName, price: foodPrice, quantity: quantity });
    }

    // 모달 닫기
    closeModal();

    // 장바구니 요약 업데이트
    updateCartSummary();
}

// 장바구니 요약 업데이트
function updateCartSummary() {
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    
    let totalItems = 0;
    let totalCost = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalCost += item.price * item.quantity;
    });

    cartCount.textContent = totalItems;
    totalPrice.textContent = totalCost.toFixed(2);
}

// Checkout 버튼 클릭 시
function checkout() {
    fetch('/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cart })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Order placed successfully!');
            cart = []; // 장바구니 초기화
            updateCartSummary(); // 요약 업데이트
        } else {
            alert('Failed to place order.');
        }
    })
    .catch(error => console.error('Error:', error));
}

// 모달에서 "Add to Cart" 버튼을 눌렀을 때 호출
document.querySelector('.add-to-cart').addEventListener('click', addToCartFromModal);
