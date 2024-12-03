# Potential Stack Overflow in Recursive GCD Function

This repository demonstrates a JavaScript function that calculates the greatest common divisor (GCD) using Euclid's algorithm recursively. While functionally correct for many inputs, it is susceptible to stack overflow errors when dealing with extremely large numbers.

## Bug Description

The recursive implementation of the GCD function can lead to stack overflow if the inputs are very large.  Each recursive call adds a new stack frame, and excessively deep recursion can exceed the JavaScript engine's call stack limit.

## Solution

The solution provided avoids recursion using an iterative approach, eliminating the risk of stack overflow regardless of input size.