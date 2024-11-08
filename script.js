document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const tensanpham = document.getElementById('tensanpham').value;
    const giagoc = document.getElementById('giagoc').value;
    const giagiam = document.getElementById('giagiam').value;
    const hinhanhsanpham = document.getElementById('hinhanhsanpham').value;
    const newProduct = document.createElement('section');
    newProduct.classList.add('item');
    newProduct.innerHTML = `
        <a href="#" class="item-image">
            <img src="${hinhanhsanpham}" alt="${tensanpham}">
        </a>
        <h3><a href="#" class="item-title">${tensanpham}</a></h3>
        <div class="item-price">
            <span class="original-price">${giagoc}đ</span>
            <span class="discounted-price">${giagiam}đ</span>
        </div>
        <div class="item-cmt">
            <  span>0 đánh giá</span>
    </div>
    `;
    document.getElementById('productList').appendChild(newProduct);
    document.getElementById('productForm').reset();
});
