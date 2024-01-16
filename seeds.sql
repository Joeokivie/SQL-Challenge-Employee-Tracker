-- Inserts generic department names into the department table
INSERT INTO departments
  (department_name)
VALUES
  ('Research & Development'),
  ('Marketing'),
  ('Human Resources'),
  ('Operations');

-- Inserts example roles of employees into the role table
INSERT INTO job_titles
  (title_name,salary_amount,department_id)
VALUES
  ('Web Developer', 90000, 1),
  ('Marketing Specialist', 78000, 2),
  ('HR Manager', 110000, 3),
  ('Operations Supervisor', 190000, 4);

-- Inserts example employee information into the employee table
INSERT INTO employees
  (first_name, last_name, job_id, manager_id)
VALUES
  ('Adam', 'Johnson', 1, NULL),
  ('Eva', 'Garcia', 2, 1),
  ('Michael', 'Lee', 3, 2),
  ('Sophia', 'Martinez', 4, 3);

