# MIDDLEWARE

Middleware là một thư mục chứa các file định nghĩa các hàm kiểm tra điều kiển nào đó (ví dụ người dùng hiện tại đã login chưa) trước khi chính thức bước vào trang. - Nếu thỏa mãn điều kiện thì cho qua và vào trang cần tới.
- Nếu không thỏa mãn thực hiện các thao tác khác (ví dụ như redirect về trang login nếu chưa login)

!! Để sử dụng middleware riêng ở các trang trong thư mục `page`, phải sử dụng thuộc tính `middleware: 'ten-file-middleware'`

!! Để sử dụng middleware mặc định cho các trang thực hiện cấu hình trong `nuxt.config.js` với thuộc tính: 
`router: { middleware: 'auth'}` (trong đó auth là tên một file trong thư mục middleware)

Đọc thêm chi tiết về thư mục Middleware tại document chính thức của NuxtJS [the documentation](https://nuxtjs.org/guide/routing#middleware).
