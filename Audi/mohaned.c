#include <stdio.h>
int av(int a[],int size,int key,int low, int high){
int    middle=(low+high)/2;
    while(low<=high){
        if(a[middle]==key){
            return middle;
        }
            else if(a[middle]>key){
                low=middle+1;
            }
        else if(a[middle]<key){
            high=middle-1;
        }

    }
    return -1;
}
int main(){
int    array[4]={1,2,3,4};
    av(array,4,3,0,3);
    if(av!=-1){
        printf("Found");
    }
    else{
        printf("Not found");
    }