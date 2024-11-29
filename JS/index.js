// fetch('http://localhost:3000/products')
//   .then(response => response.json())
//   .then(data => {
//     const container = document.getElementById('products');
//     let productHTML = '';
    
//     data.forEach(product => {
//       productHTML += `
//         <div>
//           <h3>${product.title}</h3>
//           <img src="${product.image}" alt="${product.title}" width="200">
//           <p>${product.description}</p>
//           <p><strong>$${product.price}</strong></p>
//         </div>
//       `;
//     });

//     container.innerHTML = productHTML;
//   })
//   .catch(error => console.error('Error:', error));
