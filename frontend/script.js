function openModal(foodName, foodPrice) {
    document.getElementById('modal-food-name').innerText = foodName;
    document.getElementById('modal-food-price').innerText = `$${foodPrice.toFixed(2)}`;
    document.getElementById('quantity').innerText = 1; // 초기 갯수는 1로 설정
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function increaseQuantity() {
    let quantity = parseInt(document.getElementById('quantity').innerText);
    document.getElementById('quantity').innerText = quantity + 1;
}

function decreaseQuantity() {
    let quantity = parseInt(document.getElementById('quantity').innerText);
    if (quantity > 1) {
        document.getElementById('quantity').innerText = quantity - 1;
    }
}
