#include <stdio.h>

int main(){
    int n ;
    char c = '*';
    printf("Enter number: ");
    scanf("%d",&n);
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
           printf("%c\n",c);
        }
        
    }
    
    return 0;
}