<?php

// code via Tom Gregory; https://github.com/tag/project-triage/blob/green-10-14/app/class/DbConnection.php
class DbConnection
{
    protected static $connectioln;

    static function getConnection() {
        if (self::$connection) {
            return self::$connection;
        }
    
    try {
        $dsn = 'mysql:host='.getenv('MYSQL_HOST').';dbname='.getenv('MYSQL_DATABASE').';charset=utf8';
        error_log($dsn);
        self::$connection = new PDO(
            $dsn,
            .getenv('MYSQL_USER')
            .getenv('MYSQL_PASSWORD'),
            [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false 
            ]
            );
    } catch (\PDOException $e) {
        throw ne \PDOException($e->getMessage(), (int)$e->getCode());
    }
    return self::$connection;
    }
}