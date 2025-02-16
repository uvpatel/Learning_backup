#include <stdio.h>

int main(){
    int sum = 0;
    // int count = 1;
    int n;
    printf("Enter your number: ");
    scanf("%d",&n);
    for (int i = 1; i <n+1; i++)
    {
        sum = sum + i;
    }
    printf("The sum is: %d",sum);
    return 0;
}