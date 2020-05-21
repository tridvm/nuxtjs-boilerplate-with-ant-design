# PAGES
- Thư mục này chứa các trang cũng như định nghĩa đường dẫn cho trang (routing) của website.
- Một trang của website được sắp xếp layout, bào gồm các component trong thư mục `components`.
- Để kiểm tra điều kiện cụ thể mới được vào một trang nào đó, ta dùng middleware cho trang, được định nghĩa ở thư mục `middlewares`
- Để áp dụng một layout cụ thể cho trang web, ta sử dụng thuộc tính `layout: 'fullpage'`, với tên layout là các file được định nghĩa trong thư mục `layouts`
- Muốn sử dụng hình ảnh, video ta lấy từ thư mục `static`
- Để dể dàng quản lý state (trạng thái), ta sử dụng các file được định nghĩa trong `store`

# ROUTINGS
Sau đây là các tạo đường dẫn (routing) cơ bản:
- Để tạo đường dẫn `/posts`, ta tạo file `posts.vue` làm trang chính
- Nếu có thêm các đường dẫn khác nữa, bao gồm: `/posts` (trang chủ bài viết), `/posts/5` (trang bài viết chi tiết),... ta tiến hành tạo thư mục `posts`, sau đó trong thư mục `posts` ta tạo hai file `index.vue` (trang chủ bài viết) và `_id.vue` (trang chi tiết bài viết). Với `_id` là param được truyền theo id bài viết. Nếu muốn dẫn đường dẫn dài hơn `/users/5/posts/15` thì ta làm tương tự như trên.

Đọc thêm chi tiết về thư mục Pages và Routings tại document chính thức của NuxtJS [the documentation](https://nuxtjs.org/guide/routing).
