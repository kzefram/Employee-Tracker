/* Seed for the DB */

INSERT INTO department(id, dept_name)
VALUES (1, "sales"),(2, "admin"), (3, "management");

INSERT INTO roles (role_id, title, salary, department_id)
VALUES  (1, 'Jr. Sales', '60000', 1),
        (2, 'Sr. Sales', '90000', 1),
        (3, 'Executive Assist', '40000', 2),
        (4, 'Admin Assist', '36500', 2),
        (5, 'Admin Manager', '70000', 3),
        (6, 'Sales Manager', '70000', 3),
        (7, 'Site Manager', '110000', 3);

INSERT INTO employees(employ_id, f_name, l_name, role_id, manager_id)
values  (1, 'Beau', 'Luc', 2, 6),
        (2, 'Andre', 'Duke',7, NULL),
        (3, 'Eric', 'Stanley', 3, 5),
        (4, 'Cloe', 'Von Payne', 1, 6),
        (5, 'Rose', 'Stacey', 1, 6),
        (6, 'Jaques', 'Valerie', 2, 6);