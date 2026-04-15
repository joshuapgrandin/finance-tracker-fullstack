package com.joshua.finance_tracker.services;

import com.joshua.finance_tracker.enums.CategoryType;
import com.joshua.finance_tracker.enums.TransactionType;
import com.joshua.finance_tracker.exceptions.InvalidTransactionException;
import com.joshua.finance_tracker.exceptions.TransactionNotFoundException;
import com.joshua.finance_tracker.model.Transaction;
import com.joshua.finance_tracker.repository.TransactionRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    private static final int YEAR_LIMIT = 1900;
    private static final int MIN_MONTH = 1;
    private static final int MAX_MONTH = 12;

    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @Transactional
    public void addTransaction(Transaction transaction)
    {
        transactionRepository.save(transaction);
    }

    @Transactional
    public void removeTransaction(int id)
    {
        if (!transactionRepository.existsById(id))
        {
            throw new TransactionNotFoundException("Transaction with id: " + id + " not found!");
        }

        transactionRepository.deleteById(id);
    }

    public Optional<Transaction> getById(int id)
    {
        return transactionRepository.findById(id);
    }

    public List<Transaction> viewAllTransactions()
    {
        return transactionRepository.findAll();
    }

    public List<Transaction> getTransactionsByMonth(int month, int year)
    {
        verifyMonthAndYear(month, year);

        return transactionRepository.findByMonth(month, year);
    }

    public List<Transaction> getTransactionsByCategory(CategoryType categoryType)
    {
        return transactionRepository.findByCategoryType(categoryType);
    }

    public List<Transaction> getTransactionsByTransactionalType(TransactionType transactionType)
    {
        return transactionRepository.findByTransactionType(transactionType);
    }

    public double getTotalIncome()
    {
        return transactionRepository.findByTransactionType(TransactionType.INCOME)
                .stream()
                .mapToDouble(Transaction::getAmount)
                .sum();
    }

    public double getTotalExpense()
    {
        return transactionRepository.findByTransactionType(TransactionType.EXPENSE)
                .stream()
                .mapToDouble(Transaction::getAmount)
                .sum();
    }

    public double getBalance() {
        return getTotalIncome() - getTotalExpense();
    }

    private void verifyMonthAndYear(int month, int year)
    {
        if (month < MIN_MONTH || month > MAX_MONTH)
        {
            throw new InvalidTransactionException("Please use a valid month e.g 1, 2, 3..");
        }

        if (year <= YEAR_LIMIT)
        {
            throw new InvalidTransactionException("Please use a sensible year.");
        }
    }
}
