CREATE DATABASE database_01_tenhocvien;
USE database_01_tenhocvien;

CREATE TABLE courses (
  id INT NOT NULL,
  name VARCHAR(50),
  price FLOAT,
  detail TEXT,
  teacher_id INT NOT NULL,
  active INT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

ALTER TABLE courses ADD COLUMN description TEXT NULL AFTER detail;

ALTER TABLE courses CHANGE COLUMN detail content TEXT NOT NULL;

INSERT INTO courses (id, name, price, description, content, teacher_id, active, created_at, updated_at)
VALUES
(1, 'Course 1', 100, 'Description 1', 'Content 1', 1, 1, '2023-08-22 15:20:00', NOW()),
(2, 'Course 2', 200, 'Description 2', 'Content 2', 1, 1, '2023-08-22 15:20:00', NOW()),
(3, 'Course 3', 300, 'Description 3', 'Content 3', 1, 1, '2023-08-22 15:20:00', NOW()),
(4, 'Course 4', 150, 'Description 4', 'Content 4', 2, 1, '2023-08-22 15:20:00', NOW()),
(5, 'Course 5', 250, 'Description 5', 'Content 5', 2, 1, '2023-08-22 15:20:00', NOW()),
(6, 'Course 6', 350, 'Description 6', 'Content 6', 2, 1, '2023-08-22 15:20:00', NOW()),
(7, 'Course 7', 180, 'Description 7', 'Content 7', 3, 1, '2023-08-22 15:20:00', NOW()),
(8, 'Course 8', 280, 'Description 8', 'Content 8', 3, 1, '2023-08-22 15:20:00', NOW()),
(9, 'Course 9', 380, 'Description 9', 'Content 9', 3, 1, '2023-08-22 15:20:00', NOW());

UPDATE courses SET name = 'New Name course 1', price = 110 WHERE id = 1;
UPDATE courses SET name = 'New Name course 2', price = 210 WHERE id = 2;
UPDATE courses SET name = 'New Name course 3', price = 310 WHERE id = 3;
UPDATE courses SET name = 'New Name course 4', price = 410 WHERE id = 4;
UPDATE courses SET name = 'New Name course 5', price = 510 WHERE id = 5;
UPDATE courses SET name = 'New Name course 6', price = 610 WHERE id = 6;
UPDATE courses SET name = 'New Name course 7', price = 710 WHERE id = 7;
UPDATE courses SET name = 'New Name course 8', price = 810 WHERE id = 8;
UPDATE courses SET name = 'New Name course 9', price = 910 WHERE id = 9;

CREATE TABLE teacher (
  id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  bio TEXT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

INSERT INTO teacher (id, name, bio, created_at, updated_at)
VALUES
(1, 'Teacher 1', 'Bio 1', '2023-08-22 15:20:00', NOW()),
(2, 'Teacher 2', 'Bio 2', '2023-08-22 15:20:00', NOW()),
(3, 'Teacher 3', 'Bio 3', '2023-08-22 15:20:00', NOW());

UPDATE teacher SET bio = 'New Bio 1' WHERE id = 1;
UPDATE teacher SET bio = 'New Bio 2' WHERE id = 2;
UPDATE teacher SET bio = 'New Bio 3' WHERE id = 3;

SELECT * FROM teacher;
SELECT * FROM courses;
