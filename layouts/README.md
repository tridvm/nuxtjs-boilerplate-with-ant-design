# LAYOUTS

Thư mục này chứa các layout thường sử dụng trong website.
Layout là những kiểu mẫu trang có những phần cố định và những phần thay đổi tùy theo nội dung.
Ví dụ ta có thể tạo hai loại layout khác nhau:
- default: layout này được sử dụng mặc định trong hầu hết các trang (bao gôm phía trên lầ header cố định, phía dưới là footer cố định, ở giữa là nội dung (để ý thẻ `<nuxt />`) - tùy vào từng trang sẽ có nội dung khác nhau)
- fullpage: layout này được sử dụng khi muốn tạo một trang không có header hay footer (ví dụ trang login) mà chỉ có nội dung chính. Để sử dụng layout này ở các trang trong thư mục `page` phải sử dụng thuộc tính `layout: 'fullpage'`

Đọc thêm chi tiết về thư mục Layouts tại document chính thức của NuxtJS [the documentation](https://nuxtjs.org/guide/views#layouts).
