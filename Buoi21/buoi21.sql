CREATE DATABASE `database_04_TranDucAnh` /*!40100 COLLATE 'utf8mb4_unicode_ci' */;

USE database_04_TranDucAnh;

CREATE TABLE
  `CHI_TIET_SU_DUNG_DV` (
    `MaDatPhong` varchar(50),
    `MaDV` varchar(50),
    `SoLuong` int DEFAULT 0,
    PRIMARY KEY (`MaDatPhong`, `MaDV`)
  );

CREATE TABLE
  `DICH_VU_DI_KEM` (
    `MaDV` varchar(50) PRIMARY KEY,
    `TenDV` varchar(255),
    `DonViTinh` varchar(100),
    `DonGia` float DEFAULT 0
  );

CREATE TABLE
  `DAT_PHONG` (
    `MaDatPhong` varchar(50) PRIMARY KEY,
    `MaPhong` varchar(50),
    `MaKH` varchar(50),
    `NgayDat` timestamp,
    `GioBatDau` timestamp,
    `GioKetThuc` timestamp,
    `TienDatCoc` int DEFAULT 0,
    `GhiChu` text,
    `TrangThaiDat` text
  );

CREATE TABLE
  `PHONG` (
    `MaPhong` varchar(50) PRIMARY KEY,
    `LoaiPhong` varchar(100),
    `SoKhachHangToiDa` int,
    `GiaPhong` int,
    `MoTa` text
  );

CREATE TABLE
  `KHACH_HANG` (
    `MaKH` varchar(50) PRIMARY KEY,
    `TenKH` varchar(255),
    `DiaChi` varchar(255),
    `SoDT` varchar(20)
  );

ALTER TABLE `CHI_TIET_SU_DUNG_DV` ADD FOREIGN KEY (`MaDatPhong`) REFERENCES `DAT_PHONG` (`MaDatPhong`);

ALTER TABLE `CHI_TIET_SU_DUNG_DV` ADD FOREIGN KEY (`MaDV`) REFERENCES `DICH_VU_DI_KEM` (`MaDV`);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`MaKH`) REFERENCES `KHACH_HANG` (`MaKH`);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`MaPhong`) REFERENCES `PHONG` (`MaPhong`);

INSERT INTO
  PHONG (
    MaPhong,
    LoaiPhong,
    SoKhachHangToiDa,
    GiaPhong,
    MoTa
  )
VALUES
  ('P0001', 'Loại 1', 20, 60000, NULL),
  ('P0002', 'Loại 1', 25, 80000, NULL),
  ('P0003', 'Loai 2', 15, 50000, NULL),
  ('P0004', 'Loại 3', 20, 50000, NULL);

INSERT INTO
  KHACH_HANG (MaKH, TenKH, DiaChi, SoDT)
VALUES
  ('KH0001', 'Nguyen Van A', 'Hoa xuan', '11111'),
  ('KH0002', 'Nguyen Van B', 'Hoa hai', '111'),
  ('KH0003', 'Phan Van An', 'Cam le', '11111'),
  ('KH0004', 'Phan Van E', 'Hoa xuan', '1111111114');

INSERT INTO
  DICH_VU_DI_KEM (MaDV, TenDV, DonViTinh, DonGia)
VALUES
  ('DV001', 'Beer', 'lon', 10000),
  ('DV002', 'Nuoc ngot', 'lon', 8000),
  ('DV003', 'Trai cay', 'dia', 35000),
  ('DV004', 'Khan uot', 'cai', 2000);

INSERT INTO
  DAT_PHONG (
    MaDatPhong,
    MaPhong,
    MaKH,
    NgayDat,
    GioBatDau,
    GioKetThuc,
    TienDatCoc,
    GhiChu,
    TrangThaiDat
  )
VALUES
  (
    'DP0001',
    'P0001',
    'KH0002',
    '2018-03-26 00:00:00',
    '2018-03-26 11:00:00',
    '2018-03-26 13:30:00',
    100000,
    NULL,
    'Da dat'
  ),
  (
    'DP0002',
    'P0001',
    'KH0003',
    '2018-03-27 00:00:00',
    '2018-03-27 17:15:00',
    '2018-03-27 19:15:00',
    50000,
    NULL,
    'Da huy'
  ),
  (
    'DP0003',
    'P0002',
    'KH0002',
    '2018-03-26 00:00:00',
    '2018-03-26 20:30:00',
    '2018-03-26 22:15:00',
    100000,
    NULL,
    'Da dat'
  ),
  (
    'DP0004',
    'P0003',
    'KH0003',
    '2018-04-01 00:00:00',
    '2018-04-01 19:30:00',
    '2018-04-01 21:15:00',
    200000,
    NULL,
    'Da dat'
  );

INSERT INTO
  CHI_TIET_SU_DUNG_DV (MaDatPhong, MaDV, SoLuong)
VALUES
  ('DP0001', 'DV001', 20),
  ('DP0001', 'DV003', 1),
  ('DP0001', 'DV002', 10),
  ('DP0002', 'DV002', 10),
  ('DP0002', 'DV003', 1),
  ('DP0003', 'DV003', 2),
  ('DP0003', 'DV004', 10);

SELECT
  MaDatPhong,
  MaDV,
  SoLuong
FROM
  CHI_TIET_SU_DUNG_DV
WHERE
  SoLuong > 3
  AND SoLuong < 10;

UPDATE PHONG
SET
  GiaPhong = GiaPhong + 10000
WHERE
  SoKhachHangToiDa > 10;

DELETE FROM CHI_TIET_SU_DUNG_DV
WHERE
  MaDatPhong IN (
    SELECT
      MaDatPhong
    FROM
      DAT_PHONG
    WHERE
      TrangThaiDat = 'Da huy'
  );

DELETE FROM DAT_PHONG
WHERE
  TrangThaiDat = 'Da huy';

SELECT
  TenKH
FROM
  KHACH_HANG
WHERE
  TenKH LIKE 'H%'
  OR TenKH LIKE 'N%'
  OR TenKH LIKE 'M%'
  AND LENGTH (TenKH) <= 20;

SELECT DISTINCT
  TenKH
FROM
  KHACH_HANG;

SELECT
  MaDV,
  TenDV,
  DonViTinh,
  DonGia
FROM
  DICH_VU_DI_KEM
WHERE
  (
    DonViTinh = 'lon'
    AND DonGia > 10000
  )
  OR (
    DonViTinh = 'Cai'
    AND DonGia < 5000
  );

SELECT
  DP.MaDatPhong,
  DP.MaPhong,
  P.LoaiPhong,
  P.SoKhachHangToiDa,
  P.GiaPhong,
  DP.MaKH,
  KH.TenKH,
  KH.SoDT,
  DP.NgayDat,
  DP.GioBatDau,
  DP.GioKetThuc,
  CTDV.MaDV,
  CTDV.SoLuong,
  DV.DonGia
FROM
  DAT_PHONG AS DP
  JOIN PHONG AS P ON DP.MaPhong = P.MaPhong
  JOIN KHACH_HANG AS KH ON DP.MaKH = KH.MaKH
  JOIN CHI_TIET_SU_DUNG_DV AS CTDV ON DP.MaDatPhong = CTDV.MaDatPhong
  JOIN DICH_VU_DI_KEM AS DV ON CTDV.MaDV = DV.MaDV
WHERE
  YEAR (DP.NgayDat) IN (2016, 2017)
  AND P.GiaPhong > 50000;