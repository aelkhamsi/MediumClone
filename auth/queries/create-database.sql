IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'medium')
BEGIN
  CREATE DATABASE medium;
END;
GO