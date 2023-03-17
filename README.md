# font-end
## Folder Structure
1. assests: chứa images, svg, icon, ...
2. layout: chứa template của trang web: header, footer, main-layout, ...
3. modules: chứa các trang, tính năng hiển thị ở main-layout
4. shared: chứa các thành phần dùng chung cho toàn bộ app
    - shared/components: chứa các components dùng chung
    - shared/models: chứa các kiểu dữ liệu (entity)
    - shared/services: chứa các services dùng để gọi API
    - shared/utils: chứa các hàm dùng chung
    ...
5. redux: Thư mục quản lí state và action của các module
6. routes: Thư mục chứa các routes của trang web
7. styles: Thư mục chứa các file customize css

## Setup Project
git clone https://github.com/Tran-Hung-2k2/candle-in-the-wind.git
1. Fontend
    - Di chuyển vào thư mục fontend. Trên terminal chạy lệnh "npm i"
    - Chạy "npm start"
2. Backend
    - Di chuyển vào thư mục backend. Trên terminal chạy lệnh "npm i"
    - Trong mySQL root tạo database có tên "backend_cnpm" và cài đặt database giống backend/src/config/config.json (development). Chú password đặt giống với mật khẩu của root
    - Di chuyển vào thư mục backend/src. Trên terminal chạy lệnh "npx sequelize-cli db:migrate:undo:all"
    - Chạy "npx sequelize-cli db:migrate"
    - Mở file backend_cnpm.sql và chạy trong mySQL để tạo dữ liệu
    - Trong thư mục backend chạy lệnh "npm start"
