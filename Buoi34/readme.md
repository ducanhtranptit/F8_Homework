# Hướng dẫn tạo admin user để truy cập đầy đủ tính năng
- B1: Vào bảng users tạo user với name, email và password
- B2: Vào bảng roles tạo một role mới trường name là "super admin"  
- B4: Vào bảng permissions tạo 4 bản ghi với trường value tương ứng lần lượt là "read, add, update, delete"
- B5: Tại bảng phụ role_user tạo một bản ghi liên kết giữa 2 bản ghi vừa tạo ở bảng users và roles
- B6: Tại bảng phụ user_permission tạo 4 bảng ghi liên kết roles "super admin" với đầy đủ 4 quyền mới tạo ở trong bảng permissions 