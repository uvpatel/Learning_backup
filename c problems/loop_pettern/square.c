#include <stdio.h>

int main(){
    int n;
    printf("Enter number: ");
    scanf("%d",&n);

    for (int i = 0; i < n+1; i++)
    {
        for (int j = 0; j < n+1; j++)
        {
        printf("%d\n",n);
        }
        
    }
    
    return 0;
}