function fibs(n) {
    if (n <= 1) return 1;
    return fibs(n-1) + fibs(n-2);
}