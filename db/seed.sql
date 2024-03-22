-- db/seed.sql
\c authdb

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW()),
('Code418', '$2b$10$sCV/FAzVVD6JtYKpnTiDuO4.POCLg8tKRbo3uSflGJRHKMXsuODnK', 'code418@example.com', NOW(), NOW());

INSERT INTO teapots (name, image, price, description, material, capacity) 
VALUES 
('Racing Car', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711048045/TeaWhips1_qahbmm.webp',60, 'This one cup sized novelty teapot honors the formula one Grand Prix era of Fangio, Ascari, Moss and others. Hand made and hand painted in the UK in a unique Suffolk pottery.', 'Porcelain', 1),
('Hall Autumn Leaf Car', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711048494/TeaWhips2_nvhc0s.avif', 156, 'Beautiful limited edition Hall China Jewel Tea car teapot in the highly collectible Autumn Leaf pattern. Special 60th Anniversary Commemorative Issue, Autumn Leaf 1933 to 1993, Produced by the HALL CHINA COMPANY for the first time in 1933, the Autumn Leaf pattern went on to become the most popular and beloved dinnerware pattern in America.', null, 2),
('Vintage Rare Japan 1978 Race Car Teapot', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711048891/TeaWhips3_c6mmec.avif', 58, 'A very unique teapot, for the collectors of teapots, cars, or for those who like to add some whimsy to their surroundings.', 'Porcelain', 2),
('Rare Vintage Harrods Teapot in Shape of Delivery Truck', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711049184/TeaWhips4_ds6n5i.avif', 48, 'Rare Harrods Teapot in Shape of Delivery Truck, vintage from the 1980s', 'Porcelain', 1),
('Vintage Sarsaparilla Racecar Teapot', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711049426/TeaWhip5_ywp9fs.webp', 200, 'Fabulous vintage teapot Sarsaparilla Ecru Race car. Whites and metallic silvers, very art deco. Marked with a label and stamped. 1984 made in Japan.', 'Ceramic', 2),
('Vintage Pink Car Teapot', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711049640/TeaWhip6_rcvweq.webp', 40, 'A ceramic pink car teapot in perfect condition, vintage from the 1980s.', 'Ceramic', 4),
('Rare Black Racing Car Teapot', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711049875/TeaWhip7_kkzxwx.webp', 300, 'Highly-collectible Sarsaparilla Racing Car Teapot with lid and tags still attached! Silver accents shine brightly. Made in Japan', null, 2),
('Hot Rod Teapot', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711050285/TeaWhip8_p1ubze.webp', 177, 'Fabulous handmade and hand painted 40s coupe. The vast areas of chrome are actually genuine platinum,  and it is fully functional.', 'Earthenware', 1),
('Price & Kensington Pottery Car Teapot', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711050581/TeaWhip9_eyxvji.webp', 65, 'This is a Price & Kensington Pottery vintage car teapot. Hand painted in green with yellow and red lights, matt windows and gold painted elements this teapot is coming in good vintage condition.', 'Ceramic', 1),
('Tractor Teapot', 'https://res.cloudinary.com/dgifdj6nx/image/upload/v1711051183/TeaWhip10_zettiw.webp', 61, 'Novelty teapot depicting a farmer driving his faithful old tractor. Hand made, hand painted in the UK in a unique Suffolk pottery.', 'Porcelain', 1);


INSERT INTO reviews(user_id, teapot_id, content, rating, created_at)
VALUES
    (1, 3, 'Great teapot, love the design!', 5, NOW()),
    (1, 7, 'Nice addition to my collection.', 4, NOW()),
    (1, 2, 'Unique design, but a bit pricey.', 2, NOW()),
    (1, 5, 'Absolutely love this teapot!', 5, NOW()),
    (1, 9, 'Great vintage find, adds character to my kitchen.', 3, NOW()),
    (1, 10, 'Functional and stylish, exactly what I needed.', 5, NOW()),
    (2, 3, 'Absolutely love this teapot!', 5, NOW()),
    (2, 5, 'Very small.', 1, NOW()),
    (2, 8, 'Decently sized. wished it was a bit bigger.', 2, NOW()),
    (2, 2, 'This teapot is fantastic. It brews tea beautifully and looks great on my countertop.', 5, NOW()),
    (2, 7, 'I love the vintage vibe of this teapot. It adds a unique touch to my kitchen decor.', 4, NOW()),
    (2, 9, 'This teapot is both stylish and practical. It pours perfectly and keeps the tea hot.', 5, NOW());