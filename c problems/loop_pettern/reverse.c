#include <stdio.h>

int main()
{
    int n = 1234;
    int remender = n % 10;
    int reverse = 0;
    for (int i = 0; i < n; i++)
    {
        remender = n % 10;
    }
    reverse = reverse + remender;
    printf("%d", reverse);
    return 0;
}