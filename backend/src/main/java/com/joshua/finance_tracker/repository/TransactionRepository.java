package com.joshua.finance_tracker.repository;

import com.joshua.finance_tracker.enums.CategoryType;
import com.joshua.finance_tracker.enums.TransactionType;
import com.joshua.finance_tracker.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    List<Transaction> findByCategoryType(CategoryType categoryType);
    List<Transaction> findByTransactionType(TransactionType transactionType);
    @Query("SELECT t FROM Transaction t WHERE MONTH(t.date) = :month AND YEAR(t.date) = :year")
    List<Transaction> findByMonth(@Param("month") int month, @Param("year") int year);
}
