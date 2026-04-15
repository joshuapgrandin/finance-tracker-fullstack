# Finance Tracker API

A RESTful API built with Spring Boot for managing personal finances. This is the second phase of the Finance Tracker project, rebuilding the CLI application as a proper backend API with a PostgreSQL database.

---

## Features

- Add income and expense transactions
- Retrieve all transactions
- Filter transactions by month, category or type
- Delete transactions by ID
- Global exception handling with meaningful HTTP responses
- Data persisted in PostgreSQL via Spring Data JPA

---

## Tech Stack

- Java 17
- Spring Boot 3.4.4
- Spring Data JPA / Hibernate
- PostgreSQL
- Lombok
- Maven

---

## Project Structure

```
src/main/java/com/joshua/finance_tracker/
├── controller/       # REST endpoints
├── dto/              # Data Transfer Objects
├── enums/            # CategoryType and TransactionType enums
├── exceptions/       # Custom exceptions and GlobalExceptionHandler
├── model/            # Transaction entity
├── repository/       # TransactionRepository — database access
└── services/         # TransactionService — business logic
```

---

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /transactions | Get all transactions |
| GET | /transactions/{id} | Get transaction by ID |
| GET | /transactions/month?month=4&year=2026 | Filter by month and year |
| GET | /transactions/category?categoryType=GROCERIES | Filter by category |
| GET | /transactions/type?transactionType=EXPENSE | Filter by type |
| POST | /transactions | Add a new transaction |
| DELETE | /transactions/{id} | Delete a transaction |

---

## Running Locally

**Prerequisites:**
- Java 17
- PostgreSQL running locally
- Maven

**Setup:**

1. Clone the repository
2. Create a PostgreSQL database:
```bash
createdb finance_tracker
```

3. Update `src/main/resources/application.properties` with your database credentials

4. Run the application:
```bash
mvn spring-boot:run
```

API will be available at `http://localhost:8080`

---

## Example Request

**POST /transactions**
```json
{
    "amount": 45.00,
    "categoryType": "GROCERIES",
    "transactionType": "EXPENSE",
    "date": "2026-04-12"
}
```

---

## What I Learned

Built as part of a self-directed learning path progressing from a Java CLI application to a full REST API. Key learning areas included Spring Boot architecture, dependency injection, JPA entity mapping, Spring Data repositories, REST conventions and global exception handling.

---

## Related Projects

- [Finance Tracker CLI](https://github.com/joshuapgrandin/finance-tracker-cli) — Phase 1: Java CLI version