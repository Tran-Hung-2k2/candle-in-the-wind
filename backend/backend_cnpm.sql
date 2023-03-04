USE backend_cnpm;

INSERT INTO `roles` (`ID_Role`, `name`, `createdAt`, `updatedAt`) 
VALUES ('1', 'admin', current_timestamp(), current_timestamp()),
	   ('2', 'user', current_timestamp(), current_timestamp());

INSERT INTO `users` (`ID_User`, `ID_Role`, `fullname`, `email`, `phone_number`, `address`, `password`, `createdAt`, `updatedAt`) 
VALUES ('1', '1', 'Admin', 'admin@gmail.com', '0123456789', 'Số 1 Đại Cồ Việt', '$2a$10$Pzk.F.xNkWEYVvCCCMm4CeYlslFxX8giI7tWqi4Ckl.qDidvY1qUO', current_timestamp(), current_timestamp()),
('2', '2', 'Tester', 'tester@gmail.com', '0123456789', 'Số 1 Đại Cồ Việt', '$2a$10$c.CuXtWXx/swd0CgQOcp6OocssQMtyI/dOmLBJGJmnbAgD81U05wC', current_timestamp(), current_timestamp());

INSERT INTO `categories` (`ID_Category`, `name`, `createdAt`, `updatedAt`) 
VALUES (1, 'Nến thơm', current_timestamp(), current_timestamp()),
	   (2, 'Tinh dầu', current_timestamp(), current_timestamp()),
       (3, 'Sáp thơm', current_timestamp(), current_timestamp());
       
INSERT INTO `products` (`ID_Product`, `ID_Category`, `title`, `price`, `discount`, `quantity`, `description`, `createdAt`, `updatedAt`) 
VALUES 
('1', '1', 'NẾN THƠM PHÒNG CAO CẤP 30 HƯƠNG YÊU THÍCH NHẤT ĐƯỢC CHỌN LỌC', '200000', '10000', '1000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau', current_timestamp(), current_timestamp()),
('2', '1', 'Nến thơm thiên nhiên trang trí phòng ấm áp, nến cốc SCANTED CANDEL 4x6cm decor không khói', '300000', '20000', '1000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau ', current_timestamp(), current_timestamp()),
('3', '1', 'Nến Thơm Bath And Body Works 1 Bấc', '200000', '10000', '1000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nhau', current_timestamp(), current_timestamp()),
('4', '3', 'Sáp THƠM PHÒNG CAO CẤP', '200000', '10000', '1000', 'Với kinh nghiệm hơn 10 năm nghiên cứu và làm nến thơm,chúng tôi cho ra bộ sưu tập với 30 mùi hương khác nh', current_timestamp(), current_timestamp()),
('5', '3', 'Sáp thơm phòng khử mùi Mr. Fresh 230g', '200000', '10000', '1000', 'Nến thơm hình lục giác siêu đánh yêu, sang trọng dùng trang trí nhà cửa', current_timestamp(), current_timestamp()),
('6', '3', 'Sáp thơm phòng Simidaising', '400000', '10000', '1000', 'Nến thơm hình lục giác siêu đánh yêu, sang trọng dùng trang trí nhà cửa', current_timestamp(), current_timestamp()),
('7', '2', 'Tinh dầu thiên nhiên Noison 10ml', '500000', '10000', '1000', 'Nến thơm hình lục giác siêu đánh yêu, sang trọng dùng trang trí nhà cửa', current_timestamp(), current_timestamp()),
('8', '2', 'Tinh dầu thiên nhiên Bath and body shop', '120000', '10000', '1000', 'Nến thơm hình lục giác siêu đánh yêu, sang trọng dùng trang trí nhà cửa', current_timestamp(), current_timestamp()),
('9', '2', 'Tinh dầu thiên nhiên Hermes', '240000', '10000', '1000', 'Nến thơm hình lục giác siêu đánh yêu, sang trọng dùng trang trí nhà cửa', current_timestamp(), current_timestamp()),
('10', '2', 'Tinh dầu thiên nhiên Louis vuitton', '250000', '10000', '1000', 'Sản phẩm nhiều mẫu mã đa dạng, đẹp mắt và thắp sáng tốt, mùi hương nhẹ dễ chịu.', current_timestamp(), current_timestamp()),
('11', '1', '(AUTH) Nến Thơm 1 Bấc Bath & Body Works - Nhiều Mùi Thơm & Hot 198g MH Store', '200000', '10000', '1000', 'Sản phẩm nhiều mẫu mã đa dạng, đẹp mắt và thắp sáng tốt, mùi hương nhẹ dễ chịu.', current_timestamp(), current_timestamp()),
('12', '1', '[NẾN THƠM] 100 gr Sáp gel trong suốt làm nến trang trí tự làm nến tại nhà', '300000', '20000', '1000', 'Sản phẩm nhiều mẫu mã đa dạng, đẹp mắt và thắp sáng tốt, mùi hương nhẹ dễ chịu. ', current_timestamp(), current_timestamp()),
('13', '1', 'Nến Thơm Và Tinh Dầu Khuếch Tán Dành Cho Nữ Dịp Sinh Nhật, Valentine, 8/3, 20/10, Kỉ Niệm', '200000', '10000', '1000', 'Sản phẩm nhiều mẫu mã đa dạng, đẹp mắt và thắp sáng tốt, mùi hương nhẹ dễ chịu.', current_timestamp(), current_timestamp()),
('14', '3', 'Sáp thơm khử mùi phòng Pure Aroma 230g cao cấp - AMZO', '200000', '10000', '1000', 'Tinh dầu thơm chiết suất từ thiên nhiên dùng để xông phòng. Tạo cảm giác sảng khoái, hưng phấn, thơm mát và êm ái cho không gian sống và giấc ngủ của bạn. Tinh dầu được dùng với đèn xông tinh dầu hoặc máy khuếch tán tinh dầu sẽ cho hiệu quả cao như vào Spa. 
Các mùi: Bạc Hà, Sả chanh, Rosemary, Bạch đàn, Hoa Hồng, ...', current_timestamp(), current_timestamp()),
('15', '3', 'Sáp Thơm AMBIPUR Luxe 180G Hương Gỗ Rừng Và Hoa Nhài', '200000', '10000', '1000', 'Sản phẩm nhiều mẫu mã đa dạng, đẹp mắt và thắp sáng tốt, mùi hương nhẹ dễ chịu.', current_timestamp(), current_timestamp()),
('16', '3', 'Sáp Thơm Chupa Chups Thái Lan 4 Vị Size Lớn XXL', '400000', '10000', '1000', 'Sản phẩm nhiều mẫu mã đa dạng, đẹp mắt và thắp sáng tốt, mùi hương nhẹ dễ chịu.', current_timestamp(), current_timestamp()),
('17', '2', 'Lọ 10ml Tinh Dầu Thiên Nhiên Nguyên Chất Nhiều Mùi Thơm Phòng Giúp Bạn Thư Giãn Sảng Khoái Mỗi Ngày', '500000', '10000', '1000', 'Sản phẩm nhiều mẫu mã đa dạng, đẹp mắt và thắp sáng tốt, mùi hương nhẹ dễ chịu.', current_timestamp(), current_timestamp()),
('18', '2', 'Tinh dầu Mộc Nhiên nguyên chất có kiểm định, tinh dầu sả chanh,bạc hà', '120000', '10000', '1000', 'Sản phẩm nhiều mẫu mã đa dạng, đẹp mắt và thắp sáng tốt, mùi hương nhẹ dễ chịu.', current_timestamp(), current_timestamp()),
('19', '2', 'Tinh dầu thơm phòng phát sáng ban đêm ', '240000', '10000', '1000', 'Sản phẩm nhiều mẫu mã đa dạng, đẹp mắt và thắp sáng tốt, mùi hương nhẹ dễ chịu.', current_timestamp(), current_timestamp()),
('20', '2', 'Tinh dầu nguyên chất nhập khẩu Ấn Độ,', '250000', '10000', '1000', 'Tinh dầu thơm chiết suất từ thiên nhiên dùng để xông phòng. Tạo cảm giác sảng khoái, hưng phấn, thơm mát và êm ái cho không gian sống và giấc ngủ của bạn. Tinh dầu được dùng với đèn xông tinh dầu hoặc máy khuếch tán tinh dầu sẽ cho hiệu quả cao như vào Spa. 
Các mùi: Bạc Hà, Sả chanh, Rosemary, Bạch đàn, Hoa Hồng, ...', current_timestamp(), current_timestamp()),
('21', '1', 'Nến tealight nhỏ 1h bơ thực vật 100 viên, nến bơ Đài Loan, nến bơ không khói, không muội', '200000', '10000', '1000', 'Tinh dầu thơm chiết suất từ thiên nhiên dùng để xông phòng. Tạo cảm giác sảng khoái, hưng phấn, thơm mát và êm ái cho không gian sống và giấc ngủ của bạn. Tinh dầu được dùng với đèn xông tinh dầu hoặc máy khuếch tán tinh dầu sẽ cho hiệu quả cao như vào Spa. 
Các mùi: Bạc Hà, Sả chanh, Rosemary, Bạch đàn, Hoa Hồng, ...', current_timestamp(), current_timestamp()),
('22', '1', 'Nến thơm phòng cao cấp 4 mùa SWEET HOME làm từ sáp nguyên chất không khói hương thơm tự nhiên giúp decor phòng', '300000', '20000', '1000', 'Tinh dầu thơm chiết suất từ thiên nhiên dùng để xông phòng. Tạo cảm giác sảng khoái, hưng phấn, thơm mát và êm ái cho không gian sống và giấc ngủ của bạn. Tinh dầu được dùng với đèn xông tinh dầu hoặc máy khuếch tán tinh dầu sẽ cho hiệu quả cao như vào Spa. 
Các mùi: Bạc Hà, Sả chanh, Rosemary, Bạch đàn, Hoa Hồng, ...', current_timestamp(), current_timestamp()),
('23', '1', 'Nến thơm hình lục giác sang trọng dùng trang trí nhà cửa. Nến decor phong cách Hàn Quốc', '200000', '10000', '1000', 'Tinh dầu thơm chiết suất từ thiên nhiên dùng để xông phòng. Tạo cảm giác sảng khoái, hưng phấn, thơm mát và êm ái cho không gian sống và giấc ngủ của bạn. Tinh dầu được dùng với đèn xông tinh dầu hoặc máy khuếch tán tinh dầu sẽ cho hiệu quả cao như vào Spa. 
Các mùi: Bạc Hà, Sả chanh, Rosemary, Bạch đàn, Hoa Hồng, ...', current_timestamp(), current_timestamp());

INSERT INTO `vouchers` (`ID_Voucher`, `name`, `value`, `createdAt`, `updatedAt`) 
VALUES ('1', 'Voucher khuyến mãi nhân dịp năm mới 2023', '20000', current_timestamp(), current_timestamp()),
	('2', 'Merry Christmas', '50000', current_timestamp(), current_timestamp()),
	('3', 'Khuyến mãi nhân dịp lễ tình nhân valentine', '100000', current_timestamp(), current_timestamp()),
	('4', 'Hè rộn vang, tha hồ mua sắm', '20000', current_timestamp(), current_timestamp());

INSERT INTO `voucher_users` (`ID_VU`, `ID_Voucher`, `ID_User`, `createdAt`, `updatedAt`) 
VALUES (1, '4', '2', current_timestamp(), current_timestamp()),
(2, '3', '2', current_timestamp(), current_timestamp()),
(3, '2', '2', current_timestamp(), current_timestamp()),
(4, '1', '2', current_timestamp(), current_timestamp());

INSERT INTO `images` (`ID_Image`, `ID_Product`, `content`, `createdAt`, `updatedAt`) 
VALUES 
('1', '1', 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6f601100/hires/026634409.jpg?sh=471&yocs=o_s_', current_timestamp(), current_timestamp()),
('2', '2', 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7c8ce3f6/hires/026633943.jpg?sh=471&yocs=o_s_', current_timestamp(), current_timestamp()),
('3', '3', 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcda2cc8e/hires/026588599.jpg?sh=471&yocs=o_s_', current_timestamp(), current_timestamp()),
('4', '4', 'https://r2d.com.vn/wp-content/uploads/2020/07/Scented-Wax-Melts-Cinnamon-Orange-scaled.jpg', current_timestamp(), current_timestamp()),
('5', '5', 'https://r2d.com.vn/wp-content/uploads/2020/07/Sap-thom-tinh-dau-sa-chanh.jpg', current_timestamp(), current_timestamp()),
('6', '6', 'https://m.media-amazon.com/images/I/81fpDEassPL._SL1500_.jpg', current_timestamp(), current_timestamp()),
('7', '7', 'https://m.media-amazon.com/images/I/71HleyFIsAL.jpg', current_timestamp(), current_timestamp()),
('8', '8', 'https://post.healthline.com/wp-content/uploads/2021/05/1253543-5-26-21-The-18-Best-Essential-Oils-for-Anxiety-732x549-Feature.jpg', current_timestamp(), current_timestamp()),
('9', '9', 'https://cdn.shopify.com/s/files/1/1011/1722/articles/a-guide-to-essential-oil-substitutes-banner.jpg?v=1650448896', current_timestamp(), current_timestamp()),
('10', '10', 'https://images.ctfassets.net/x0wnv07j8mtt/skuPrimaryImage3575/933bc4141110956d44d57cddaeefb089/Lavender_15ml_US_Website_2022.png?q=75&fm=jpg&w=1080&h=1080', current_timestamp(), current_timestamp()),
('11', '11', 'https://cf.shopee.vn/file/a66110b350a2dec087d11fa735bd6c5c', current_timestamp(), current_timestamp()),
('12', '11', 'https://cf.shopee.vn/file/a955a7f887d65b29904bd84537b4cfe6', current_timestamp(), current_timestamp()),
('13', '11', 'https://cf.shopee.vn/file/aa40193241b9c2de341b5a78c6d508f2"', current_timestamp(), current_timestamp());
