package com.joshua.finance_tracker.model;

import com.joshua.finance_tracker.enums.CategoryType;
import com.joshua.finance_tracker.enums.TransactionType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name= "transactions")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Enumerated(EnumType.STRING)
    private CategoryType categoryType;
    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;
    private double amount;
    private LocalDate date;
}
