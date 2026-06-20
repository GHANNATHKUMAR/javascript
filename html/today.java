import java.util.Scanner;
import java.util.*;
public class today {
    public static int add(int num){
        int sum=0;
        while(num>0){
            sum+=num%10;
            num=num/10;
        }
        return sum;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int N=sc.nextInt(); 
        int arr[]=new int [N+1];
        for(int i=1;i<=N;i++) arr[i]=sc.nextInt();
        HashMap<Integer , Integer> map=new HashMap<>();
        int ans=Integer.MIN_VALUE;
        for(int i=1;i<=N;i++){
              if(map.containsKey(add(arr[i]))) {
                ans=Math.max(ans,arr[i]+arr[map.get(add(arr[i]))]);
                if(arr[i]>arr[map.get(add(arr[i]))]) map.put(add(arr[i]),i);
              }
              else{
              map.put(add(arr[i]),i);
              }
        }
        System.out.println(ans);;
    }
}
