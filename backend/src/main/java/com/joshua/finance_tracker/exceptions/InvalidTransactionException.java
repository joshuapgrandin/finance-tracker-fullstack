package com.joshua.finance_tracker.exceptions;

public class InvalidTransactionException extends RuntimeException{
    public InvalidTransactionException(String message) {
        super(message);
    }
}
