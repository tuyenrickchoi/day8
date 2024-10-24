								
function getProducts(callback) {									
fetch('https://6718ead67fc4c5ff8f4bad08.mockapi.io/api/v1/hotel')									
.then(response => response.json())									
.then(data => callback(null, data))									
.catch(error => callback(error, null));									
}									
									
// Callback function để xử lý kết quả trả về từ API									
function handleProducts(error, data) {									
if (error) {									
console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);									
} else {									
const productTableBody = document.getElementById('productTableBody');									
data.forEach(product => {									
const row = `<tr>									
<td>${product.id}</td>									
<td>${product.name}</td>		
<td>
    <img src="${product.image}" alt="" style="width: 50px; height: 30px;">
</td>						
<td>${product.gia}</td>		
<td>${product.location}</td>								
</tr>`;									
productTableBody.innerHTML += row;									
});									
}									
}									
									
// Gọi hàm getProducts với callback handleProducts									
getProducts(handleProducts);	

