package com.joshua.finance_tracker.controller;

import com.joshua.finance_tracker.enums.CategoryType;
import com.joshua.finance_tracker.enums.TransactionType;
import com.joshua.finance_tracker.exceptions.TransactionNotFoundException;
import com.joshua.finance_tracker.model.Transaction;
import com.joshua.finance_tracker.services.TransactionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping()
    public List<Transaction> getAll()
    {
        return transactionService.viewAllTransactions();
    }

    @GetMapping("/{id}")
    public Transaction getById(@PathVariable int id)
    {
        return transactionService.getById(id).orElseThrow(
                () -> new TransactionNotFoundException("Transaction with ID: " + id + " not found!")
        );
    }

    @GetMapping("/month")
    public List<Transaction> getByMonth(@RequestParam int month, @RequestParam int year)
    {
        return transactionService.getTransactionsByMonth(month, year);
    }

    @GetMapping("/category")
    public List<Transaction> getByCategory(@RequestParam CategoryType categoryType)
    {
        return transactionService.getTransactionsByCategory(categoryType);
    }

    @GetMapping("/type")
    public List<Transaction> getByType(@RequestParam TransactionType transactionType)
    {
        return transactionService.getTransactionsByTransactionalType(transactionType);
    }

    @PostMapping()
    public ResponseEntity<Transaction> addTransaction(@RequestBody Transaction transaction)
    {
        transactionService.addTransaction(transaction);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeTransaction(@PathVariable int id)
    {
        transactionService.removeTransaction(id);
        return ResponseEntity.noContent().build();
    }


}
