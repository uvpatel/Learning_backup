#include <stdio.h>

int main(){

    int a;
    float b;
    char c;
    
    printf("Enter value of a: ");
    scanf("%d", &a);
    
    printf("Enter value of b: ");
    scanf("%f", &b);
    
    printf("Enter value of c: ");
    scanf(" %c", &c);  

    printf("The value of a is: %d\nThe value of b is: %f\nThe value of c is: %c\n", a, b, c);

    return 0;
}