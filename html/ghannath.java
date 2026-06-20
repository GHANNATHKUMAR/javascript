 import java.util.*;
 public class ghannath {
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in); 
		  int arr[]={0 , -7 ,4, 0 , -7, 0 , 1, 0}; 
		  int x=0; 
		  int y=1;
		  int z=0;
		   // we have to maximize the by selecting each total size subarray  but nonoverlapping and we have to select <=x subarray of size 1 and <=y subarray of size 2 and <=z subarray of size 3
		   int dp[][][][]=new int[arr.length+1][x+1][y+1][z+1];
		   for(int i=1;i<arr.length;i++){
			for(int j=0;j<=x;j++){
				for(int k=0;k<=y;k++){
					for(int l=0;l<=z;l++){
						dp[i][j][k][l]=dp[i-1][j][k][l];
						if(j>0){
							dp[i][j][k][l]=Math.max(dp[i][j][k][l], dp[i-1][j-1][k][l]+arr[i]);
						}
						if(i>1 && k>0){
							dp[i][j][k][l]=Math.max(dp[i][j][k][l], dp[i-2][j][k-1][l]+arr[i]+arr[i-1]);
						}
						if(i>2 && l>0){
							dp[i][j][k][l]=Math.max(dp[i][j][k][l], dp[i-3][j][k][l-1]+arr[i]+arr[i-1]+arr[i-2]);
						}
					}
		   }
		}

	}
	System.out.println(dp[arr.length-1][x][y][z]); 
}
 }
